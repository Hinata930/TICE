import { Calendar } from "@/app/components/calendar/calendar";
import { CalendarSkeleton } from "@/app/components/calendar/skeleton";
import { fetchCurrentUser } from "@/app/lib/data";
import { currentUser } from "@clerk/nextjs";
import { Suspense } from "react";


export default async function Page() {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);


  return (
    <>
      <div className='w-full child-height'>
        <Suspense fallback={<CalendarSkeleton />}>
          <Calendar userId={user.id} />
        </Suspense>
      </div>
    </>
  );
}
