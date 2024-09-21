/*
  Warnings:

  - You are about to drop the `CookieClicker` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CookieClicker" DROP CONSTRAINT "CookieClicker_user_id_fkey";

-- DropTable
DROP TABLE "CookieClicker";

-- CreateTable
CREATE TABLE "cookie_clicker" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "user_id" UUID,
    "cookie_count" BIGINT NOT NULL DEFAULT 0,
    "employee_level_1" INTEGER NOT NULL DEFAULT 0,
    "employee_level_2" INTEGER NOT NULL DEFAULT 0,
    "employee_level_3" INTEGER NOT NULL DEFAULT 0,
    "employee_level_4" INTEGER NOT NULL DEFAULT 0,
    "employee_level_5" INTEGER NOT NULL DEFAULT 0,
    "employee_level_6" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "cookie_clicker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cookie_clicker" ADD CONSTRAINT "cookie_clicker_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
