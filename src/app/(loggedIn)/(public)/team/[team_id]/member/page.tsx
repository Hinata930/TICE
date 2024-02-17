import MemberList from '@/app/components/team/member/member-list';
import { MemberListSkeleton } from '@/app/components/team/member/skeleton';
import { teamExists } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';


export default async function Page({ params }: { params: { team_id: string } }) {
  const team = await teamExists(params.team_id);
  if (!team) {
    notFound();
  }

  return (
    <>
      <div className='max-w-[62.5rem] mx-auto pt-8'>
        <div className='rounded-sm mx-4'>
          <Suspense fallback={<MemberListSkeleton />}>
            <MemberList teamId={params.team_id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}