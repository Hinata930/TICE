import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache"; 
import { team } from "./difinitions"; 

const prisma = new PrismaClient();

// clerkの方のuserのidからデータベースのuserのデータを見つける
export async function fetchCurrentUser(user_id: string) {
  noStore();
  try {
    // user_idはclerkのuserのid
    const user = await prisma.user.findUnique({ 
      where: {
        user_id,
      }
    });
    if (!user) {
      throw new Error('Failed to fetch current user.');
    }
    return user;
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch current user.');
  }
}

// teamのidでteamを取得したいときに使う
export async function fetchTeam(team_id: string) {
  noStore();
  try {
    return await prisma.team.findUnique({
      where: {
        id: team_id,
      }
    });
  } catch(error) {
    return null;
  }
}

// あるユーザーが所属しているチームの配列を取得する
export async function fetchTeams(user_id: string) {
  noStore();
  try {
    const userTeamArray = await prisma.userTeam.findMany({
      where: {
        user_id,
      },
    });

    const teamIdList: string[] = userTeamArray.map((userTeam) => {
      if (!userTeam.team_id) {
        throw new Error('Failed to fetch team id');
      }
      return userTeam.team_id;
    });

    const teamList: Promise<team>[] = teamIdList.map(async (teamId) => {
      try {
        const team = await prisma.team.findUnique({
          where: { id: teamId },
        });
    
        if (!team) {
          throw new Error('Team not found.');
        }
    
        return team;
      } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch team.');
      }
    });

    return Promise.all(teamList);
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch team list');
  }
}

// taskのsearchに使う
const tasksItemsPerPage = 6;
export async function fetchFilteredTasks(
  query: string,
  currentPage: number,
  teamId: string,
) {
  noStore();
  const offset = (currentPage - 1) * tasksItemsPerPage;

  try {
    if (query) {
      const filteredTasks = await prisma.task.findMany({
        include: {
          users: true,
        },
        where: {
          AND: [
            { team_id: teamId },
            {
              OR: [
                { users: { username: { contains: query, mode: 'insensitive' } } },
                { users: { first_name: { contains: query, mode: 'insensitive' } } },
                { users: { last_name: { contains: query, mode: 'insensitive' } } },
                { users: { email_address: { contains: query, mode: 'insensitive' } } },
                { task_title: { contains: query, mode: 'insensitive' } },
                { task_description: { contains: query, mode: 'insensitive' } },
              ],
            },
          ],
        },
        orderBy: {
          created_at: 'desc',
        },
        take: tasksItemsPerPage,
        skip: offset,
      });
      return filteredTasks;
    } else {
      const tasks = await prisma.task.findMany({
        include: {
          users: true,
        },
        where: {
          team_id: teamId,
        },
      });
      return tasks;
    }
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch filtered tasks.');
  }
}

// queryが入ってるデータの数でページ数を算出(上のfetchFilteredTasksがsearchに使う関数)
export async function fetchTasksPages(
  query: string,
  teamId: string,
) {
  noStore();
  try {
    // tasksテーブルにteam_idがteamIdのデータがあるかどうかを確認
    const hasTasks = await prisma.task.findFirst({ where: { team_id: teamId } });

    // taskがないからここで0を返す(ここで0を返さないとprisma.countでエラー吐く)
    if (!hasTasks) {
      return 0;
    }

    // queryないからteam_idだけでカウント。tasksItemPerPageで割って繰り上げてページ数を求める。
    if (!query) {
      const count = await prisma.task.count({ where: { team_id: teamId } });
      const totalPages = Math.ceil(count / tasksItemsPerPage);
      return totalPages;
    }

    // tasksテーブルにqueryを含んだデータがあるか確認
    const hasQueryTasks = await prisma.task.findFirst({
      where: {
        AND: [
          { team_id: teamId },
          {
            OR: [
              { users: { username: { contains: query, mode: 'insensitive' } } },
              { users: { first_name: { contains: query, mode: 'insensitive' } } },
              { users: { last_name: { contains: query, mode: 'insensitive' } } },
              { users: { email_address: { contains: query, mode: 'insensitive' } } },
              { task_title: { contains: query, mode: 'insensitive' } },
              { task_description: { contains: query, mode: 'insensitive' } },
            ],
          },
        ],
      },
    });

    // queryを含んだデータがなかったから0を返す。ここで返さないとcountメソッドでエラー吐く
    if (!hasQueryTasks) {
      return 0;
    }

    // query含むカウント。tasksItemPerPageで割って繰り上げてページ数を求める。
    const count = await prisma.task.count({
      where: {
        AND: [
          { team_id: teamId },
          {
            OR: [
              { users: { username: { contains: query, mode: 'insensitive' } } },
              { users: { first_name: { contains: query, mode: 'insensitive' } } },
              { users: { last_name: { contains: query, mode: 'insensitive' } } },
              { users: { email_address: { contains: query, mode: 'insensitive' } } },
              { task_title: { contains: query, mode: 'insensitive' } },
              { task_description: { contains: query, mode: 'insensitive' } },
            ],
          },
        ],
      },
    });

    const totalPages = Math.ceil(count / tasksItemsPerPage);
    return totalPages;
  } catch(error) { 
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of tasks.');
  }
}

// taskのidでtaskを取得したいときに使う
export async function fetchTask(taskId: string) {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      throw new Error('Failed to fetch task.');
    }
    return task;
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch task.');
  }
}