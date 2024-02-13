import { fetchCurrentUser } from "@/app/lib/data";
import { currentUser } from "@clerk/nextjs";
import TeamList from "@/app/components/team/team-list"; 
import Link from "next/link";
import { Suspense } from "react";
import { TeamListSkeleton } from "@/app/components/team/task/skeletons";


export default async function Page() {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);

  return (
    <>
      <Suspense fallback={<TeamListSkeleton />}>
        <Link href="/team/create" className="h-6">チームを作成する</Link> 
        <TeamList user_id={user.id} />
      </Suspense>
    </>
  );
}
