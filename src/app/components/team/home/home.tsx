import { fetchTeam, fetchTasksByDateForCurrentWeekByTeam, fetchValidTasksByDateForCurrentWeekByTeam, fetchRecentTeamActivity } from '@/app/lib/data';
import { Calendar } from './calendar/calendar';
import CurrentWeekTasks from './current-week-tasks';
import RecentActivity from './recent-activity';


interface props {
  teamId: string;
}

export default async function Home({ teamId }: props) {
  const team = await fetchTeam(teamId);
  const weeklyTasks = await fetchTasksByDateForCurrentWeekByTeam(teamId);
  const validWeeklyTasks = await fetchValidTasksByDateForCurrentWeekByTeam(teamId)
  const recentTeamActivity = await fetchRecentTeamActivity(teamId, 4);

  if (team) {
    return (
      <>
        <div className='px-4 pt-4'>
          {/* チーム名 */}
          <div className='pb-4 mb-4 border-b'>
            <div className='pr-8 pl-2'>
              <h2 className='text-3xl font-semibold'>
                {team.team_name}
              </h2>
            </div>
          </div>
          <div className='max-w-[62.5rem] mr-auto'>
            {/* 今週の課題一覧 */}
            <div className='mb-4'>
              <div className='pl-2'>
                <h2 className='text-lg font-medium pb-1'>
                  今週の課題
                </h2>
                <div className='border border-[var(--color-light-gray)] rounded-md'>
                  <CurrentWeekTasks validWeeklyTasks={validWeeklyTasks} teamId={teamId} />
                </div>
              </div>
            </div>
            {/* 最近のアクティビティ(課題追加・更新・削除) */}
            <div className='mb-4'>
              <div className='pl-2'>
                <h2 className='text-lg font-medium pb-1'>
                  最近のアクティビティ
                </h2>
                <div className='border border-[var(--color-light-gray)] rounded-md'>
                  <RecentActivity TeamActivity={recentTeamActivity} />
                </div>
              </div>
            </div>
            {/* カレンダー(今週の課題) */}
            <div className='mb-4'>
              <div className='pl-2'>
                <h2 className='text-lg font-medium pb-4'>
                  カレンダー
                </h2>
                <div>
                  <Calendar weeklyTasks={weeklyTasks} teamId={teamId}  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <p>notFound</p>
    </>
  );
  
}