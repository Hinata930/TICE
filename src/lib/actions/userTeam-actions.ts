'use server';

import { PrismaClient } from "@prisma/client"; 
import { revalidatePath } from "next/cache";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

const router = useRouter();
// 配列の場合は配列の最初の要素を、文字列の場合は文字列を、undefinedの場合は'/'を返す
const previousUrl = Array.isArray(router.query.prevUrl) ? router.query.prevUrl[0] : router.query.prevUrl || '/';


export type State = {
  errors?: {

  }
};



// teamにuserを追加
export async function AddTeamMember(
  user_id: string,
  team_id: string,
) {

  try {
    await prisma.userTeam.create({
      data: {
        user_id,
        team_id,
      },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to add new team member.',
    }
  }

  revalidatePath(previousUrl);
  router.back();
}


//teamからmemberを削除
export async function RemoveTeamMember( id: string ) {
  try {
    await prisma.userTeam.delete({
      where: { id },
    });
  } catch(error) {
    return { 
      message: 'Database Error: Failed to remove team member.',
    }
  }
}