import RecentTeamList from '@/app/components/home/recent-team-list';
import { RecentTeamListSkeleton } from '@/app/components/home/skeleton';
import { fetchCurrentUser, fetchVisitedTeamIdsByUserId } from '@/app/lib/data';
import { currentUser } from '@clerk/nextjs';
import { Suspense } from 'react';


export default async function Page() {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);

  const recentTeams = await fetchVisitedTeamIdsByUserId(user.id);
  const recentTeamIds = recentTeams.map((recentTeam) => {
    return recentTeam?.id || '';
  })

  return (
    <>
      <Suspense fallback={<RecentTeamListSkeleton />}>
        <RecentTeamList recentTeamIds={recentTeamIds} />
      </Suspense>
    </>
  );
}
