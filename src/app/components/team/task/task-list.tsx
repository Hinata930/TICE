'use client'

import { convertDateToJapaneseFormatDate, convertTimeToJapaneseFormatTime } from '@/app/lib/utils';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import TaskDatailModal from '@/app/components/team/task/task-details-modal';
import Modal from '@/app/components/team/task/modal';
import { User } from '@prisma/client';


interface Task {
  id: string;
  created_at: Date;
  updated_at: Date;
  task_creator: string | null;
  team_id: string | null;
  due_date: Date;
  task_title: string;
  task_description: string | null;
  users: {
    id: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    username: string | null;
    first_name: string | null;
    last_name: string | null;
    email_address: string;
    image_url: string;
  } | null;
}

interface props {
  tasks: Task[];
  user: User;
};

export default function TaskList({ tasks, user }: props) {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [taskModals, setTaskModals] = useState<{ [taskId: string]: boolean }>({});

  const handleOpenModal = (taskId: string) => {
    setSelectedTask(taskId);
    setTaskModals((prevModals) => ({ ...prevModals, [taskId]: true }));
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
    setTaskModals((prevModals) => ({ ...prevModals, [selectedTask!]: false }));
  };

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2'>
          {tasks.map((task) => (
            <Fragment key={task.id}>
              <button 
                onClick={() => handleOpenModal(task.id)}
                className='mb-2 w-full rounded-md bg-white p-4 hover:translate-y-[-1px] hover:shadow'
              >
                <div className='flex flex-col items-center'>
                  {/* 提出期限 */}
                  <div className='flex w-full pb-1'>
                    <p className='text-gray-500'>
                      提出期限：{convertDateToJapaneseFormatDate(task.due_date)}
                    </p>
                  </div>
                  {/* タイトル */}
                  <div className='flex flex-row items-center w-full pb-[2px]'>
                    <p className='flex justify-start text-2xl text-[var(--color-black)] font-medium line-clamp-1'>
                      {task.task_title}
                    </p>
                  </div>
                  {/* 内容 */}
                  <div className='flex justify-self-start w-full'>
                    <p className='line-clamp-1 text-gray-500'>
                      {task.task_description ? task.task_description : ' '}
                    </p>
                  </div>
                  
                </div>
                <div className='flex flex-row items-center w-full'>
                  {/* タスク作った人の image と username */}
                  <Image
                    src={task.users ? task.users.image_url : '/preview.png'}
                    className='mr-2 rounded-full'
                    width={16}
                    height={16}
                    alt={`${task.users ? task.users.username : '作成者'}のプロフィール写真`}
                  />
                  <p className='line-clamp-1 text-base text-gray-500'>
                    {task.users ? task.users.username : '作成者'}
                  </p>
                  <div className='flex-grow'></div>
                  {/* 作成日時 */}
                  <p className='flex-grow-0 text-sm text-gray-500 min-w-64'>
                    {`課題の作成日時：${convertTimeToJapaneseFormatTime(task.created_at)}`}
                  </p>
                </div>
              </button>
              {/* クリックしたら出現するモーダル */}
              <Modal isOpen={taskModals[task.id] || false} onClose={handleCloseModal}>
                {taskModals[task.id] && <TaskDatailModal taskId={task.id} user={user}/>} 
              </Modal>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
