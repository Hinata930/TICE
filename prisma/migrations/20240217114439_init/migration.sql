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
    "due_date" DATE NOT NULL,
    "task_title" VARCHAR(64) NOT NULL,
    "task_description" VARCHAR(2048),

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "team_name" VARCHAR(32) NOT NULL,
    "creator" UUID,

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

-- CreateTable
CREATE TABLE "team_parent_child" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "team_a" UUID,
    "team_b" UUID,
    "parent_team" UUID,
    "child_team" UUID,

    CONSTRAINT "team_parent_child_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_invites" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "user_id" UUID,
    "team_id" UUID,

    CONSTRAINT "team_invites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visited_team" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "user_id" UUID,
    "team_id" UUID,

    CONSTRAINT "visited_team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_activity_type" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "activity_type" TEXT NOT NULL,

    CONSTRAINT "team_activity_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_activity" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "user_id" UUID,
    "team_id" UUID,
    "activity_type" UUID,

    CONSTRAINT "team_activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "unique_team_role" ON "roles"("team_id", "role_name");

-- CreateIndex
CREATE UNIQUE INDEX "user_team_user_id_team_id_key" ON "user_team"("user_id", "team_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "users"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_role_team_id_user_id_key" ON "user_role"("team_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_parent_child_team_a_team_b_key" ON "team_parent_child"("team_a", "team_b");

-- CreateIndex
CREATE UNIQUE INDEX "team_invites_user_id_team_id_key" ON "team_invites"("user_id", "team_id");

-- CreateIndex
CREATE UNIQUE INDEX "visited_team_user_id_team_id_key" ON "visited_team"("user_id", "team_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_activity_type_activity_type_key" ON "team_activity_type"("activity_type");

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "roles_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "fk_task_team" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_task_creator_fkey" FOREIGN KEY ("task_creator") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_creator_fkey" FOREIGN KEY ("creator") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

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

-- AddForeignKey
ALTER TABLE "team_parent_child" ADD CONSTRAINT "team_parent_child_team_a_fkey" FOREIGN KEY ("team_a") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team_parent_child" ADD CONSTRAINT "team_parent_child_team_b_fkey" FOREIGN KEY ("team_b") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team_parent_child" ADD CONSTRAINT "team_parent_child_parent_team_fkey" FOREIGN KEY ("parent_team") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team_parent_child" ADD CONSTRAINT "team_parent_child_child_team_fkey" FOREIGN KEY ("child_team") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team_invites" ADD CONSTRAINT "team_invites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team_invites" ADD CONSTRAINT "team_invites_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "visited_team" ADD CONSTRAINT "visited_team_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "visited_team" ADD CONSTRAINT "visited_team_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team_activity" ADD CONSTRAINT "team_activity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team_activity" ADD CONSTRAINT "team_activity_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team_activity" ADD CONSTRAINT "team_activity_activity_type_fkey" FOREIGN KEY ("activity_type") REFERENCES "team_activity_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
