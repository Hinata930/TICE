'use server';

import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

// userのroleを更新
export async function ChangeUserRole(
  id: string,
  user_id: string,
  team_id: string,
  role_id: string,
) {
  try {
    await prisma.userRole.update({
      where: { id },
      data: {
        user_id,
        team_id,
        role_id,
      },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to change role to user.',
    }
  }
}