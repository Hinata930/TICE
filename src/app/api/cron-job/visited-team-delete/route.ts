'use server';

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient();

export async function GET() {
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14); // 2週間前の日付を取得

  try {
    if (!prisma.visitedTeam.findFirst({})) {
      return NextResponse.json({ status: 200, statusText: 'OK' }); 
    }
    const oldVisitedTeams = await prisma.visitedTeam.findMany({
      where: {
        updatedAt: {
          lt: twoWeeksAgo,
        },
      },
    });

    for (const oldVisitedTeam of oldVisitedTeams) {
      await prisma.visitedTeam.delete({
        where: { id: oldVisitedTeam.id },
      });
    }

    return NextResponse.json({ status: 200, statusText: 'OK' }); 
  } catch(error) {
    console.error('Database Error:', error);
    return NextResponse.json({ status: 500, statusText: 'Internal Server Error', });
  }
}