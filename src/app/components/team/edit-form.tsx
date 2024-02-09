'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import { UpdateTeamName } from '@/app/lib/actions/team-actions';
import { useRouter } from 'next/navigation'; 
import { fetchTeam } from '@/app/lib/data';

interface FormData {
  team_name: string
}

type Props = {
  teamName: string
  teamId: string
}

export function EditForm({ teamId, teamName }: Props) { 
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await UpdateTeamName(teamId, { message: '', errors: {} }, data);
      if (result?.message) {
        console.error('Error:', result.message);
      } else {
        console.log('Team updated successfully!');
        // Reset the form after successful submission
        reset();
        router.push(`/team/${teamId}`);
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
        placeholder={teamName}
        {...register('team_name', { 
          required: 'チーム名は必須です',
          min: { value: 2, message: 'チーム名は2文字以上で入力してください' }, 
          max: { value: 32, message: 'チーム名は32文字以上で入力してください'} 
        })} />
      {errors.team_name && <p>{errors.team_name.message}</p>}
      
      <button type="submit" className='bg-sky-400 text-neutral-50 w-10 h-7 rounded' aria-disabled={false}>
        編集
      </button>
    </form>
  );
}
