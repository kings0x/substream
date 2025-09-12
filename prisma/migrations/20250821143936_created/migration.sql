/*
  Warnings:

  - Added the required column `invoice_id` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."InvoiceStatus" AS ENUM ('draft', 'open', 'paid', 'void', 'uncollectible');

-- CreateEnum
CREATE TYPE "public"."RefundStatus" AS ENUM ('pending', 'succeeded', 'failed');

-- CreateEnum
CREATE TYPE "public"."WebhookEventProcessedStatus" AS ENUM ('pending', 'processed', 'failed');

-- AlterTable
ALTER TABLE "public"."Payments" ADD COLUMN     "invoice_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Invoices" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "subscription_id" TEXT NOT NULL,
    "payment_method_id" TEXT NOT NULL,
    "amount_due_cents" INTEGER NOT NULL,
    "amount_paid_cents" INTEGER NOT NULL,
    "currency" "public"."Currency" NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "paid_at" TIMESTAMP(3),
    "status" "public"."InvoiceStatus" NOT NULL,
    "invoice_number" TEXT NOT NULL,
    "pdf_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Refunds" (
    "id" TEXT NOT NULL,
    "payment_id" TEXT NOT NULL,
    "amount_cents" INTEGER NOT NULL,
    "currency" "public"."Currency" NOT NULL,
    "reason" TEXT,
    "status" "public"."RefundStatus" NOT NULL,
    "gateway_ref" TEXT,
    "processed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Refunds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."WebhookEvents" (
    "id" TEXT NOT NULL,
    "provider" "public"."PaymentProviders" NOT NULL,
    "event_type" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "processed" "public"."WebhookEventProcessedStatus" NOT NULL,
    "recieved_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "WebhookEvents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_invoice_number_key" ON "public"."Invoices"("invoice_number");

-- CreateIndex
CREATE INDEX "Invoices_user_id_idx" ON "public"."Invoices"("user_id");

-- CreateIndex
CREATE INDEX "Invoices_subscription_id_idx" ON "public"."Invoices"("subscription_id");

-- CreateIndex
CREATE INDEX "Invoices_payment_method_id_idx" ON "public"."Invoices"("payment_method_id");

-- CreateIndex
CREATE INDEX "Invoices_status_due_date_idx" ON "public"."Invoices"("status", "due_date");

-- CreateIndex
CREATE INDEX "Invoices_due_date_idx" ON "public"."Invoices"("due_date");

-- CreateIndex
CREATE INDEX "Refunds_payment_id_idx" ON "public"."Refunds"("payment_id");

-- CreateIndex
CREATE INDEX "Refunds_gateway_ref_idx" ON "public"."Refunds"("gateway_ref");

-- CreateIndex
CREATE UNIQUE INDEX "WebhookEvents_event_id_key" ON "public"."WebhookEvents"("event_id");

-- CreateIndex
CREATE INDEX "WebhookEvents_provider_processed_idx" ON "public"."WebhookEvents"("provider", "processed");

-- AddForeignKey
ALTER TABLE "public"."Payments" ADD CONSTRAINT "Payments_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "public"."Invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Invoices" ADD CONSTRAINT "Invoices_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Invoices" ADD CONSTRAINT "Invoices_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "public"."Subscriptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Invoices" ADD CONSTRAINT "Invoices_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "public"."PaymentMethods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Refunds" ADD CONSTRAINT "Refunds_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "public"."Payments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
