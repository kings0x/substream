-- AlterTable
ALTER TABLE "public"."PaymentMethods" ADD COLUMN     "authorization_code" TEXT,
ADD COLUMN     "reusable" BOOLEAN NOT NULL DEFAULT false;
