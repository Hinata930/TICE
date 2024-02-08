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
    const newTask = await prisma.task.create({
      data: {
        task_creator,
        team_id,
        due_date,
        task_title,
        task_description,
      },
    });
    
    revalidatePath(`/team/${newTask.team_id}/task/${newTask.id}`);
    redirect(`/team/${newTask.team_id}/task/${newTask.id}`);
  } catch(error) {
    return {
      message: 'Database Error: Failed to create task.',
    }
  }
}


// task更新
export async function UpdateTask(
  task_id: string, 
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
    const updatedTask = await prisma.task.update({
      where: { id: task_id },
      data: {
        due_date,
        task_title,
        task_description,
      },
    });

    revalidatePath(`/team/${updatedTask.team_id}/task/${task_id}`);
    redirect(`/team/${updatedTask.team_id}/task/${task_id}`);
  } catch(error) {
    return {
      message: 'Database Error: Failed to update task.',
    }
  }
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