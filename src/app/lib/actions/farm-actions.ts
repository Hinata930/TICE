'use server';

import { prisma } from "../prisma";


export async function CreateNewFarmingProfile(userId: string) {
    const STARTER_SEEDS = [
    { name: "tomato", count: 10 },
    { name: "potato", count: 0 },
  ];


  await prisma.$transaction(async (tx) => {
    const farming = await tx.farming.create({
      data: {
        userId: userId,
        money: 100,
        
      },
    });

    // パーク
    await tx.farmingPark.createMany({
      data: [
        {
          farmingId: farming.id,
          parkType: "HARVEST",
        },
        {
          farmingId: farming.id,
          parkType: "QUALITY",
        },
      ],
    });

    // 最初の4マス
    await tx.farmingTile.createMany({
      data: [
        { farmingId: farming.id, x: 0, y: 0 },
        { farmingId: farming.id, x: 1, y: 0 },
        { farmingId: farming.id, x: 0, y: 1 },
        { farmingId: farming.id, x: 1, y: 1 },
      ],
    });

    // 種（あとでcropIdを取得して入れる）
    for (const seed of STARTER_SEEDS) {
      const crop = await tx.crop.findUnique({
        where: {
          name: seed.name,
        },
      });
      if (!crop) {
        throw new Error(`${seed.name} does not exist.`);
      }

      await tx.farmingSeed.create({
        data: {
          farmingId: farming.id,
          cropId: crop.id,
          count: seed.count,
        },
      });
    };
  });
}