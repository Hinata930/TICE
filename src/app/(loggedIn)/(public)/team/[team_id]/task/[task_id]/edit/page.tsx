import { EditForm } from "@/app/components/team/task/edit-form"; 
import { fetchTask, fetchTeam } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function Page({ 
  params 
}: { 
  params: { 
    team_id: string, 
    task_id: string 
  } 
}) {
  const team = await fetchTeam(params.team_id);
  if (!team) {
    notFound();
  }
  const task = await fetchTask(params.task_id);

  return (
    <main>
      <EditForm 
        team_id={params.team_id} 
        task_id={params.task_id} 
        taskTitle={task.task_title} 
        taskDescription={task.task_description} 
        taskDate={task.due_date}
      />

    </main>
  );
}
