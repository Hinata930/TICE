import { WeeklyTaskByTeam } from '@/app/lib/difinitions'
import { convertIndexToJapaneseDayOfWeek } from '@/app/lib/utils';
import Link from 'next/link';
import { Fragment } from 'react';

interface props {
  validWeeklyTasks: WeeklyTaskByTeam[];
  teamId: string;
}

export default async function CurrentWeekTasks({ validWeeklyTasks, teamId }: props) {

  return (
    <>
      {validWeeklyTasks.map((dailyTask) => (
        <Fragment key={dailyTask.date}>
          {dailyTask.tasks.map((task) => (
            <Fragment key={task.id}>
            <div className='flex flex-col overflow-y-auto'>
              <div className='flex flex-row text-sm text-[var(--color-gray)] pl-[10px] mb-[2px]'>
                <p className='pointer-events-none pr-1'>
                  {dailyTask.date}
                  <span>
                    {convertIndexToJapaneseDayOfWeek(dailyTask.dayOfWeek)}
                  </span>
                </p>
                <Link 
                  href={`/team/${teamId}/task`}
                  className='line-clamp-1'
                >
                  {task.task_title}
                </Link>
              </div> 
            </div>
          </Fragment>
          ))
          }
        </Fragment>
      ))
      }
    </>
  );
}