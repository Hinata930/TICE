import { fetchTeamsByTeamIds } from "@/app/lib/data"; 
import Link from "next/link";
import { Fragment } from "react";

interface props{
  recentTeamIds: string[],
}

export default async function RecentTeamList({ recentTeamIds }: props) {
  const recentTeamList = await fetchTeamsByTeamIds(recentTeamIds);
  return (
    <div className='flex flex-col'>
      <h2>最近訪れたチーム</h2>
      <div className='flex flex-row'>
        {recentTeamList.map((team) => (
          <Fragment key={team?.id}>
            <Link
              href={`/team/${team?.id}`}
            >
              {team?.team_name}
            </Link>
          </Fragment>
        ))
        }
      </div>
    </div>
  );
}