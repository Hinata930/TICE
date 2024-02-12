'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { CreateTeam } from '@/app/lib/actions/team-actions';
import { useRouter } from 'next/navigation';


interface FormData {
  team_name: string
}

interface Props {
  currentUserId: string
}

export function CreateForm({ currentUserId }: Props) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await CreateTeam(currentUserId, { message: '', errors: {} }, data);
      if (result?.message) {
        console.error('Error:', result.message);
      } else {
        console.log('Team created successfully!');
        // Reset the form after successful submission
        reset();
        router.push('/team');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="team_name">チーム名</label>
      <input 
        type="text" 
        id="team_name" 
        {...register('team_name', { 
          required: 'チーム名は必須です',
          min: { value: 2, message: 'チーム名は2文字以上で入力してください' }, 
          max: { value: 32, message: 'チーム名は32文字以下で入力してください'} 
        })} />
      {errors.team_name && <p>{errors.team_name.message}</p>}
      
      <button type="submit" className='bg-sky-400 text-neutral-50 w-10 h-7 rounded' aria-disabled={false}>
        作成
      </button>
    </form>
  );
}
