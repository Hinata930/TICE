import { EditForm } from '@/app/components/team/task/edit-form'; 
import { fetchCurrentUser, fetchTask, fetchTeam } from '@/app/lib/data';
import { currentUser } from '@clerk/nextjs';
import { notFound } from 'next/navigation';

export default async function Page({ 
  params, 
}: { 
  params: { 
    team_id: string, 
    task_id: string, 
  }
}) {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);

  const team = await fetchTeam(params.team_id);
  if (!team) {
    notFound();
  }
  const task = await fetchTask(params.task_id);

  return (
    <main>
      <EditForm 
        teamId={params.team_id} 
        taskId={params.task_id} 
        userId={user.id} 
        taskTitle={task.task_title} 
        taskDescription={task.task_description} 
        taskDate={task.due_date}
      />

    </main>
  );
}
