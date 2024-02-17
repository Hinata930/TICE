// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function CalendarSkeleton() {
  return (
    <>
      <h2 className='flex justify-center pt-4 mx-auto font-semibold text-3xl'>
        カレンダー
      </h2>
      <div className='flex flex-col h-auto max-w-[62.5rem] mx-auto mt-8 rounded-md border-r border-t border-l border-[var(--color-light-gray)] lg:flex-row lg:h-[60vh] lg:border-r-0'>
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
  return(
    <>
      <div className='calendar-date-width h-full w-full px-1 border-b rounded-md lg:border-r'>
        <div className='flex flex-col h-full w-full'>
          {/* 日付 */}
          <div className='flex flex-row-reverse justify-end items-center w-full mb-2 lg:flex-col lg:justify-center'>
            <div className='h-[28px] w-5 bg-gray-100' />
            <div className='h-[28px] w-[22.2px] bg-gray-100' />
          </div>
          
          <div className='flex-col min-h-8 overflow-y-auto lg:h-auto'>
            <div className='flex flex-col overflow-y-auto'>
              {/* stopIconとチーム名 */}
              <div className='h-5 w-full bg-gray-100 mb-[2px]' />
              {/* タイトル */}
              <div className='h-4 w-full mb-[2px] bg-gray-100' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}