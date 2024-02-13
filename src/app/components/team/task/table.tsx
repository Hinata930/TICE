import Image from 'next/image';
import { fetchFilteredTasks } from '@/app/lib/data';
import { DeleteTaskButton, UpdateTaskButton } from './buttons';

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
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {tasks?.map((task) => (
              <div
                key={task.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="mb-2 flex items-center">
                    <Image
                      src={task.users? task.users.image_url : '/preview.png'}
                      className="mr-2 rounded-full"
                      width={28}
                      height={28}
                      alt={`${task.users? task.users.username : '作成者'}のプロフィール写真`}
                    />
                    <p>{task.users? task.users.username : '作成者'}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {task.task_title}
                    </p>
                    <p>
                      {task.due_date ? task.due_date.toDateString() : '取得失敗'}
                    </p>
                    {/* line-clamp-2で2行目からはみ出したら省略記号が2行目の最後につく */}
                    <p className='line-clamp-2'>
                      {task.task_description ? task.task_description : ' '}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateTaskButton teamId={teamId} taskId={task.id} />
                    <DeleteTaskButton taskId={task.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  作成者
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  タイトル
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  締め切り日
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  課題の詳細
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">編集</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tasks?.map((task) => (
                <tr
                  key={task.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={task.users? task.users.image_url : '/preview.png'}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${task.users? task.users.username : '作成者'}のプロフィール写真`}
                      />
                      <p>{task.users? task.users.username : '作成者'}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {task.task_title}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {task.due_date? task.due_date.toDateString() : '取得失敗'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {task.task_description? task.task_description : ' '}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateTaskButton teamId={teamId} taskId={task.id} />
                      <DeleteTaskButton taskId={task.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
