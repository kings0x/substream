/*
  Warnings:

  - A unique constraint covering the columns `[user_id,status]` on the table `Subscriptions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Subscriptions_user_id_status_key" ON "public"."Subscriptions"("user_id", "status");
