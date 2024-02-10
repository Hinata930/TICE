import { fetchCurrentUser, fetchTeamArray } from "@/app/lib/data";
import { currentUser } from "@clerk/nextjs";
import TeamList from "@/app/components/team/team-list"; 


export default async function Page() {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);
  if (!user) {
    throw new Error('Failed to fetch current user');
  }

  const teamArray = await fetchTeamArray(user.id);
  return (
    <>
      <TeamList teamArray={teamArray} />
    </>
  );
}
