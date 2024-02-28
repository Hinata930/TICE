import { fetchUserArrayByTeamId } from '@/app/lib/data';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserPlusIcon } from '@heroicons/react/24/outline';


interface props {
  teamId: string;
}

export default async function MemberList({ teamId }: props) {
  const userArray = await fetchUserArrayByTeamId(teamId);
  return (
    <>
      <div className='flex flex-col w-full'>
        <div className='border-b-2 border-[var(--color-light-gray)] w-full'>
          <div className='flex flex-row p-4'>
            <h2 className='flex flex-grow text-3xl text-[var(--color-black)] font-medium'>
              メンバー一覧
            </h2>
            <Link
              href={`/team/${teamId}/invite`}
              className='flex flex-grow-0 items-end'
            >
              <span className='sr-only'>メンバーを追加</span>
              <UserPlusIcon className='w-6 h-6 text-[var(--color-seccondary)]' />
            </Link>
          </div>
          
        </div>
        <div className='px-4 pt-2'>
          {userArray.map((user) => (
            <Fragment key={user?.id}>
              <div className='flex flex-row items-center w-full pt-2'>
                <Image
                  src={user ? user.image_url : '/preview.png'}
                  className='mr-2 rounded-full'
                  width={32}
                  height={32}
                  alt={`${user ? user.username : 'unknown user'}のプロフィール写真`}
                />
                <p className='text-xl text-[var(--color-gray)]'>
                  {user ? user.username : 'unknown user'}
                </p>
              </div>
            </Fragment>
          ))
          }
        </div>
          
      </div>
        
    </>
  );
}