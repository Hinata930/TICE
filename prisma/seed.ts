import { PrismaClient } from "@prisma/client"; 
import { seedCrops } from "./seed/seedCrops";

const prisma = new PrismaClient();

async function main() {
  await prisma.teamActivityType.createMany({
    data: [
      { activity_type: 'NewTaskCreated' },
      { activity_type: 'TaskUpdated' },
      { activity_type: 'TaskDeleted' },
    ],
    skipDuplicates: true,
  });



  // farming勢です。失礼。
  await seedCrops(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect();
    process.exit(1)
  })
