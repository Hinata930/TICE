'use server';

import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();


// ユーザーを追加する方法によるから一旦redirectは無し
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