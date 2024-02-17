'use server';

import { PrismaClient } from '@prisma/client'; 
import { z } from 'zod';
import { fetchTeamUsers, getUserByUsername } from '../data';
import { AddTeamMember } from './user-team-actions';

const prisma = new PrismaClient();


// バリデーターを定義
const notInArray = (array: any[]) => (value: any) => {
  if (array.includes(value)) {
    throw new Error(`Value ${value} is not allowed.`);
  }
  return true;
};


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
  // 既にチームにいるユーザーに招待できないようにする。
  const userArray = await fetchTeamUsers(team_id);
  const usernameArray = userArray.map((user) => {
    return user?.username;
  });
  const teamInvitesSchema = z.object({
    username: z
      .string()
      .refine(notInArray(usernameArray), { message: 'The value must not be the username of a user already on the team.' }),
  });

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

  // usernameからuserを取得
  const user = await getUserByUsername(username);

  // Insert data into the database
  try {
    if (user) {
      await prisma.teamInvites.create({ 
        data: { 
          user_id: user.id, 
          team_id, 
        }, 
      });
    } else {
      throw new Error('Failed to inserting team invites.');
    }
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to inserting team invites.');
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
      where: { 
        id: teamInviteId, 
      },
    });
    if (!teamInvite) {
      throw new Error('Failed to fetch team invite');
    }
    // 招待されたuserかどうか確認
    const validateUserId = (currentUserId === teamInvite.user_id);
    if (!validateUserId) {
      throw new Error('Different from invited user')
    }

    // 招待してきたチームに入る
    if (teamInvite.user_id && teamInvite.team_id) {
      await AddTeamMember(teamInvite.user_id, teamInvite.team_id);
    }
    
    // 招待のレコードを削除
    await prisma.teamInvites.delete({
      where: {id: teamInviteId}
    });
    console.log('Accepted team invite successfully!');

  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to accepted team invite');
  }
}



// 招待を拒否
export async function rejectTeamInvite(currentUserId: string, teamInviteId: string) {
  try {
    // 招待のidからレコードを取得
    const teamInvite = await prisma.teamInvites.findUnique({
      where: { 
        id: teamInviteId, 
      },
    });
    if (!teamInvite) {
      throw new Error('Failed to fetch team invite');
    }
    // 招待されたuserかどうか確認
    const validateUserId = (currentUserId === teamInvite.user_id);
    if (!validateUserId) {
      throw new Error('Different from invited user')
    }

    // teamInvitesを削除
    await prisma.teamInvites.delete({
      where: {
        id: teamInviteId,
      },
    });

    console.log('Reject team invite successfully!');
  } catch(error) {
    console.error('Databbase Error:', error);
    throw new Error('Failed to reject team invite.');
  }
}