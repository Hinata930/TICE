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
      <div className='flex flex-row h-56 rounded-md border-y border-l border-[var(--color-light-gray)]'>
        {weeklyTasks.map((dailyTasks) => {
          const date = getLastTwoCharacters(dailyTasks.date);
          const dayOfWeek = convertIndexToJapaneseDayOfWeek(dailyTasks.dayOfWeek);
          return(
            <Fragment key={dailyTasks.date}>
              <div className='calendar-date-width h-full w-full px-1 border-r rounded-md'>
                <div className='flex flex-col h-full w-full'>
                  <div className='flex flex-col justify-center items-center w-full text-xl mb-2'>
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