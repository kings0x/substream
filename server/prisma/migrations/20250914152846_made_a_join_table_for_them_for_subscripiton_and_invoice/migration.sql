/*
  Warnings:

  - You are about to drop the column `payment_method_id` on the `Invoices` table. All the data in the column will be lost.
  - You are about to drop the column `invoice_id` on the `Payments` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "public"."CardBrand" ADD VALUE 'verve';

-- AlterEnum
ALTER TYPE "public"."PaymentProviders" ADD VALUE 'paystack';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PaymentType" ADD VALUE 'bank';
ALTER TYPE "public"."PaymentType" ADD VALUE 'bank_transfer';

-- DropForeignKey
ALTER TABLE "public"."Invoices" DROP CONSTRAINT "Invoices_payment_method_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Payments" DROP CONSTRAINT "Payments_invoice_id_fkey";

-- DropIndex
DROP INDEX "public"."Invoices_payment_method_id_idx";

-- AlterTable
ALTER TABLE "public"."Invoices" DROP COLUMN "payment_method_id",
ADD COLUMN     "payment_id" TEXT,
ALTER COLUMN "amount_paid_cents" DROP NOT NULL,
ALTER COLUMN "currency" DROP NOT NULL,
ALTER COLUMN "due_date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Payments" DROP COLUMN "invoice_id";

-- AlterTable
ALTER TABLE "public"."Subscriptions" ALTER COLUMN "start_date" DROP NOT NULL;

-- CreateTable
CREATE TABLE "public"."payment_invoice" (
    "id" TEXT NOT NULL,
    "payment_id" TEXT NOT NULL,
    "amount_in_cents" INTEGER NOT NULL,
    "invoice_id" TEXT NOT NULL,

    CONSTRAINT "payment_invoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Invoices" ADD CONSTRAINT "Invoices_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "public"."Payments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payment_invoice" ADD CONSTRAINT "payment_invoice_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "public"."Payments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payment_invoice" ADD CONSTRAINT "payment_invoice_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "public"."Invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
