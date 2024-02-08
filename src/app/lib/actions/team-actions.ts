'use server';

import { TeamSchema } from "@/prisma-types";
import { PrismaClient } from "@prisma/client"; 
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

const teamSchema = TeamSchema;


// https://ja.react.dev/reference/react-dom/hooks/useFormState
export type State = {
  errors?: {
    team_name?: string[];
  }
  message?: string | null;
}


// team作成、creatorはuser_teamに追加
export async function CreateTeam(
  creator: string,
  prevstate: State,
  formData: FormData,
) {
  // Validate form using Zod
  const validatedFields = teamSchema.safeParse({
    team_name: formData.get('team_name'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Team.',
    }
  }

  const { team_name } = validatedFields.data;

  // Insert data into the database
  try {
    const newTeam = await prisma.team.create({
      data: {
        team_name,
        creator,
      },
    });

    await prisma.userTeam.create({
      data: {
        user_id: creator,
        team_id: newTeam.id,
      }
    });

    const teamId = newTeam.id;
    revalidatePath(`/team/${teamId}`);
    redirect(`/team/${teamId}`);
    
  } catch(error) {
    return {
      message: 'Database Error: Failed to inserting team.',
    }
  }
}


// teamの名前変更
export async function UpdateTeamName(
  team_id: string,
  prevstate: State,
  formData: FormData,
) {
  const validatedFields = teamSchema.safeParse({
    team_name: formData.get('team_name'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to update team.',
    }
  }

  const { team_name } = validatedFields.data;

  try {
    await prisma.team.update({
      where: { id: team_id },
      data: { team_name },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to update team name.',
    }
  }

  revalidatePath(`/team/${team_id}`);
  redirect(`/team/${team_id}`);
}


// team削除
export async function DeleteTeam(id: string) {
  try {
    await prisma.team.delete({
      where: { id },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to delete team.',
    }
  }
}
