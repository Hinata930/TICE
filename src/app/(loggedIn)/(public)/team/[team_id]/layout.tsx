import NavBar from '@/app/components/team/nav-bar';
import { addVisitedTeam } from '@/app/lib/actions/visited-team';
import { fetchCurrentUser } from '@/app/lib/data';
import { currentUser } from '@clerk/nextjs';

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
  addVisitedTeam(user.id, params.team_id);

  return (
    <div className='w-full h-full'>
      <NavBar teamId={params.team_id}/>
      <div className='relative top-12'>
        {children}
      </div>
    </div>
  );
}
