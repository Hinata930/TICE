import { fetchTeam } from "@/app/lib/data";
import Link from "next/link";


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
      <Link href={`/team/${params.team_id}/edit`}>チーム名を変更する</Link>
      <h2>{params ? params.team_id : 'null'}</h2>
      <h2>{team.team_name}</h2>
      <Link href={`/team/${params.team_id}/task`}>課題一覧</Link>
    </>
  );
}
