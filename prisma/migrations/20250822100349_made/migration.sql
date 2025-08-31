-- AlterTable
ALTER TABLE "public"."Users" ALTER COLUMN "code" DROP NOT NULL,
ALTER COLUMN "code_generated_at" DROP NOT NULL,
ALTER COLUMN "avatar" DROP NOT NULL;
