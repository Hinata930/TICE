import Link from "next/link";


type Team = {
  id: string
  created_at: Date
  updated_at: Date
  team_name: string
  creator: string | null
}

type TeamListProps = {
  teamArray: Team[];
}

export default function TeamList({ teamArray }: TeamListProps) {
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
