/*
  Warnings:

  - You are about to alter the column `task_description` on the `tasks` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2048)`.

*/
-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "task_description" SET DATA TYPE VARCHAR(2048);
