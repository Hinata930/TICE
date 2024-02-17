import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DeleteTeam } from '@/app/lib/actions/team-actions';


export function CreateTeamButton() {
  return (
    <Link
      href='/team/create'
      className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
    >
      <span className='hidden md:block'>新しいチームを作成</span>{' '}
      <PlusIcon className='h-5 md:ml-4' />
    </Link>
  )
}

export function UpdateTeamButton({ teamId }: { teamId: string }) {
  return (
    <Link
      href={`/team/${teamId}/edit`}
      className='rounded-md border p-2 hover:bg-gray-100'
    >
      <PencilIcon className='w-5' />
    </Link>
  );
}

export function DeleteTeamButton({ id }: { id: string }) {
  const deleteTeamWithId = DeleteTeam.bind(null, id);

  return (
    <form action={deleteTeamWithId}>
      <button className='rounded-md border p-2 hover:bg-gray-100'>
        <span className='sr-only'>チームの削除</span>
        <TrashIcon className='w-5' />
      </button>
    </form>
  );
}

