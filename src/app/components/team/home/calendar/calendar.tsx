import { Fragment } from 'react';
import { convertIndexToJapaneseDayOfWeek, getLastTwoCharacters } from '@/app/lib/utils';
import TaskList from './task-list';
import { WeeklyTaskByTeam } from '@/app/lib/difinitions';


interface props {
  weeklyTasks: WeeklyTaskByTeam[];
  teamId: string;
}

export async function Calendar({ weeklyTasks, teamId }: props) {
  return (
    <>
      <div className='flex flex-col min-h-8 border-r border-t border-l border-[var(--color-light-gray)] rounded-md lg:flex-row lg:h-56 lg:border-r-0'>
        {weeklyTasks.map((dailyTasks) => {
          const date = getLastTwoCharacters(dailyTasks.date);
          const dayOfWeek = convertIndexToJapaneseDayOfWeek(dailyTasks.dayOfWeek);
          return (
            <Fragment key={dailyTasks.date}>
              <div className='calendar-date-width h-full w-full px-1 border-b rounded-md lg:border-r'>
                <div className='flex flex-col h-full w-full'>
                  <div className='flex flex-row-reverse justify-end items-center w-full text-xl mb-2 lg:flex-col lg:justify-center'>
                    <p>
                      {dayOfWeek}
                    </p>
                    <p>
                      {date}
                    </p>
                  </div>
                  <TaskList dailyTasks={dailyTasks.tasks} teamId={teamId} />
                </div>
              </div>
            </Fragment>
          );
        })
        }
      </div> 
    </>
  );
}