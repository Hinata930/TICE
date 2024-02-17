import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

async function main() {
  await prisma.teamActivityType.createMany({
    data: [
      { activity_type: 'NewTaskCreated' },
      { activity_type: 'TaskUpdated' },
      { activity_type: 'TaskDeleted' },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })