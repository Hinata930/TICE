import { fetchCurrentUser } from '@/app/lib/data';
import { currentUser } from '@clerk/nextjs';
import TeamList from '@/app/components/team/team-list'; 
import Link from 'next/link';
import { Suspense } from 'react';
import { TeamListSkeleton } from '@/app/components/team/task/skeletons';
import { PlusIcon } from '@heroicons/react/24/outline';


export default async function Page() {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);

  return (
    <>
        <div className='px-2 w-full'>
          <div className='flex px-2 w-full mt-4 pb-1 mb-4 border-b border-[var(--color-light-gray)]'>
            <h2 className='flex justify-start h-10 items-center text-lg font-semibold text-[var(--color-black)]'>
              チーム一覧
            </h2>
            <div className='flex-grow'></div>
            <Link 
              href='/team/create' 
              className='flex justify-end h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              <span className='hidden md:block'>
                チームを作成する
              </span>
              <PlusIcon className='h-5 md:ml-4' />
            </Link> 
          </div>
          
          <Suspense fallback={<TeamListSkeleton />}>
            <TeamList user_id={user.id} />
          </Suspense>
        </div>
    </>
  );
}
