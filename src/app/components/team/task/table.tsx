import { fetchFilteredTasks } from '@/app/lib/data';
import TaskList from './task-list';

export default async function TasksTable({
  query,
  currentPage,
  teamId,
}: {
  query: string;
  currentPage: number;
  teamId: string;
}) {
  const tasks = await fetchFilteredTasks(query, currentPage, teamId);
  console.log(tasks);

  return (
    <TaskList tasks={tasks} />
  );
}
