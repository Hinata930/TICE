-- AlterTable
ALTER TABLE "team_parent_child" ADD COLUMN     "child_team" UUID;

-- AddForeignKey
ALTER TABLE "team_parent_child" ADD CONSTRAINT "team_parent_child_child_team_fkey" FOREIGN KEY ("child_team") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
