import { Task, Team } from '@prisma/client';

export type TeamTask = {
  team: Team;
  tasks: Task[];
}

export type WeeklyTask = {
  date: string,
  dayOfWeek: number,
  teamTasks: {
    team: Team | null,
    tasks: Task[], 
  }[],
}

export type WeeklyTaskByTeam = {
  date: string,
  dayOfWeek: number,
  tasks: Task[],
}

export type TaskAndUser = {
  id: string;
  created_at: Date;
  updated_at: Date;
  task_creator: string | null;
  team_id: string | null;
  due_date: Date;
  task_title: string;
  task_description: string | null;
  users: {
    id: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    username: string | null;
    first_name: string | null;
    last_name: string | null;
    email_address: string;
    image_url: string;
  } | null;
}
