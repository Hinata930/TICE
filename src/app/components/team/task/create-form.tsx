'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { CreateTask } from '@/app/lib/actions/task-actions';
import { fetchCurrentDate } from '@/app/lib/utils';
import Link from 'next/link';


interface FormData {
  due_date: Date;
  task_title: string;
  task_description: string;
}

interface Props {
  currentUserId: string
  team_id: string
}


export function CreateForm({ currentUserId, team_id }: Props) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<FormData>();
  const router = useRouter();
  const currentDate = fetchCurrentDate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await CreateTask(currentUserId, team_id, { message: '', errors: {} }, data);
      if (result?.message) {
        console.error('Error:', result.message);
      } else {
        console.log('Task created successfully!');
        // Reset the form after successful submission
        reset();
        router.push(`/revalidate?path=/team/${team_id}/task`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-md bg-[var(--color-base-gray)] p-4 md:p-6">
          <h2 className='text-2xl text-[var(--color-black)] mb-4'>課題の作成</h2> 
          {/* タイトル */}
          <div className='mb-4'>
            <label htmlFor="task_title" className='mb-2 block text-sm text-[var(--color-black)] font-medium'>
              タイトル
            </label>
            <div className='relative'>
              <input 
                type="text" 
                id="task_title" 
                placeholder='タイトル'
                autoComplete='off'
                className='block w-full rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500'
                aria-describedby="task_title-error"
                {...register('task_title', { 
                  required: 'タイトルは必須です',
                  maxLength: { value: 64, message: 'タイトルは64文字以下で入力してください'} 
                })} />
            </div>
            <div id='task_title-error' aria-live='polite' aria-atomic='true'>
              {errors.task_title && 
                <p className='mt-2 text-sm text-red-500'>
                  {errors.task_title.message}
                </p>
              }
            </div>
          </div>

          {/* 提出締め切り */}
          <div className='mb-4'>
            <label htmlFor="due_date" className='mb-2 block text-sm font-medium'>
              提出締め切り
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input 
                  type='date'
                  id='due_date'
                  min={currentDate}
                  autoComplete='off'
                  className='block w-auto rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500'
                  {...register('due_date', {
                    required: '提出締め切りは必須です',
                    min: { value: currentDate, message: '提出締め切りは今日以降にしてください' },
                  })} 
                />
              </div>
              <div id='task_title-error' aria-live='polite' aria-atomic='true'>
                {errors.due_date && 
                  <p className='mt-2 text-sm text-red-500'>
                    {errors.due_date.message}
                  </p>
                }
              </div>
            </div>
          </div>

          {/* 内容 */}
          <div className='mb-4'>
            <label htmlFor="task_description" className='mb-2 block text-sm text-[var(--color-black)] font-medium'>
              タイトル
            </label>
            <div className='relative'>
              <textarea 
                id="task_description" 
                placeholder='課題の内容'
                className='block w-full rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500'
                aria-describedby="task_description-error"
                {...register('task_description', {
                  maxLength: { value: 2048, message: '課題の内容は2048文字以下で入力してください' },
                })} />
            </div>
            <div id='task_description-error' aria-live='polite' aria-atomic='true'>
              {errors.task_description && 
                <p className='mt-2 text-sm text-red-500'>
                  {errors.task_description.message}
                </p>
              }
            </div>
          </div>
        </div>
        <div className='mt-6 flex justify-end gap-4'>
          <Link
            href={`/team/${team_id}/task`}
            className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
          >
            キャンセル
          </Link>
          <button type="submit" className='flex h-10 items-center rounded-lg bg-[var(--color-seccondary)] px-4 text-sm font-medium text-[var(--color-seccondary-contrast)] transition-colors hover:bg-blue-400'>
            課題を作成
          </button>
        </div>

        
      </form>
    </>
  );
}
