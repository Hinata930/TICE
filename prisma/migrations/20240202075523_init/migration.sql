-- CreateTable
CREATE TABLE "roles" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "team_id" UUID,
    "role_name" VARCHAR(32) NOT NULL,
    "role_description" VARCHAR(256),

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "task_creator" UUID,
    "team_id" UUID,
    "due_date" DATE,
    "task_title" VARCHAR(256) NOT NULL,
    "task_description" TEXT,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "team_name" VARCHAR(32) NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_team" (
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "user_id" UUID,
    "team_id" UUID,
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "user_team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "user_id" VARCHAR(32) NOT NULL,
    "username" VARCHAR(64),
    "first_name" VARCHAR(256),
    "last_name" VARCHAR(256),
    "email_address" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_role" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "user_id" UUID,
    "team_id" UUID,
    "role_id" UUID,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "unique_team_role" ON "roles"("team_id", "role_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "users"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_role_team_id_user_id_key" ON "user_role"("team_id", "user_id");

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "roles_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "fk_task_team" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_task_creator_fkey" FOREIGN KEY ("task_creator") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_team" ADD CONSTRAINT "fk_user_team_team_id" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_team" ADD CONSTRAINT "fk_user_team_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;