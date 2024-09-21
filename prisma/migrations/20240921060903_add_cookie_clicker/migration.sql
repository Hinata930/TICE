-- CreateTable
CREATE TABLE "CookieClicker" (
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

    CONSTRAINT "CookieClicker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CookieClicker" ADD CONSTRAINT "CookieClicker_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
