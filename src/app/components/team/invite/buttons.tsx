import { handleAcceptedTeamInvite, rejectTeamInvite } from "@/app/lib/actions/team-invites";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";


export function AcceptedTeamInviteButton({
  currentUserId,
  id,
}: { 
  currentUserId: string,
  id: string
}) {
  const acceptedTeamInviteWithId = handleAcceptedTeamInvite.bind(null, currentUserId, id);

  return (
    <form action={acceptedTeamInviteWithId}>
      <button className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
        <span className='hidden md:block'>招待を受け入れる</span>{' '}
        <CheckIcon className='h-5 md:ml-4' />
      </button>
    </form>
  )
}

export function RejectTeamInviteButton({ 
  currentUserId,
  id,
}: { 
  currentUserId: string,
  id: string, 
}) {
  const rejectTeamInviteWithId = rejectTeamInvite.bind(null, currentUserId, id);

  return (
    <form action={rejectTeamInviteWithId}>
      <button className='rounded-md border p-2 hover:bg-gray-100'>
        <span className='sr-only'>拒否</span>
        <XMarkIcon className='w-5' />
      </button>
    </form>
  );
}
