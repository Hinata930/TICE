'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { UpdateTask } from '@/app/lib/actions/task-actions';


interface FormData {
  due_date: Date;
  task_title: string;
  task_description: string;
}

interface Props {
  teamId: string;
  userId: string;
  taskId: string;
  taskTitle: string;
  taskDescription: string | null;
  taskDate: Date | null;
}


export function EditForm({ teamId, taskId, userId, taskTitle, taskDescription, taskDate }: Props) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<FormData>();
  const router = useRouter();
  const currentDate = new Date().toISOString().split('T')[0];
  

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await UpdateTask( taskId, userId, { message: '', errors: {} }, data);
      if (result?.message) {
        console.error('Error:', result.message);
      } else {
        console.log('Task Edited successfully!');
        // Reset the form after successful submission
        reset();
        router.push(`/revalidate?path=/team/${teamId}/task`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* text */}
        <label htmlFor='task_title'>タイトル</label>
        <input 
          type='text' 
          id='task_title' 
          defaultValue={taskTitle}
          autoComplete='off'
          {...register('task_title', { 
            required: 'は必須です',
            min: { value: 1, message: 'タイトルは1文字以上で入力してください' }, 
            max: { value: 64, message: 'タイトルは64文字以下で入力してください'} 
          })} />
        {errors.task_title && <p>{errors.task_title.message}</p>}


        {/* date */}
        <label htmlFor='due_date'>提出締め切り</label>
        <input 
          type='date'
          id='due_date'
          min={currentDate}
          defaultValue={taskDate?.toISOString().split('T')[0]}
          autoComplete='off'
          {...register('due_date', {
            required: '提出締め切りは必須です',
            min: { value: currentDate, message: '提出締め切りは今日以降にしてください' },
          })} />
        {errors.due_date && <p>{errors.due_date.message}</p>}


        <label htmlFor='task_description'>内容</label>
        <textarea 
          id='task_description'
          defaultValue={taskDescription? taskDescription : ''}
          {...register('task_description', {
            max: { value: 2048, message: '課題の内容は2048文字以下で入力してください' },
          })} />
        {errors.task_description && <p>{errors.task_description.message}</p>}

        <button type='submit' className='bg-sky-400 text-neutral-50 w-10 h-7 rounded' aria-disabled={false}>
          課題を編集
        </button>
      </form>
    </>
  );
}
