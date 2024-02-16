// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function CalendarSkeleton() {
  return (
    <>
      <h2 className='flex justify-center pt-4 mx-auto font-semibold text-3xl'>
        カレンダー
      </h2>
      <div className='flex flex-row h-[60vh] max-w-[62.5rem] mx-auto mt-8 rounded-md border-y border-l border-[var(--color-light-gray)]'>
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
      <div className='calendar-date-width h-full w-full px-1 border-r rounded-md'>
        <div className='flex flex-col h-full w-full'>
          <div className='flex flex-col justify-center items-center w-full mb-2'>
            <div className='h-[28px] w-5 bg-gray-100'>
            </div>
            <div className='h-[28px] w-[22.2px] bg-gray-100'>
            </div>
          </div>
          <div className='flex flex-col overflow-y-auto'>
            <div className='flex flex-row mb-[2px]'>
              <div className='flex items-center w-2 mr-[2px]' />
              <div>
                <p className='h-5 bg-gray-100'>
                </p> 
              </div>
            </div> 
            <div className='pl-[10px] bg-gray-100'>
              <p 
                className='h-4 mb-[2px]'
              >
              </p>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}