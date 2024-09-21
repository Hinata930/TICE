'use server';

import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient();

export async function CreateCookieClicker(
  userId: string,
) {
  try {
    await prisma.cookieClicker.create({
      data: {
        user_id: userId,
      }
    });

  } catch(error) {
    console.error('Database Error', error);
    throw new Error('Failed to create cookie clicker.');
  }
}


export async function UpdateCookieClicker(
  userId: string,
  cookieCount: bigint,
  employeeLevels: number[],
) {
  try {
    await prisma.cookieClicker.update({
      where: { user_id: userId },
      data: {
        cookie_count: cookieCount,
        employee_level_1: employeeLevels[0],
        employee_level_2: employeeLevels[1],
        employee_level_3: employeeLevels[2],
        employee_level_4: employeeLevels[3],
        employee_level_5: employeeLevels[4],
        employee_level_6: employeeLevels[5],
      },
    });
  } catch (error) {
    console.error('Database Error', error);
    throw new Error('Failed to save cookie clicker.');
  }
}