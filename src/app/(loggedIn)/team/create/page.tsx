import { CreateForm } from "@/app/components/team/create-form"; 
import { currentUser } from "@clerk/nextjs"; 
import { fetchCurrentUser } from "@/app/lib/data"; 



export default async function Page() {
  const user = await currentUser();
  if (!user) {
    throw new Error('Failed to fetch current user.');
  }

  const thisUser = await fetchCurrentUser(user.id);
  if (!thisUser) {
    throw new Error('Failed to fetch current user.');
  }

  const userId = thisUser.id;

  return (
    <main>
      <CreateForm currentUserId={userId} />
    </main>
  );
}