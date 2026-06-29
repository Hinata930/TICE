import Farming from '@/app/components/farming/farming';
import { fetchFarmingByUserId } from '@/app/lib/data';
import { currentUser } from '@clerk/nextjs';
import { fetchCurrentUser } from '@/app/lib/data';

export default async function Page() {
  const clerkUser = await currentUser();
  if (!clerkUser) { throw new Error('Failed to fetch current user'); }

  const user = await fetchCurrentUser(clerkUser.id);


  const farming = await fetchFarmingByUserId(user.id);
  if (!farming) return (<></>);

  return (
    <>
      <Farming farming={farming} />
    </>
  );
}
