import { LeaveTeamButton } from '@/app/components/team/buttons';
import NavBar from '@/app/components/team/nav-bar';
import { addVisitedTeam } from '@/app/lib/actions/visited-team';
import { fetchCurrentUser, fetchTeams } from '@/app/lib/data';
import { currentUser } from '@clerk/nextjs';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default async function TeamLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { team_id: string };
}>) {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);
  const teams = await fetchTeams(user.id);
  let status = false;
  teams.forEach((team) => {
    if (team.id === params.team_id) {
      status = true;
    }
  });

  if (status) {
    addVisitedTeam(user.id, params.team_id);
    return (
      <div className='w-full h-full'>
        <Suspense fallback={<></>}>
          <NavBar teamId={params.team_id} userId={user.id}/>
        </Suspense>
        <div className='relative top-12'>
          {children}
        </div>
      </div>
    );
  } else {
    notFound();
  }
  
}
