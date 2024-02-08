'use server';

import { PrismaClient } from "@prisma/client"; 
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();


// userにroleを付与
export async function AddUserRole(
  prevUrl: string,
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

  revalidatePath(prevUrl);
  redirect(prevUrl);
}


// userのroleを更新
export async function ChangeUserRole(
  prevUrl: string,
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

  revalidatePath(prevUrl);
  redirect(prevUrl);
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