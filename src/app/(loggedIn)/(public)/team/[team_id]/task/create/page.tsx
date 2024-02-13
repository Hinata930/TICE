import { CreateForm } from "@/app/components/team/task/create-form";
import { fetchCurrentUser } from "@/app/lib/data";
import { currentUser } from "@clerk/nextjs";

export default async function Page({ params }: { params: { team_id: string } }) {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);
  
  return (
    <main>
      <CreateForm currentUserId={user.id} team_id={params.team_id} />
    </main>
  );
}
