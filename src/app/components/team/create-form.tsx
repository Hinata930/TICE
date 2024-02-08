'use client'

import { useFormState, useFormStatus } from "react-dom";
import { CreateTeam } from "@/app/lib/actions/team-actions"; 
import { fetchCurrentUser } from "@/app/lib/data";


function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      作成
    </button>
  );
}


export function CreateForm(currentUserId: {currentUserId: string}) {
  const initialState = { message: '', errors: {} };
  const [state, formAction] = useFormState(
    (prevstate: any, formData: FormData) => CreateTeam( currentUserId.currentUserId, prevstate, formData),
    initialState
  );

  return (
    <form action={formAction}>
      <label htmlFor="team_name">チーム名</label>
      <input 
        type="text" 
        id="team_name" 
        name="team_name" 
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