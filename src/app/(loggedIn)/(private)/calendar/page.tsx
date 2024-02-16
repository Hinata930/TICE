import { Calendar } from "@/app/components/calendar/calendar";
import { fetchCurrentUser } from "@/app/lib/data";
import { currentUser } from "@clerk/nextjs";


export default async function Page() {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);


  return (
    <>
      <div className='w-full child-height'>
        <Calendar userId={user.id} />
      </div>
    </>
  );
}
