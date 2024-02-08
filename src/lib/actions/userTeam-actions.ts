'use server';

import { PrismaClient } from "@prisma/client"; 
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();


// teamにuserを追加
export async function AddTeamMember(
  prevUrl: string,
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

  revalidatePath(prevUrl);
  redirect(prevUrl);
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