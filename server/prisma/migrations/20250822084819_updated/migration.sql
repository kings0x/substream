/*
  Warnings:

  - A unique constraint covering the columns `[google_id]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `avatar` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Users" ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "google_id" TEXT,
ADD COLUMN     "google_refresh_token" TEXT,
ALTER COLUMN "password_hash" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_google_id_key" ON "public"."Users"("google_id");
