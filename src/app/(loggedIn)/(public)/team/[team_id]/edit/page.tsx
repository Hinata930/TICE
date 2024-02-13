import { EditForm } from "@/app/components/team/edit-form"; 
import { fetchTeam } from "@/app/lib/data";
import { notFound } from "next/navigation";


export default async function Page({ params }: { params: { team_id: string } }) {
  const team = await fetchTeam(params.team_id);
  if (!team) {
    notFound();
  } if (!team) {
    return (
      <>
        notFound
      </>
    );
  }

  return (
    <main>
      <EditForm teamId={params.team_id} teamName={team.team_name}/>
    </main>
  );
}