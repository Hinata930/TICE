// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function HomeSkeleton() {
  return (
    <>
      <div className='px-4 pt-4 rounded-md'>
        {/* チーム名 */}
        <div className='pb-4 mb-4 border-b'>
          <div className='pr-8 pl-2'>
            <div className='h-9 w-full bg-gray-100' />
          </div>
        </div>
        <div className='max-w-[62.5rem] mr-auto'>
          {/* 今週の課題一覧 */}
          <div className='mb-4'>
            <div className='pl-2'>
              <div className='h-7 w-20 pb-1 bg-gray-100' />
              <div className='border border-[var(--color-light-gray)] rounded-md'>
                <CurrentWeekTasksSkeleton />
              </div>
            </div>
          </div>
          {/* 最近のアクティビティ(課題追加・更新・削除) */}
          <div className='mb-4'>
            <div className='pl-2'>
              <div className='h-7 w-[180px] pb-1 bg-gray-100' />
              <div className='border border-[var(--color-light-gray)] rounded-md'>
                <RecentActivitySkeleton />
              </div>
            </div>
          </div>
          {/* カレンダー(今週の課題) */}
          <div className='mb-4'>
            <div className='pl-2'>
              <div className='w-20 pb-4 bg-gray-100' />
              <div>
                <CalendarSkeleton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function CurrentWeekTasksSkeleton() {
  return (
    <>
      <CurrentWeekTasksRowSkeleton />
      <CurrentWeekTasksRowSkeleton />
      <CurrentWeekTasksRowSkeleton />
      <CurrentWeekTasksRowSkeleton />
      <CurrentWeekTasksRowSkeleton />
    </>
  );
}

export function CurrentWeekTasksRowSkeleton() {
  return (
    <>
      <div className='flex flex-col overflow-y-auto'>
        <div className='flex flex-row text-sm text-[var(--color-gray)] pl-[10px] mb-[2px]'>
          <p className='h-5 pr-1 pointer-events-none'>
            <div className='w-[140px] bg-gray-100' />
            <span className='w-[14px] bg-gray-100' />
          </p>
          <div className='w-[200px] bg-gray-100' />
        </div> 
      </div>
    </>
  );
}

export function RecentActivitySkeleton() {
  return (
    <>
      <div className='flex flex-row items-center w-full mb-[2px] pl-[10px]'>
        {/* タスク作った人の image と username */}
        <div className='h-3 w-3 mr-1 rounded-full bg-gray-100'/>
        <div>
          <span className='h-4 w-[96px] pr-[2px] bg-gray-100' />
          <span className='h-4 w-[168px] bg-gray-100' />
        </div>
      </div> 
    </>
  );
}

export function CalendarSkeleton() {
  return (
    <>
      <div className='flex flex-row h-56 rounded-md border-y border-l border-[var(--color-light-gray)]'>
        <CalendarRowSkeleton />
        <CalendarRowSkeleton />
        <CalendarRowSkeleton />
        <CalendarRowSkeleton />
        <CalendarRowSkeleton />
        <CalendarRowSkeleton />
        <CalendarRowSkeleton />
      </div> 
    </>
  );
}

export function CalendarRowSkeleton() {
  return (
    <>
      <div className='calendar-date-width h-full w-full px-1 border-r rounded-md'>
        <div className='flex flex-col h-full w-full'>
          <div className='flex flex-col justify-center items-center w-full text-xl mb-2'>
            <div className='w-5 h-7 bg-gray-100' />
            <div className='w-[22.2px] h-7 bg-gray-100' />
          </div>
          <TaskListSkeleton />
        </div>
      </div>
    </>
  );
}

export function TaskListSkeleton() {
  return(
    <>
      <TaskListRowSkeleton />
      <TaskListRowSkeleton />
    </> 
  ); 
}

export function TaskListRowSkeleton() {
  return (
    <>
      <div className='flex flex-col overflow-y-auto'>
        <div className='pl-[10px]'>
          <div className='h-4 w-full text-xs text-[var(--color-gray)] mb-[2px] bg-gray-100' />
        </div> 
      </div>
    </>
  );
}