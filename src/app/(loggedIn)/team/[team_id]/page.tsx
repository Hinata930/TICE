import { fetchTeam } from "@/app/lib/data";


export default async function Page({ params }: { params: { team_id: string } }) {
  const team = await fetchTeam(params.team_id);
  if (!team) {
    return (
      <>
        Not Found
      </>
    );
  }
  // ここから

  return (
    <>
      <h2>{params ? params.team_id : 'null'}</h2>
      <h2>{team.team_name}</h2>
    </>
  );
}
