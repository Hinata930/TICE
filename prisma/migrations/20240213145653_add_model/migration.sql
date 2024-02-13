/*
  Warnings:

  - A unique constraint covering the columns `[user_id,team_id]` on the table `user_team` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "team_parent_child" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "team_a" UUID,
    "team_b" UUID,
    "parent_team" UUID,

    CONSTRAINT "team_parent_child_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "team_parent_child_team_a_team_b_key" ON "team_parent_child"("team_a", "team_b");

-- CreateIndex
CREATE UNIQUE INDEX "user_team_user_id_team_id_key" ON "user_team"("user_id", "team_id");

-- AddForeignKey
ALTER TABLE "team_parent_child" ADD CONSTRAINT "team_parent_child_team_a_fkey" FOREIGN KEY ("team_a") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team_parent_child" ADD CONSTRAINT "team_parent_child_team_b_fkey" FOREIGN KEY ("team_b") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team_parent_child" ADD CONSTRAINT "team_parent_child_parent_team_fkey" FOREIGN KEY ("parent_team") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
