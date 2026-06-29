import { PrismaClient } from "@prisma/client";
import { crops } from "./data/crops";

export async function seedCrops(prisma: PrismaClient) {
  for (const cropData of crops) {
    const { quality, ...crop } = cropData;

    // 作物upsertする！！！！
    const createdCrop = await prisma.crop.upsert({
      where: {
        name: crop.name,
      },
      update: crop,
      create: crop,
    });

    // 品質テーブルを入れ直す
    await prisma.cropQuality.deleteMany({
      where: {
        cropId: createdCrop.id,
      },
    });

    await prisma.cropQuality.createMany({
      data: quality.map((q) => ({
        cropId: createdCrop.id,
        ...q,
      })),
    });
  }
}