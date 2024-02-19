import { fetchTeamsByTeamIds, fetchValidTasksForCurrentWeekByTeam } from '@/app/lib/data'; 
import Link from 'next/link';
import { Fragment } from 'react';

interface props{
  recentTeamIds: string[],
}

export default async function RecentTeamList({ recentTeamIds }: props) {
  const recentTeamList = await fetchTeamsByTeamIds(recentTeamIds);

  return (
    <div className='block py-4 px-8'>
      <div className='flex flex-col'>
        <h2 className='text-lg font-semibold border-b pl-4 pb-2'>
          最近訪れたチーム
        </h2>
        <div className='flex flex-row flex-wrap py-2 pl-2'>
          {recentTeamList.map(async (team) => {
            if (team) {
              const tasksForCurrentWeek = await fetchValidTasksForCurrentWeekByTeam(team.id);
              return (
                <Fragment key={team.id}>
                  <Link
                    href={`/team/${team.id}`}
                    className='block h-64 w-48 border-2 border-[var(--color-light-gray)] rounded-md m-2 p-2 hover:translate-y-[-1px] hover:shadow'
                  >
                    <p className='text-base font-bold border-b border-[var(--color-light-gray)] p-1'>
                      {team.team_name}
                    </p>
                    <div className='recent-team-list-contents-height text-sm text-[var(--color-gray)] p-1'>
                      {/* 概要 */}
                      <p>概要</p>
                      <p className='text-xs line-clamp-1'>
                        実装中 
                      </p>
                      <p className='mt-2 mb-1'>
                        今週が提出期限の課題
                      </p>
                      <div className='recent-team-list-tasks-content-height overflow-y-auto'>
                        {tasksForCurrentWeek.map((task) => (
                          <Fragment key={task.id}>
                            <p className='text-xs'>
                              {task.task_title}
                            </p>
                          </Fragment>
                        ))
                        }                          
                      </div>
                    </div>
                  </Link>
                </Fragment>
              );
            }
            
          })
          }
        </div>
      </div>
    </div>
  );
}