/*
  Warnings:

  - You are about to drop the column `pdf_url` on the `Invoices` table. All the data in the column will be lost.
  - You are about to drop the column `receipt_url` on the `Payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Invoices" DROP COLUMN "pdf_url";

-- AlterTable
ALTER TABLE "public"."Payments" DROP COLUMN "receipt_url";
