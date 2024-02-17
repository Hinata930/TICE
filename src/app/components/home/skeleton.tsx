// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function RecentTeamListSkeleton() {
  return (
    <div className='block py-4 px-8 rounded-md'>
      <div className='flex flex-col'>
        <div className='h-7 w-[160px] border-b pl-4 pb-2 bg-gray-100' />
        <div className='flex flex-row flex-wrap py-2 pl-2'>
          <RecentTeamListRowSkeleton />
          <RecentTeamListRowSkeleton />
          <RecentTeamListRowSkeleton />
        </div>
      </div>
    </div>
  );
}

export function RecentTeamListRowSkeleton() {
  return (
    <>
      <div className='h-64 w-48 border-2 border-[var(--color-light-gray)] rounded-md m-2 p-2 hover:translate-y-[-1px] hover:shadow'>
        <div className='h-6 w-full bg-gray-100 border-b border-[var(--color-light-gray)] p-1' />
        <div className='text-sm text-[var(--color-gray)] p-1'>
          {/* 概要 */}
          <div className='h-5 w-7 bg-gray-100' />
          <div className='h-4 w-full bg-gray-100' />
          <div className='mt-2'>
            <div className='h-5 bg-gray-100' />
            <RecentTeamListTaskRowSkeleton/>
            <RecentTeamListTaskRowSkeleton/>
            <RecentTeamListTaskRowSkeleton/>
            <RecentTeamListTaskRowSkeleton/>
          </div>
        </div>
      </div>
    </>
  );  
}

export function RecentTeamListTaskRowSkeleton() {
  return (
    <>
      <div className='h-4 w-full rounded-md bg-gray-100' />
    </>
  );
}
