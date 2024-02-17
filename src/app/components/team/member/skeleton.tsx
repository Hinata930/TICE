// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function MemberListSkeleton() {
  return (
    <>
      <div className='flex flex-col w-full'>
        <div className='border-b-2 border-[var(--color-light-gray)] w-full'>
          <h2 className='text-3xl text-[var(--color-black)] font-medium p-4'>
            メンバー一覧
          </h2>
        </div>
        <div className='px-4 pt-2'>
          <MemberListRowSkeleton />
          <MemberListRowSkeleton />
          <MemberListRowSkeleton />
          <MemberListRowSkeleton />
          <MemberListRowSkeleton />
          <MemberListRowSkeleton />
        </div>
      </div>
    </>
  );
}

export function MemberListRowSkeleton() {
  return (
    <>
      <div className='flex flex-row items-center w-full pt-2 rounded-md'>
        <div className='w-8 h-8 mr-2 rounded-full bg-gray-100'/>
        <div className='w-[200px] h-7 bg-gray-100' />
      </div>
    </>
  );
}