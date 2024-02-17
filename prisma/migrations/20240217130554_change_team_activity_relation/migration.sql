-- DropForeignKey
ALTER TABLE "team_activity" DROP CONSTRAINT "team_activity_user_id_fkey";

-- AddForeignKey
ALTER TABLE "team_activity" ADD CONSTRAINT "team_activity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
