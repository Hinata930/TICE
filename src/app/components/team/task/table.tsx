import Image from 'next/image';
import { fetchFilteredTasks } from '@/app/lib/data';
import { DeleteTaskButton, UpdateTaskButton } from './buttons';
import Link from 'next/link';

export default async function TasksTable({
  query,
  currentPage,
  teamId,
}: {
  query: string;
  currentPage: number;
  teamId: string;
}) {
  const tasks = await fetchFilteredTasks(query, currentPage, teamId);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2">
            {tasks?.map((task) => (
              <Link
                href={`/team/${teamId}/task/${task.id}`}
                key={task.id}
              >
                <div className='mb-2 w-full rounded-md bg-white p-4 hover:translate-y-[-1px] hover:shadow'>
                    <div className="flex flex-col items-center">
                      {/* 提出期限 */}
                      <p className='w-full text-gray-500 pb-1'>
                        提出期限：{task.due_date ? task.due_date.toDateString() : '取得失敗'}
                      </p>
                      <div className="flex flex-row items-center w-full pb-[2px]">
                        {/* 課題のタイトル */}
                        <p className="flex justify-start text-2xl text-[var(--color-black)] font-medium line-clamp-1">
                          {task.task_title}
                        </p>
                      </div>
                      {/* 課題の詳細 */}
                      <p className='line-clamp-1 w-full text-gray-500'>
                        {task.task_description ? task.task_description : ' '}
                      </p>
                    </div>
                  <div className="flex items-center">
                    {/* 作った人のアイコンと名前 */}
                    <Image
                      src={task.users? task.users.image_url : '/preview.png'}
                      className="mr-2 rounded-full"
                      width={16}
                      height={16}
                      alt={`${task.users? task.users.username : '作成者'}のプロフィール写真`}
                    />
                    <p className='text-base text-gray-500'>
                      {task.users? task.users.username : '作成者'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
