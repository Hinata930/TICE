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