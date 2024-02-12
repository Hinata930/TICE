'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { CreateTask } from '@/app/lib/actions/task-actions';


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
  const currentDate = new Date().toISOString().split('T')[0];

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await CreateTask(currentUserId, team_id, { message: '', errors: {} }, data);
      if (result?.message) {
        console.error('Error:', result.message);
      } else {
        console.log('Team created successfully!');
        // Reset the form after successful submission
        reset();
        router.push(`/team/${team_id}/task`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <h2>課題作成</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="task_title">タイトル</label>
        <input 
          type="text" 
          id="task_title" 
          {...register('task_title', { 
            required: 'タイトルは必須です',
            min: { value: 1, message: 'タイトルは1文字以上で入力してください' }, 
            max: { value: 2048, message: 'タイトルは2048文字以下で入力してください'} 
          })} />
        {errors.task_title && <p>{errors.task_title.message}</p>}


        <label htmlFor="due_date">提出締切</label>
        <input 
          type='date'
          id='due_date'
          min={currentDate}
          {...register('due_date', {
            required: '提出締切は必須です',
            min: { value: currentDate, message: '締め切り日は今日以降にしてください' },
          })} />
        {errors.due_date && <p>{errors.due_date.message}</p>}


        <label htmlFor='task_description'>内容</label>
        <textarea 
          id='task_description'
          {...register('task_description', {
            max: { value: 2048, message: '課題の内容は2048文字以下で入力してください' },
          })} />
        {errors.task_description && <p>{errors.task_description.message}</p>}
      
        <button type="submit" className='bg-sky-400 text-neutral-50 w-10 h-7 rounded' aria-disabled={false}>
          課題を作成
        </button>
      </form>
    </>
  );
}
