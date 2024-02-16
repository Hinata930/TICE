import { WeeklyTask } from '@/app/lib/difinitions';
import { StopIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { Fragment } from 'react';


interface props{
  dailyTasks: WeeklyTask;
}

export default async function TeamTaskList({ dailyTasks }: props) {
  return(
    <>
      {dailyTasks.teamTasks.map((team) => {
        if (team.team) {
          return (
            <Fragment key={team.team.id}>
              <div className='flex flex-col overflow-y-auto'>
                <div className='flex flex-row mb-[2px]'>
                  <StopIcon className='flex items-center w-2 mr-[2px]' />
                  <Link href={`/team/${team.team.id}`}>
                    <p className='flex items-center text-sm'>
                      {team.team.team_name}
                    </p> 
                  </Link>
                </div> 
                <div className='pl-[10px]'>
                  {team.tasks.map((task) => (
                        <Fragment key={task.id}>
                          <Link 
                            href={`/team/${team.team?.id}/task`}
                            className='line-clamp-1 text-xs text-[var(--color-gray)] mb-[2px]'
                          >
                            {task.task_title}
                          </Link>
                        </Fragment>
                      )
                    )
                  }
                </div> 
              </div>
            </Fragment>
          );
        } 
      }) 
      } 
    </> 
  ); 
} 