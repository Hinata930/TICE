-- CreateEnum
CREATE TYPE "ParkType" AS ENUM ('HARVEST', 'QUALITY');

-- CreateTable
CREATE TABLE "farming" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT clock_timestamp(),
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "userId" UUID NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 0,
    "exp" BIGINT NOT NULL DEFAULT 0,
    "money" BIGINT NOT NULL DEFAULT 0,
    "parkPoint" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "farming_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farming_tile" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "farmingId" UUID NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "cropId" UUID,
    "plantedAt" TIMESTAMP(3),
    "qualityScore" INTEGER NOT NULL DEFAULT 0,
    "lastWateredAt" TIMESTAMP(3),

    CONSTRAINT "farming_tile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farming_park" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "farmingId" UUID NOT NULL,
    "parkType" "ParkType" NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "farming_park_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crop" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "growTime" INTEGER NOT NULL,
    "seedPrice" INTEGER NOT NULL,
    "bSellPrice" INTEGER NOT NULL,
    "aSellPrice" INTEGER NOT NULL,
    "sSellPrice" INTEGER NOT NULL,
    "bHarvestExp" INTEGER NOT NULL,
    "aHarvestExp" INTEGER NOT NULL,
    "sHarvestExp" INTEGER NOT NULL,
    "waterScore" INTEGER NOT NULL,

    CONSTRAINT "crop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crop_quality" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cropId" UUID NOT NULL,
    "minScore" INTEGER NOT NULL,
    "bRate" INTEGER NOT NULL,
    "aRate" INTEGER NOT NULL,
    "sRate" INTEGER NOT NULL,

    CONSTRAINT "crop_quality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farming_seed" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "farmingId" UUID NOT NULL,
    "cropId" UUID NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "farming_seed_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "farming_userId_key" ON "farming"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "farming_tile_farmingId_x_y_key" ON "farming_tile"("farmingId", "x", "y");

-- CreateIndex
CREATE UNIQUE INDEX "farming_park_farmingId_parkType_key" ON "farming_park"("farmingId", "parkType");

-- CreateIndex
CREATE UNIQUE INDEX "crop_name_key" ON "crop"("name");

-- CreateIndex
CREATE UNIQUE INDEX "crop_quality_cropId_minScore_key" ON "crop_quality"("cropId", "minScore");

-- CreateIndex
CREATE UNIQUE INDEX "farming_seed_farmingId_cropId_key" ON "farming_seed"("farmingId", "cropId");

-- AddForeignKey
ALTER TABLE "farming" ADD CONSTRAINT "farming_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "farming_tile" ADD CONSTRAINT "farming_tile_farmingId_fkey" FOREIGN KEY ("farmingId") REFERENCES "farming"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farming_tile" ADD CONSTRAINT "farming_tile_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "crop"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farming_park" ADD CONSTRAINT "farming_park_farmingId_fkey" FOREIGN KEY ("farmingId") REFERENCES "farming"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "crop_quality" ADD CONSTRAINT "crop_quality_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "crop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farming_seed" ADD CONSTRAINT "farming_seed_farmingId_fkey" FOREIGN KEY ("farmingId") REFERENCES "farming"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farming_seed" ADD CONSTRAINT "farming_seed_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "crop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
