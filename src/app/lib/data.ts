'use server'

import { PrismaClient, Task, Team } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache"; 
import { addDays, startOfWeek, endOfWeek, format } from 'date-fns';
import { WeeklyTask } from "./difinitions";
import { fetchCurrentDate } from "./utils";

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
    const team = await prisma.team.findUnique({
      where: {
        id: team_id,
      }
    });
    if (!team) {
      throw new Error('Failed to fetch team');
    }
    return team;
  } catch(error) {
    return null;
  }
}

// teamが存在するかどうかを調べる関数
export async function teamExists(team_id: string) {
  noStore();
  try {
    const team = await prisma.team.findUnique({
      where: {
        id: team_id,
      }
    });
    if (!team) {
      return false;
    } 
    return true;
    
  } catch(error) {
    return false;
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

    const teamList: Promise<Team>[] = teamIdList.map(async (teamId) => {
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
        orderBy: {
          created_at: 'desc',
        },
        take: tasksItemsPerPage,
        skip: offset,
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
  noStore();
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

// task_idでcreatorのuserのデータを取得したいときに使う
export async function fetchTaskCreator(taskId: string) {
  noStore();
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });
    if (!task || !task.task_creator) {
      throw new Error('Failed to fetch task.');
    }
    
    const creator = await prisma.user.findUnique({
      where: {
        id: task.task_creator
      },
    });
    if (!creator) {
      throw new Error('Failed to fetch task creator.');
    }

    return creator;    
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch task.');
  }
}

// userの役職を割り出す(一人)
export async function findUserTeamRole(
  teamId: string,
  userId: string,
) {
  noStore();
  try {
    const role = await prisma.userRole.findFirst({
      where: {
        AND: {
          team_id: teamId,
          user_id: userId,
        },
      },
    });
    if (!role) {
      return null;
    }
    return role;
  } catch(error) {
    throw new Error('Failed to find user role at team.');
  }
}

// 特定のチームのtaskのリストを返す
export async function fetchTasksByTeamId(teamId: string) {
  noStore();
  try {
    return await prisma.task.findMany({
      where: {
        team_id: teamId,
      },
    });
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch tasks by team.');
  }
}

// teamの配列を入れて{ チームオブジェクト, タスクの配列 }
export async function fetchTasksByTeams(teams: Team[]) {
  noStore();
  return await Promise.all(
    teams.map(async (team) => {
      const tasks = await fetchTasksByTeamId(team.id);
      return { team, tasks };
    })
  );
}

// 一週間分のタスクをチームごとに取得する関数
export async function fetchWeeklyTasks( teams: Team[] ) {
  noStore();
  const japaneseDate = fetchCurrentDate(); // yyyy-mm-ddのみ
  
  const startDate = startOfWeek(new Date(japaneseDate), { weekStartsOn: 0 }); // 今週の日曜日
  const endDate = addDays(startDate, 6); // 今週の土曜日

  // 一週間の日付を生成(日曜から土曜まで入れる)
  const weekDates: Date[] = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    weekDates.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  // チームごとのタスクを取得
  const tasksByTeams = await fetchTasksByTeams(teams);

  // 一週間分のタスクを入れるオブジェクトの配列 
  const weeklyTeamTasks: WeeklyTask[] = weekDates.map(date => ({
    date: format(date, 'yyyy-MM-dd'),
    dayOfWeek: -1,
    teamTasks: tasksByTeams.map(() => {
      return {
        team: null,
        tasks: [],
      };
    }) // チームの数だけteamTasks作る
  }));


  // チームごとのタスクを日付ごとに振り分ける
  weekDates.forEach((date, weekIndex) => { // 日付でわける
    weeklyTeamTasks[weekIndex].dayOfWeek = weekIndex; // 曜日
    weeklyTeamTasks[weekIndex].teamTasks.forEach((dailyTaskTeam, index) => { // チームで分ける
      tasksByTeams.forEach((taskTeam, taskIndex) => { // tasksByTeamsとweeklyTeamTasks.teamTasks同じ
        if (index === taskIndex) {
          taskTeam.tasks.forEach((task) => {
            const taskDueDate = new Date(task.due_date); 
            if (taskDueDate.toDateString() === date.toDateString()) {
              weeklyTeamTasks[weekIndex].teamTasks[index].tasks.push(task);
              weeklyTeamTasks[weekIndex].teamTasks[index].team = taskTeam.team;
            }
          });
        }
      });
    })
  });

  return weeklyTeamTasks;
}

export async function fetchTeamsByTeamIds(teamIds: string[]) {
  try {
    const teams = teamIds.map(async (teamId) => {
      return await prisma.team.findUnique({
        where: { id: teamId }
      });
    })

    return Promise.all(teams);
  } catch(error) {
    console.error('Database Error', error);
    throw new Error('Failed to fetch teams.');
  }
}

// userのidでuserが訪問したチームのArrayを取得
export async function fetchVisitedTeamIdsByUserId( userId: string ) {
  try {
    const visitedTeams = await prisma.visitedTeam.findMany({
      where: {user_id: userId},
    });
    const teams = visitedTeams.map(async (visitedTeam) => {
      return await prisma.team.findUnique({
        where: { id: visitedTeam.team_id }
      });
    });

    return Promise.all(teams);
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch visited teams.');
  }
}