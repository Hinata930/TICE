import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";
import { currentUser } from "@clerk/nextjs/server"; 

const prisma = new PrismaClient();

export async function fetchCurrentUser() {
  noStore();
  try {
    const user = await currentUser();
    if (user) {
      return await prisma.user.findUnique({
        where: {
          user_id: user.id,
        }
      });
    } else {
      throw new Error('Current user not found.');
    }
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch current user.');
  }
}