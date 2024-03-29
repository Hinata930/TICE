import Home from '@/app/components/team/home/home';
import { HomeSkeleton } from '@/app/components/team/home/skeleton';
import { fetchTeam } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';


export default async function Page({ params }: { params: { team_id: string } }) {
  const team = await fetchTeam(params.team_id);
  if (!team) {
    notFound();
  }

  return (
    <>
      <Suspense fallback={<HomeSkeleton />}>
        <Home teamId={params.team_id} />
      </Suspense>
    </>
  );
}
