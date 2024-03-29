/* 今は使う理由が無いため封印

'use server';

import { RoleSchema } from '@/prisma-types';
import { PrismaClient } from '@prisma/client'; 
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

const roleSchema = RoleSchema;


// https://ja.react.dev/reference/react-dom/hooks/useFormState
export type State = {
  errors?: {
    role_name?: string[];
    role_description?: string[];
  }
  message?: string | null;
}


// role作成
export async function CreateRole(
  team_id: string,
  prevstate: State,
  formData: FormData,
) {
  // Validate form using Zod
  const validatedFields = roleSchema.safeParse({
    team_id: formData.get('team_id'),
    role_name: formData.get('role_name'),
    role_description: formData.get('role_description'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to create role.',
    }
  }

  const { role_name, role_description } = validatedFields.data;

  // Insert data into the database
  try {
    const newRole = await prisma.role.create({
      data: {
        team_id,
        role_name,
        role_description,
      },
    });

    revalidatePath(`/team/${newRole.team_id}`);
    redirect(`/team/${newRole.team_id}`);
  } catch(error) {
    return {
      message: 'Database Error: Failed to create role.',
    }
  }
}


// role更新
export async function UpdateRole(
  role_id: string, 
  prevstate: State,
  formData: FormData 
) {
  const validatedFields = roleSchema.safeParse({
    role_name: formData.get('role_name'),
    role_description: formData.get('role_description')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to update role.',
    }
  }

  const { role_name, role_description } = validatedFields.data;

  try {
    const updatedRole = await prisma.role.update({
      where: { id: role_id },
      data: {
        role_name,
        role_description,
      }
    });

    revalidatePath(`/team/${updatedRole.team_id}`);
    redirect(`/team/${updatedRole.team_id}`);
  } catch(error) {
    return {
      message: 'Database Error: Failed to update role.'
    }
  }
}


// role削除
export async function DeleteRole( id: string ) {
  try {
    await prisma.role.delete({
      where: { id },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to delete role.',
    }
  }
}

*/