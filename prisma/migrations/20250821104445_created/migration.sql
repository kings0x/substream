/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."Currency" AS ENUM ('USD', 'EUR', 'GBP', 'NGN');

-- CreateEnum
CREATE TYPE "public"."BillingInterval" AS ENUM ('monthly', 'yearly');

-- CreateEnum
CREATE TYPE "public"."Subscription_Status" AS ENUM ('active', 'past_due', 'cancelled', 'trailing', 'expired');

-- DropTable
DROP TABLE "public"."user";

-- CreateTable
CREATE TABLE "public"."User" (
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Plans" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "currency" "public"."Currency" NOT NULL,
    "billing_interval" "public"."BillingInterval" NOT NULL,
    "trial_period_days" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plans_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "public"."User"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "User_code_is_verified_key" ON "public"."User"("code", "is_verified");

-- CreateIndex
CREATE INDEX "Plans_is_active_idx" ON "public"."Plans"("is_active");

-- CreateIndex
CREATE INDEX "Plans_billing_interval_idx" ON "public"."Plans"("billing_interval");

-- CreateIndex
CREATE UNIQUE INDEX "Plans_name_billing_interval_key" ON "public"."Plans"("name", "billing_interval");
