import { Task } from '@prisma/client';
import Link from 'next/link';
import { Fragment } from 'react';


interface props{
  dailyTasks: Task[];
  teamId: string;
}

export default async function TaskList({ dailyTasks, teamId }: props) {
  return(
    <>
      {dailyTasks.map((task) => (
        <Fragment key={task.id}>
          <div className='flex flex-col overflow-y-auto'>
            <div className='pl-[10px]'>
              <Link 
                href={`/team/${teamId}/task`}
                className='line-clamp-1 text-xs text-[var(--color-gray)] mb-[2px]'
              >
                {task.task_title}
              </Link>
            </div> 
          </div>
        </Fragment>
      )) 
      } 
    </> 
  ); 
} 