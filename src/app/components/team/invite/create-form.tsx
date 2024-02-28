'use client'

import { createTeamInvites } from "@/app/lib/actions/team-invites";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";


interface FormData {
  username: string;
}

interface Props {
  teamId: string
}


export default function CreateInvite({ teamId }: Props) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await createTeamInvites(teamId, { message: '', errors: {} }, data);
      if (result?.message) {
        console.error('Error:', result.message);
      } else {
        console.log('Team Invites created successfully!');
        // Reset the form after successful submission
        reset();
        router.push(`/revalidate?path=/team/${teamId}/member`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='rounded-md bg-[var(--color-base-gray)] p-4 md:p-6'>
          <h2 className='text-2xl text-[var(--color-black)] mb-4'>
            招待の作成
          </h2>
          <div className='mb-4'>
            <label htmlFor="username" className='mb-2 block text-sm text-[var(--color-black)] font-medium'>
              ユーザー名を入力 
            </label>
            <div className='relative'>
              <input 
                type='text' 
                id='username' 
                placeholder='ユーザー名'
                className='block w-full rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500'
                aria-describedby='username-error'
                {...register('username', { 
                  required: 'ユーザー名は必須です',
                  maxLength: { value: 64, message: 'ユーザー名は64文字以下です'} 
                })} />
            </div>
            <div id='username-error' aria-live='polite' aria-atomic='true'>
              {errors.username && 
                <p className='mt-2 text-sm text-red-500'>
                  {errors.username.message}
                </p>
              }
            </div>
          </div>
        </div>
        <div className='mt-6 flex justify-end gap-4'>
          <Link
            href={`/team/${teamId}/member`}
            className='flex items-center h-10 rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
          >
            キャンセル
          </Link>
          <button type='submit' className='flex items-center h-10 rounded-lg bg-[var(--color-seccondary)] px-4 text-sm font-medium text-[var(--color-seccondary-contrast)] transition-colors hover:bg-blue-400'>
            招待を作成
          </button>
        </div>
      </form>
    </>
  );
}