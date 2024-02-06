'use server';

import { RoleCreateInputSchema, RoleUpdateInputSchema, TaskCreateInputSchema, TaskUpdateInputSchema, TeamCreateInputSchema, TeamUpdateInputSchema } from '../../prisma/generated/zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createTeam = TeamCreateInputSchema;
const updateTeam = TeamUpdateInputSchema;
const createTask = TaskCreateInputSchema;
const updateTask = TaskUpdateInputSchema;
const createRole = RoleCreateInputSchema;
const updateRole = RoleUpdateInputSchema;


// team作成、creatorはuser_teamに追加
export async function CreateTeam(
  creator: string,
  formData: FormData,
) {
  // Validate form using Zod
  const validatedFields = createTeam.safeParse({
    team_name: formData.get('team_name'),
    creator: formData.get('creator'),
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
  } catch(error) {
    return {
      message: 'Database Error: Failed to inserting team.',
    }
  }
  
  window.history.back();
}


// teamの名前変更
export async function UpdateTeamName(
  id: string,
  formData: FormData,
) {
  const validatedFields = updateTeam.safeParse({
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
      where: { id },
      data: { team_name },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to update team name.',
    }
  }

  window.history.back();
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


// teamにuserを追加
export async function AddTeamMember(
  user_id: string,
  team_id: string,
) {

  try {
    await prisma.userTeam.create({
      data: {
        user_id,
        team_id,
      },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to add new team member.',
    }
  }

  window.history.back();
}


//teamからmemberを削除
export async function RemoveTeamMember( id: string ) {
  try {
    await prisma.userTeam.delete({
      where: { id },
    });
  } catch(error) {
    return { 
      message: 'Database Error: Failed to remove team member.',
    }
  }
}


// task作成
export async function CreateTask(
  task_creator: string,
  team_id: string,
  formData: FormData,
) {
  const validatedFields = createTask.safeParse({
    task_creator: formData.get('task_creator'),
    team_id: formData.get('team_id'),
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

  window.history.back();
}


// task更新
export async function UpdateTask(
  id: string, 
  formData: FormData, 
) {
  const validatedFields = updateTask.safeParse({
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

  window.history.back();
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


// role作成
export async function CreateRole(
  team_id: string,
  formData: FormData,
) {
  const validatedFields = createRole.safeParse({
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

  window.history.back();
}


// role更新
export async function UpdateRole(
  id: string, 
  formData: FormData 
) {
  const validatedFields = updateRole.safeParse({
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

  window.history.back();
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


// userにroleを付与
export async function AddUserRole(
  user_id: string,
  team_id: string,
  role_id: string,
) {

  try {
    await prisma.userRole.create({
      data: {
        user_id,
        team_id,
        role_id,
      },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to add role to user.',
    }
  }

  window.history.back();
}


// userのroleを更新
export async function ChangeUserRole(
  id: string,
  user_id: string,
  team_id: string,
  role_id: string,
) {
  try {
    await prisma.userRole.update({
      where: { id },
      data: {
        user_id,
        team_id,
        role_id,
      },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to change role to user.',
    }
  }

  window.history.back();
}


// userからroleを除去
export async function RemoveUserRole( id: string ) {
  try {
    await prisma.userRole.delete({
      where: { id },
    });
  } catch(error) {
    return {
      message: 'Database Error: Failed to remove role to user.',
    }
  }
}

