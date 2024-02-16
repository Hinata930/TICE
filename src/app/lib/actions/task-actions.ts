'use server';

import { PrismaClient } from "@prisma/client"; 
import { revalidatePath } from "next/cache";
import { z } from "zod";

const prisma = new PrismaClient();

const taskSchema = z.object({
  due_date: z.coerce.date(),
  task_title: z.string().min(1, { message: "please use at least 1 character." }).max(64, { message: "please keep it under 64 characters." }),
  task_description: z.string().max(2048, { message: "please keep it  under 2048 characters." }).nullable(),
});


// https://ja.react.dev/reference/react-dom/hooks/useFormState
export type State = {
  errors?: {
    due_date?: Date[];
    task_title?: string[];
    task_description?: string[];
  }
  message?: string | null;
}

interface FormData {
  due_date: Date;
  task_title: string;
  task_description: string;
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
    due_date: formData.due_date,
    task_title: formData.task_title,
    task_description: formData.task_description,
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
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to inserting task.');
  }
}


// task更新
export async function UpdateTask(
  task_id: string, 
  prevstate: State,
  formData: FormData, 
) {
  const validatedFields = taskSchema.safeParse({
    due_date: formData.due_date,
    task_title: formData.task_title,
    task_description: formData.task_description,
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
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to updating task.');
  }
}


// task削除
export async function DeleteTask( id: string ) {
  try {
    await prisma.task.delete({
      where: { id },
    });
    revalidatePath('./');
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to deleting task.')
  }
}