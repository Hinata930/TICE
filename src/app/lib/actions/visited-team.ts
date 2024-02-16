'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 新しいデータを追加
export async function addVisitedTeam(userId: string, teamId: string) {
  // データが被っていないかを確認
  const checkDuplicate = await prisma.visitedTeam.findFirst({
    where: {
      AND: {
        user_id: userId,
        team_id: teamId,
      },
    },
  });

  if (checkDuplicate) {
    // 更新(値は同じ)
    return await prisma.visitedTeam.update({
      where: {id: checkDuplicate.id},
      data: {
        user_id: userId,
        team_id: teamId,
      },
    });
  } else {
    return await prisma.visitedTeam.create({
      data: {
        user_id: userId,
        team_id: teamId,
      },
    });
  }
}

// vercelのcron jobで1日単位でupdated_atが2週間以上経っているレコードを削除してるよ