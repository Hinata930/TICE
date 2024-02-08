'use server';

import { TaskSchema } from "@/prisma-types";
import { PrismaClient } from "@prisma/client"; 
import { revalidatePath } from "next/cache"; 
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

const taskSchema = TaskSchema;


// https://ja.react.dev/reference/react-dom/hooks/useFormState
export type State = {
  errors?: {
    due_date?: Date[];
    task_title?: string[];
    task_description?: string[];
  }
  message?: string | null;
}


// task作成
export async function CreateTask(
  prevUrl: string,
  task_creator: string,
  team_id: string,
  prevstate: State,
  formData: FormData,
) {
  // Validate form using Zod
  const validatedFields = taskSchema.safeParse({
    due_date: formData.get('due_date'),
    task_title: formData.get('task_title'),
    task_description: formData.get('task_description'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to create task.',
    }
  }

  const { due_date, task_title, task_description } = validatedFields.data;

  // Insert data into the database
  try {
    await prisma.task.create({
      data: {
        task_creator,
        team_id,
        due_date,
        task_title,
        task_description,
      },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to create task.',
    }
  }

  revalidatePath(prevUrl);
  redirect(prevUrl);
}


// task更新
export async function UpdateTask(
  prevUrl: string,
  id: string, 
  prevstate: State,
  formData: FormData, 
) {
  const validatedFields = taskSchema.safeParse({
    due_date: formData.get('due_date'),
    task_title: formData.get('task_title'),
    task_description: formData.get('task_description'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to update task.',
    }
  }

  const { due_date, task_title, task_description } = validatedFields.data;

  try {
    await prisma.task.update({
      where: { id },
      data: {
        due_date,
        task_title,
        task_description,
      },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to update task.',
    }
  }

  revalidatePath(prevUrl);
  redirect(prevUrl);
}


// task削除
export async function DeleteTask( id: string ) {
  try {
    await prisma.task.delete({
      where: { id },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to delete task.',
    }
  }
}