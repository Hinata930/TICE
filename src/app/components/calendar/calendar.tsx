import { fetchTeams, fetchWeeklyTasks } from '@/app/lib/data';
import { Fragment } from 'react';
import TeamTaskList from '@/app/components/calendar/task/team-task-list';
import { convertIndexToJapaneseDayOfWeek, getLastTwoCharacters } from '@/app/lib/utils';


interface props {
  userId: string,
}

export async function Calendar({ userId }: props) {
  const teamsArray = await fetchTeams(userId);
  const weeklyTasks = await fetchWeeklyTasks(teamsArray)
  

  return (
    <>
      <h2 className='flex justify-center pt-4 mx-auto font-semibold text-3xl'>
        カレンダー
      </h2>
      <div className='flex flex-col h-auto max-w-[62.5rem] mx-auto mt-8 rounded-md border-r border-t border-l border-[var(--color-light-gray)] lg:flex-row lg:h-[60vh] lg:border-r-0'>
        {weeklyTasks.map((dailyTasks) => {
          const date = getLastTwoCharacters(dailyTasks.date);
          const dayOfWeek = convertIndexToJapaneseDayOfWeek(dailyTasks.dayOfWeek);
          return(
            <Fragment key={dailyTasks.date}>
              <div className='calendar-date-width h-full w-full px-1 border-r border-b rounded-md'>
                <div className='flex flex-col h-full w-full '>
                  <div className='flex flex-row-reverse justify-end items-center w-full text-xl mb-2 lg:flex-col lg:justify-center'>
                    <p>
                      {dayOfWeek}
                    </p>
                    <p>
                      {date}
                    </p>
                  </div>
                  <TeamTaskList dailyTasks={dailyTasks} />
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