import { fetchTeam } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Suspense } from "react";


export default async function Page({ params }: { params: { team_id: string } }) {
  const team = await fetchTeam(params.team_id);
  if (!team) {
    notFound();
  }

  return (
    <>
      <Suspense fallback={<div></div>}>
        <h2>{team.team_name}</h2>
      </Suspense>
    </>
  );
}
