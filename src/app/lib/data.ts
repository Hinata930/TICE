'use server';

import { PrismaClient } from "@prisma/client";
import { currentUser } from "@clerk/nextjs"; 

const prisma = new PrismaClient();

export async function fetchCurrentUser() {
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

export async function fetchTeam(team_id: string) {
  try {
    return await prisma.team.findUnique({
      where: {
        id: team_id,
      }
    });
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch team.');
  }
}