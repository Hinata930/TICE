import { CreateForm } from '@/app/components/team/task/create-form';
import { fetchCurrentUser, teamExists } from '@/app/lib/data';
import { currentUser } from '@clerk/nextjs';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { team_id: string } }) {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);

  const team = await teamExists(params.team_id);
  if (!team) {
    notFound();
  }
  
  return (
    <main className='max-w-[62.5rem] mx-auto'>
      <CreateForm currentUserId={user.id} teamId={params.team_id} />
    </main>
  );
}
