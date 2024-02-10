import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache"; 

const prisma = new PrismaClient();

// clerkの方のuser_idからticeのデータベースにいるuserを見つける
export async function fetchCurrentUser(user_id: string) {
  noStore();
  try {
    return await prisma.user.findUnique({ 
      where: {
        user_id,
      }
    });
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch current user.');
  }
}

export async function fetchTeam(team_id: string) {
  noStore();
  try {
    return await prisma.team.findUnique({
      where: {
        id: team_id,
      }
    });
  } catch(error) {
    return null;
  }
}

export async function fetchTeamArray(user_id: string) {
  noStore();
  type team = {
    id: string
    created_at: Date
    updated_at: Date
    team_name: string
    creator: string | null
  }
  try {
    const userTeamArray = await prisma.userTeam.findMany({
      where: {
        user_id,
      },
    });

    const teamIdList: string[] = userTeamArray.map((userTeam) => {
      if (!userTeam.team_id) {
        throw new Error('Failed to fetch team id');
      }
      return userTeam.team_id;
    });

    const teamList: Promise<team>[] = teamIdList.map(async (teamId) => {
      try {
        const team = await prisma.team.findUnique({
          where: { id: teamId },
        });
    
        if (!team) {
          throw new Error('Team not found.');
        }
    
        return team;
      } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch team.');
      }
    });

    return Promise.all(teamList);
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch team list');
  }
}