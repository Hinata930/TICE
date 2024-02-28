'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { clsx } from 'clsx'; 
import { LeaveTeamButton } from './buttons';

interface Props {
  teamId: string,
  userId: string,
}

export default function NavBar({ teamId, userId }: Props) {
  const pathname = usePathname();
  const links = [
    { name: 'ホーム', href: `/team/${teamId}` },
    { name: '課題', href: `/team/${teamId}/task` },
    { name: 'メンバー', href: `/team/${teamId}/member` },
  ];

  return (
    <div className='fixed h-12 child-width bg-white border-b-[1px] border-[var(--color-light-gray)] z-20'>
      <div className='flex items-center h-full w-full pl-4'>
        <div className='flex flex-grow justify-start h-full w-auto'>
          {links.map((link) => {
            return (
              <div
                key={link.name}
                className={clsx('flex items-center px-6 h-full ',
              {
                'text-[var(--color-primary)] pt-[2px] border-b-2 border-[var(--color-primary)]': pathname === link.href,
              })}>
                <Link
                  href={link.href}
                  className={clsx({
                    'text-[var(--color-black)] hover:text-[var(--color-seccondary)] hover: bg-[var(--color-base-bray)]': pathname !== link.href,
                  })}
                >
                  <p className=''>
                    {link.name}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
        <div className='flex flex-grow-0 h-full w-auto'>
          <LeaveTeamButton userId={userId} teamId={teamId} />
        </div>
      </div>
    </div>
  );
}