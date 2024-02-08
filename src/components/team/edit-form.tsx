"use client"; 

import { useFormState, useFormStatus } from "react-dom"; 
import { UpdateTeamName } from "@/lib/actions/team-actions"; 
import { fetchTeam } from "@/lib/data"; 
import { useRouter } from "next/router";



function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      編集
    </button>
  );
}


export async function EditForm(teamId: string) {
  // useRouter().query.prevUrl as string | string[] | undefined
  const router = useRouter();
  const previousUrl = Array.isArray(router.query.prevUrl) ? router.query.prevUrl[0] : router.query.prevUrl || '/';
  
  const teamChanges = await fetchTeam(teamId); 
  if (!teamChanges) {
    throw new Error('Failed to retrieve the team for the upcoming changes.')
  }

  const initialState = { message: '', errors: {} }; 
  const [state, formAction] = useFormState(
    (prevstate: any, formData: FormData) => UpdateTeamName( previousUrl, teamId, prevstate, formData ),
    initialState
  );

  return (
    <form action={formAction}>
      <label htmlFor="team_name">チーム名</label>
      <input 
        type="text" 
        id="team_name" 
        name="team_name" 
        placeholder={teamChanges.team_name} 
        minLength={2} 
        maxLength={32} 
        required 
      />
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}