'use client'

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DeleteTeam } from '@/app/lib/actions/team-actions';
import { RemoveTeamMember } from '@/app/lib/actions/user-team-actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from 'react-modal';


export function CreateTeamButton() {
  return (
    <Link
      href='/team/create'
      className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
    >
      <span className='hidden md:block'>新しいチームを作成</span>{' '}
      <PlusIcon className='h-5 md:ml-4' />
    </Link>
  )
}

export function UpdateTeamButton({ teamId }: { teamId: string }) {
  return (
    <Link
      href={`/team/${teamId}/edit`}
      className='rounded-md border p-2 hover:bg-gray-100'
    >
      <PencilIcon className='w-5' />
    </Link>
  );
}

export function DeleteTeamButton({ id }: { id: string }) {
  const deleteTeamWithId = DeleteTeam.bind(null, id);

  return (
    <form action={deleteTeamWithId}>
      <button className='rounded-md border p-2 hover:bg-gray-100'>
        <span className='sr-only'>チームの削除</span>
        <TrashIcon className='w-5' />
      </button>
    </form>
  );
}

// チームから抜けるボタン（確認用のボタン。呼び出す用も必要）
export function LeaveTeamButton({ userId, teamId }: { userId: string, teamId: string }) {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const removeTeamMemberWithIds = async () => {
    try {
      // チームからユーザーを削除
      await RemoveTeamMember(userId, teamId);

      router.push('/team');
    } catch (error) {
      console.error('Failed to leave the team:', error);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className='rounded-md border p-2 hover:bg-gray-100'>
        チームから抜ける
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Leave Team Confirmation"
        style={{
          content: {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 'auto',
            marginTop: '100px',
            maxWidth: '500px',
            maxHeight: '200px',
            padding: '40px',
          },
          overlay: {
            zIndex: 50,
          }
        }}
      >
        <div className='flex flex-col'>
          <h3 className='flex mb-5 text-2xl text-[var(--color-attention)]'>
            本当にチームから抜けますか？
          </h3>
          <div className='flex'>
            <button 
              onClick={closeModal}
              className='flex items-center h-10 mr-4 rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
            >
              キャンセル
            </button>
            <button 
              onClick={removeTeamMemberWithIds}
              className='flex items-center h-10 rounded-lg bg-[var(--color-seccondary)] px-4 text-sm font-medium text-[var(--color-seccondary-contrast)] transition-colors hover:bg-blue-400'
            >
              抜ける
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}