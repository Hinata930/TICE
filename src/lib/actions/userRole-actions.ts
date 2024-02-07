'use server';

import { PrismaClient } from "@prisma/client"; 
import { revalidatePath } from "next/cache";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

const router = useRouter();
// 配列の場合は配列の最初の要素を、文字列の場合は文字列を、undefinedの場合は'/'を返す
const previousUrl = Array.isArray(router.query.prevUrl) ? router.query.prevUrl[0] : router.query.prevUrl || '/';


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

  revalidatePath(previousUrl);
  router.back();
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

  revalidatePath(previousUrl);
  router.back();
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