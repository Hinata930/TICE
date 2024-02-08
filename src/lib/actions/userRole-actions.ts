'use server';

import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();


// roleを付与する方法によるから一旦redirectは無し
// userにroleを付与
export async function AddUserRole(
  user_id: string,
  team_id: string,
  role_id: string,
) {
  try {
    await prisma.userRole.create({
      data: {
        user_id,
        team_id,
        role_id,
      },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to add role to user.',
    }
  }
}


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


// userからroleを除去
export async function RemoveUserRole( id: string ) {
  try {
    await prisma.userRole.delete({
      where: { id },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to remove role to user.',
    }
  }
}