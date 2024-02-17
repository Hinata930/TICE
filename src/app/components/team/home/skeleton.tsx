

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
              <h2 className='text-lg font-medium pb-1'>
                今週の課題
              </h2>
              <div className='border border-[var(--color-light-gray)] rounded-md'>
                <CurrentWeekTasksSkeleton />
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
                <RecentActivitySkeleton />
              </div>
            </div>
          </div>
          {/* カレンダー(今週の課題分) */}
          <div className='mb-4'>
            <div className='pl-2'>
              <h2 className='text-lg font-medium pb-4'>
                カレンダー
              </h2>
              <CalendarSkeleton />
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
      <div className='flex flex-col py-1'>
        <CurrentWeekTasksRowSkeleton />
        <CurrentWeekTasksRowSkeleton />
        <CurrentWeekTasksRowSkeleton />
      </div>
    </>
  );
}

export function CurrentWeekTasksRowSkeleton() {
  return (
    <>
      <div className='flex flex-row pl-[10px] mb-[2px]'>
        <div className='h-5 w-[140px] bg-gray-100 pr-1' />
        <div className='h-5 w-[14px] bg-gray-100 pr-1' />
        <div className='w-[200px] bg-gray-100' />
      </div> 
    </>
  );
}

export function RecentActivitySkeleton() {
  return (
    <>
      <div className='flex flex-row items-center mb-[2px] pl-[10px]'>
        {/* タスク作った人の image と username */}
        <div className='h-3 w-3 mr-1 rounded-full bg-gray-100' />
        <div className='h-4 w-[96px] pr-[2px] bg-gray-100' />
        <div className='h-4 w-[168px] bg-gray-100' />
      </div> 
    </>
  );
}

export function CalendarSkeleton() {
  return (
    <>
      <div className='flex flex-col min-h-8 border-r border-t border-l border-[var(--color-light-gray)] rounded-md lg:flex-row lg:h-56 lg:border-r-0'>
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
      <div className='calendar-date-width h-full w-full px-1 border-b rounded-md lg:border-r'>
        <div className='flex flex-col h-full w-full'>
          <div className='flex flex-row-reverse justify-end items-center w-full text-xl mb-2 lg:flex-col lg:justify-center'>
            <div className='block w-5 h-7 bg-gray-100' />
            <div className='block w-[22.2px] h-7 bg-gray-100' />
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
      <div className='flex-col min-h-8 overflow-y-auto lg:h-auto'>
        <div className='h-5 w-full bg-gray-100' />
        <TaskListRowSkeleton />
        <TaskListRowSkeleton />
      </div>
    </> 
  ); 
}

export function TaskListRowSkeleton() {
  return (
    <>
      <div className='h-4 w-full mb-[2px] bg-gray-100' />
    </>
  )
}