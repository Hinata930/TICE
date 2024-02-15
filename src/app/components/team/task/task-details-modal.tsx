import { fetchTask, fetchTaskCreator } from '@/app/lib/data';
import { convertDateToJapaneseFormatDate } from '@/app/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react'; 

interface TaskDetailModalProps {
  taskId: string;
}

interface TaskData {
  id: string;
  created_at: Date;
  updated_at: Date;
  task_creator: string | null;
  team_id: string | null;
  due_date: Date;
  task_title: string;
  task_description: string | null;
}

interface UserData {
  id: string;
  created_at: Date;
  updated_at: Date;
  user_id: string;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
  email_address: string;
  image_url: string;
}

export default function TaskDetailModal({ taskId }: TaskDetailModalProps) {
  const [task, setTask] = useState<TaskData | null>(null);
  const [taskCreator, setTaskCreator] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTask = await fetchTask(taskId);
      setTask(fetchedTask);
    };
    fetchData();
  }, [taskId]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTaskCreator = await fetchTaskCreator(taskId);
      setTaskCreator(fetchedTaskCreator);
    };
    fetchData();
  }, [taskId]);


  const currentDate = new Date();
  const dueDateJapaneseFormat = convertDateToJapaneseFormatDate(task? task.due_date: new Date(0-0-0));
  const daysUntilDueDate = Math.floor(task? ((task.due_date.getTime() - currentDate.getTime()) / 1000 / 60 / 60 / 24): 1);

  return (
    <div className='rounded-md max-w-[70rem] mx-auto px-2 py-4'>
      <div className='flex flex-col mt-4'>
        <div className='flex flex-row w-full px-4 pb-6 mb-6 border-b-2 border-[var(--color-light-gray)]'>
          <div className='flex flex-col flex-grow team-task-title-width'>
            <h2 className='text-4xl font-medium items-start text-[var(--color-black)] mb-1 break-words'>
              {`${task? task.task_title: '読み込み中'}`}
            </h2>
            <div className='flex flex-row items-center w-auto'>
              <Image
                src={taskCreator? taskCreator.image_url: '/preview.png'}
                className="mr-2 rounded-full"
                width={16}
                height={16}
                alt={`${taskCreator? taskCreator.username: '読み込み中'}のプロフィール写真`}
              />
              <p className='line-clamp-1 text-base text-gray-500'>
                {taskCreator? taskCreator.username: '読み込み中'}
              </p>
            </div>
          </div>
          <div className='flex-grow min-w-0'></div>
          <div className='flex flex-col justify-center flex-grow-0 min-w-64'>
            <p className='text-lg w-full text-[var(--color-black)]'>
              提出期限：{dueDateJapaneseFormat}
            </p>
            {
              daysUntilDueDate === 0 &&
                <p className='text-[var(--color-attention)] font-semibold'>
                  今日が締め切りです。
                </p> ||
              daysUntilDueDate < 0 && 
                <p className='text-[var(--color-gray)]'>
                  既に締め切りを過ぎています
                </p> ||
              daysUntilDueDate >= 1 &&
                <p className='text-[var(--color-gray)]'>
                  {`締め切りまであと${daysUntilDueDate}日`}
                </p> 
            }
          </div>
        </div>
        <div className='w-full'>
          <div className='px-4 flex flex-col'>
            <h3 className='text-lg mb-1'>
              課題の詳細
            </h3>
            <div className='bg-white px-4 py-2 rounded-md'>
              {`${task? task.task_description: '読み込み中'}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
