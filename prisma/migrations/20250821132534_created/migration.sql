/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."SubscriptionStatus" AS ENUM ('active', 'past_due', 'cancelled', 'trailing', 'expired');

-- CreateEnum
CREATE TYPE "public"."PaymentStatus" AS ENUM ('pending', 'succeeded', 'failed', 'refunded');

-- CreateEnum
CREATE TYPE "public"."PaymentProviders" AS ENUM ('stripe');

-- CreateEnum
CREATE TYPE "public"."PaymentType" AS ENUM ('card');

-- CreateEnum
CREATE TYPE "public"."CardBrand" AS ENUM ('visa', 'mastercard');

-- DropTable
DROP TABLE "public"."User";

-- DropEnum
DROP TYPE "public"."Subscription_Status";

-- CreateTable
CREATE TABLE "public"."Users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "code_generated_at" TIMESTAMP(3) NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "refresh_token" TEXT,
    "refresh_generated_at" TIMESTAMP(3),
    "phone_number" INTEGER,
    "address_line_1" TEXT,
    "address_line_2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postal_code" TEXT,
    "country" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Subscriptions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "plan_id" TEXT NOT NULL,
    "status" "public"."SubscriptionStatus" NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "trial_end_date" TIMESTAMP(3),
    "cancel_at" TIMESTAMP(3),
    "canceled_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Payments" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "subscription_id" TEXT,
    "amount_cents" INTEGER NOT NULL,
    "currency" "public"."Currency" NOT NULL,
    "status" "public"."PaymentStatus" NOT NULL,
    "payment_method_id" TEXT NOT NULL,
    "transaction_reference" TEXT,
    "receipt_url" TEXT,
    "paid_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PaymentMethods" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "provider" "public"."PaymentProviders" NOT NULL,
    "type" "public"."PaymentType" NOT NULL,
    "last_digits" INTEGER,
    "expiry_month" INTEGER,
    "expiry_year" INTEGER,
    "brand" "public"."CardBrand",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentMethods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_number_key" ON "public"."Users"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Users_code_is_verified_key" ON "public"."Users"("code", "is_verified");

-- CreateIndex
CREATE INDEX "Subscriptions_user_id_status_idx" ON "public"."Subscriptions"("user_id", "status");

-- CreateIndex
CREATE INDEX "Subscriptions_plan_id_status_idx" ON "public"."Subscriptions"("plan_id", "status");

-- CreateIndex
CREATE INDEX "Payments_user_id_idx" ON "public"."Payments"("user_id");

-- CreateIndex
CREATE INDEX "Payments_subscription_id_idx" ON "public"."Payments"("subscription_id");

-- CreateIndex
CREATE INDEX "Payments_payment_method_id_idx" ON "public"."Payments"("payment_method_id");

-- CreateIndex
CREATE INDEX "Payments_transaction_reference_idx" ON "public"."Payments"("transaction_reference");

-- AddForeignKey
ALTER TABLE "public"."Subscriptions" ADD CONSTRAINT "Subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Subscriptions" ADD CONSTRAINT "Subscriptions_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "public"."Plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Payments" ADD CONSTRAINT "Payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Payments" ADD CONSTRAINT "Payments_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "public"."Subscriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Payments" ADD CONSTRAINT "Payments_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "public"."PaymentMethods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PaymentMethods" ADD CONSTRAINT "PaymentMethods_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
