import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DeleteTask } from '@/app/lib/actions/task-actions';

export function CreateTaskButton({ teamId }: { teamId: string }) {
  return (
    <Link
      href={`/team/${teamId}/task/create`}
      className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
    >
      <span className='hidden md:block'>新しい課題を作成</span>{' '}
      <PlusIcon className='h-5 md:ml-4' />
    </Link>
  )
}

export function UpdateTaskButton({ 
  teamId,
  taskId,
}: { 
  teamId: string,
  taskId: string,
}) {
  return (
    <Link
      href={`/team/${teamId}/task/${taskId}/edit`}
      className='rounded-md border p-2 hover:bg-gray-100'
    >
      <PencilIcon className='w-5' />
    </Link>
  );
}

export function DeleteTaskButton({ taskId }: { taskId: string }) {
  const deleteTaskWithId = DeleteTask.bind(null, taskId);

  return (
    <form action={deleteTaskWithId}>
      <button className='rounded-md border p-2 hover:bg-gray-100'>
        <span className='sr-only'>課題の削除</span>
        <TrashIcon className='w-5' />
      </button>
    </form>
  );
}
