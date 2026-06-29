import { Prisma } from "@prisma/client";

export type FarmingData =
  Prisma.FarmingGetPayload<{
    include: {
      tiles: {
        include: {
          crop: true;
        };
      };
      parks: true;
      seeds: {
        include: {
          crop: true;
        };
      };
    };
  }>;