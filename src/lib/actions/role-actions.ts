'use server';

import { RoleSchema } from "@/prisma-types";
import { PrismaClient } from "@prisma/client"; 
import { revalidatePath } from "next/cache";
import { useRouter } from "next/router"; 

const prisma = new PrismaClient();

const router = useRouter();
// 配列の場合は配列の最初の要素を、文字列の場合は文字列を、undefinedの場合は'/'を返す
const previousUrl = Array.isArray(router.query.prevUrl) ? router.query.prevUrl[0] : router.query.prevUrl || '/';

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
    await prisma.role.create({
      data: {
        team_id,
        role_name,
        role_description,
      },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to create role.',
    }
  }

  revalidatePath(previousUrl);
  router.back();
}


// role更新
export async function UpdateRole(
  id: string, 
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
    await prisma.role.update({
      where: { id },
      data: {
        role_name,
        role_description,
      }
    })
  } catch(error) {
    return {
      message: 'Database Error: Failed to update role.'
    }
  }

  revalidatePath(previousUrl);
  router.back();
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