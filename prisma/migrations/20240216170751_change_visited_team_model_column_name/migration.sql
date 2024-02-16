/*
  Warnings:

  - You are about to drop the column `teamId` on the `visited_team` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `visited_team` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,team_id]` on the table `visited_team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `team_id` to the `visited_team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `visited_team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "visited_team" DROP CONSTRAINT "visited_team_teamId_fkey";

-- DropForeignKey
ALTER TABLE "visited_team" DROP CONSTRAINT "visited_team_userId_fkey";

-- DropIndex
DROP INDEX "visited_team_userId_teamId_key";

-- AlterTable
ALTER TABLE "visited_team" DROP COLUMN "teamId",
DROP COLUMN "userId",
ADD COLUMN     "team_id" UUID NOT NULL,
ADD COLUMN     "user_id" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "visited_team_user_id_team_id_key" ON "visited_team"("user_id", "team_id");

-- AddForeignKey
ALTER TABLE "visited_team" ADD CONSTRAINT "visited_team_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "visited_team" ADD CONSTRAINT "visited_team_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
