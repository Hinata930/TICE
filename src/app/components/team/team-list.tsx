import { fetchTeams } from '@/app/lib/data';
import Link from 'next/link';


export default async function TeamList({ user_id }: { user_id: string }) {
  const teamArray = await fetchTeams(user_id);
  return (
    <>
      {teamArray.map((team) => {
        return (
          <Link
            key={team.id}
            href={`/team/${team.id}`}
            className='block h-16 w-auto mt-1 p-1 line-clamp-1 text-[var(--color-gray)] text-xl rounded-md border-2 border-[var(--color-light-gray)] hover:translate-y-[-1px] hover:shadow'
          >
            <p>{team.team_name}</p>
          </Link>
        );
      })}
    </>
  );
}
