'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchCurrentUser(id: string) {
  try {
    return await prisma.user.findUnique({ 
      where: {
        user_id: id,
      }
    });
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