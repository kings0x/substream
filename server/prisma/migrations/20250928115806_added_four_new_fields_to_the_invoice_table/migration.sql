/*
  Warnings:

  - A unique constraint covering the columns `[invoiceJobId]` on the table `Invoices` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subscriptionJobId]` on the table `Invoices` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subscription_id,billingStart]` on the table `Invoices` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `invoiceJobId` to the `Invoices` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Subscriptions_user_id_status_key";

-- AlterTable
ALTER TABLE "public"."Invoices" ADD COLUMN     "billingEnd" TIMESTAMP(3),
ADD COLUMN     "billingStart" TIMESTAMP(3),
ADD COLUMN     "invoiceJobId" TEXT NOT NULL,
ADD COLUMN     "subscriptionJobId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_invoiceJobId_key" ON "public"."Invoices"("invoiceJobId");

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_subscriptionJobId_key" ON "public"."Invoices"("subscriptionJobId");

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_subscription_id_billingStart_key" ON "public"."Invoices"("subscription_id", "billingStart");
