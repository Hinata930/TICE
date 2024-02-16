-- CreateTable
CREATE TABLE "visited_team" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "userId" UUID NOT NULL,
    "teamId" UUID NOT NULL,

    CONSTRAINT "visited_team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "visited_team_userId_teamId_key" ON "visited_team"("userId", "teamId");

-- AddForeignKey
ALTER TABLE "visited_team" ADD CONSTRAINT "visited_team_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "visited_team" ADD CONSTRAINT "visited_team_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
