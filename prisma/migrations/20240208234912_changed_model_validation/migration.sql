/*
  Warnings:

  - You are about to alter the column `task_title` on the `tasks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(64)`.

*/
-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "task_title" SET DATA TYPE VARCHAR(64);
