'use server';

import { PrismaClient } from '@prisma/client'; 
import { z } from 'zod';
import { getUserByUsername } from '../data';

const prisma = new PrismaClient();

const teamInvitesSchema = z.object({
  username: z.string(),
});

// https://ja.react.dev/reference/react-dom/hooks/useFormState
export type State = {
  errors?: {
    username?: string[];
  }
  message?: string | null;
}

interface FormData {
  username: string;
}


// 招待作成
export async function createTeamInvites( 
  team_id: string, 
  prevstate: State,
  formData: FormData,
) {
  // Validate form using Zod
  const validatedFields = teamInvitesSchema.safeParse({
    username: formData.username,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Team Invite.',
    }
  }

  const { username } = validatedFields.data;

  const user = await getUserByUsername(username);

  // Insert data into the database
  try {
    const newInvite = await prisma.teamInvites.create({
      data: {
        user_id: user?.id,
        team_id,
      }, 
    });
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to inserting team invites.')
  }
}

// 招待受理とそれに関する処理
export async function handleAcceptedTeamInvite(
  currentUserId: string,
  teamInviteId: string,
) {
  try {
    // 招待のidからレコードを取得
    const teamInvite = await prisma.teamInvites.findUnique({
      where: { id: teamInviteId }
    });
    if (!teamInvite) {
      throw new Error('Failed to fetch team invite');
    }
    // 招待されたuserかどうか確認
    const validateUserId = (currentUserId === teamInvite.user_id)
    if (!validateUserId) {
      throw new Error('Different from invited user')
    }

    // 招待してきたチームに入る
    await prisma.userTeam.create({
      data: {
        user_id: teamInvite.user_id,
        team_id: teamInvite.team_id,
      }
    })
    
    // 招待のレコードを削除
    await prisma.teamInvites.delete({
      where: {id: teamInviteId}
    });
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to accepted team invite');
  }
}

// 招待を拒否
export async function rejectTeamInvite(id: string) {
  try {
    await prisma.teamInvites.delete({
      where: {id},
    });
  } catch(error) {
    console.error('Databbase Error:', error);
    throw new Error('Failed to reject team invite.');
  }
}