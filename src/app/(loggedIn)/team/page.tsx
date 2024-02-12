import { fetchCurrentUser, fetchTeams } from "@/app/lib/data";
import { currentUser } from "@clerk/nextjs";
import TeamList from "@/app/components/team/team-list"; 
import Link from "next/link";


export default async function Page() {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);
  if (!user) {
    throw new Error('Failed to fetch current user');
  }

  const teamArray = await fetchTeams(user.id);
  return (
    <>
      <Link href="/team/create">チームを作成する</Link> 
      <TeamList teamArray={teamArray} />
    </>
  );
}
