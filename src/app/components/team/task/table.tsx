import { fetchFilteredTasks } from '@/app/lib/data';
import TaskList from './task-list';
import { User } from '@prisma/client';

export default async function TasksTable({
  query,
  currentPage,
  teamId,
  user,
}: {
  query: string;
  currentPage: number;
  teamId: string;
  user: User
}) {
  const tasks = await fetchFilteredTasks(query, currentPage, teamId);

  return (
    <TaskList tasks={tasks} user={user}/>
  );
}
