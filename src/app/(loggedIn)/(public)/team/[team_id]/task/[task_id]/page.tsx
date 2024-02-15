import { fetchCurrentUser, fetchTask, fetchTaskCreator } from '@/app/lib/data';
import { convertDateToJapaneseFormatDate } from '@/app/lib/utils';
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';

export default async function Page({ 
  params, 
}: {
    params: {
      team_id: string,
      task_id: string,
    },
  },
) {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);
  const task = await fetchTask(params.task_id);
  const taskCreator = await fetchTaskCreator(task.id);
  const currentDate = new Date();
  // 提出期限をYYYY年mm月dd日に変換する
  const dueDateJapaneseFormat = convertDateToJapaneseFormatDate(task.due_date); // YYYY年mm月dd日
  // 課題の提出期限までの日にち
  const daysUntilDueDate = Math.floor((task.due_date.getTime() - currentDate.getTime()) / 1000 / 60 / 60 / 24);


  return (
    <div className='rounded-md bg-[var(--color-base-gray)] max-w-[70rem] mx-auto p-4'>
      <div className='flex flex-col mt-4'>
        <div className='flex flex-row w-full px-4 pb-6 mb-6 border-b-2 border-[var(--color-light-gray)]'>
          <div className='flex flex-col flex-grow team-task-title-width'>
            <h2 className='text-4xl font-medium items-start text-[var(--color-black)] mb-1 break-words'>
              {`${task.task_title}`}
            </h2>
            {/* 作った人のアイコンと名前 */}
            <div className='flex flex-row items-center w-auto'>
              <Image
                src={taskCreator.image_url}
                className="mr-2 rounded-full"
                width={16}
                height={16}
                alt={`${taskCreator.username}のプロフィール写真`}
              />
              <p className='line-clamp-1 text-base text-gray-500'>
                {taskCreator.username}
              </p>
            </div>
          </div>
          <div className='flex flex-col flex-grow-0 min-w-64'>
            <p className='text-lg w-full text-[var(--color-black)]'>
              提出期限：{dueDateJapaneseFormat}
            </p>
            {
              daysUntilDueDate === 0 &&
                <p className='text-[var(--color-attention)] font-semibold'>今日が締め切りです。</p> ||
              daysUntilDueDate < 0 && 
                <p>既に締め切りを過ぎています</p> ||
              daysUntilDueDate >= 1 &&
                <p>{`締め切りまであと${daysUntilDueDate}日`}</p> 
            }
          </div>
        </div>

        <div className='w-full'>
          <div className='px-4 flex flex-col'>
            <h3 className='text-lg mb-1'>
              課題の詳細
            </h3>
            <div className='bg-white px-4 py-2 rounded-md'>
              {`${task.task_description}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
