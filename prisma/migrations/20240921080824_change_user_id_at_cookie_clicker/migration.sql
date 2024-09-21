/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `cookie_clicker` will be added. If there are existing duplicate values, this will fail.
  - Made the column `user_id` on table `cookie_clicker` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "cookie_clicker" ALTER COLUMN "user_id" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cookie_clicker_user_id_key" ON "cookie_clicker"("user_id");
