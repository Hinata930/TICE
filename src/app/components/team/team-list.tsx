import { fetchTeams } from "@/app/lib/data";
import Link from "next/link";


export default async function TeamList({ user_id }: { user_id: string }) {
  const teamArray = await fetchTeams(user_id);
  return (
    <>
      {teamArray.map((team) => {
        return (
          <Link
            key={team.id}
            href={`/team/${team.id}`}
            className="block h-16 w-auto bg-gray-50 rounded-lg my-2 text-neutral-900 text-xl"
          >
            <p>{team.team_name}</p>
          </Link>
        );
      })}
    </>
  );
}
