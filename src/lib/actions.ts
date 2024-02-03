'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// team作成、creatorはuser_teamに追加
export async function create_team(FormData: {
  team_name: string,
  creator: string,
}) {
  const newTeam = await prisma.teams.create({
    data: {
      team_name: FormData.team_name,
    },
  });

  await prisma.user_team.create({
    data: {
      user_id: FormData.creator,
      team_id: newTeam.id,
    }
  });
}

// team削除、user_teamも削除
export async function delete_team() {
  
}

// teamの名前変更
export async function update_team() {
  
}

// teamにuserを追加
export async function add_team_member() {
  
}

//teamからmemberを削除
export async function remove_team_member() {
  
}

// task作成
export async function create_task() {
  
}

//task削除
export async function delete_task() {
  
}

//task更新
export async function update_task() {
  
}



