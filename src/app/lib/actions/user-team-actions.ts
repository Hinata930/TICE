'use server';

import { PrismaClient } from '@prisma/client'; 

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

    const team = await prisma.team.findUnique({
      where: {
        id: team_id,
      },
    });

    const role = await prisma.role.findFirst({
      where: {
        team_id: team?.id,
        role_name: 'member',
      },
    });

    await prisma.userRole.create({
      data: {
        user_id,
        team_id,
        role_id: role?.id,
      },
    });
  } catch(error) {
    console.error('Database Error:', error);
    return {
      message: 'Failed to add new team member.',
    }
  }
}


// teamからmemberを削除
export async function RemoveTeamMember( 
  userId: string,
  teamId: string,
) {
  try {
    const teamMember = await prisma.userTeam.findFirst({
      where: {
        AND: {
          user_id: userId,
          team_id: teamId,
        }
      }
    });
    if (!teamMember) {
      return { message: 'Failed to remove team member.' }
    }

    await prisma.userTeam.delete({
      where: {
        id: teamMember.id,
      }
    });

    const memberRole = await prisma.userRole.findMany({
      where: {
        AND: {
          user_id: userId,
          team_id: teamId,
        }
      }
    });
    if (!memberRole) {
      return { message: 'Failed to remove team member.' }
    }

    await memberRole.map(async (role) => {
      await prisma.userRole.delete({
        where: {
          id: role.id,
        }
      });
    })

  } catch(error) {
    console.error('Database Error:', error);
    return { 
      message: 'Failed to remove team member.',
    }
  }
}
