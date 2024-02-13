'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { clsx } from "clsx"; 

interface Props {
  teamId: string
}

export default async function NavBar({ teamId }: Props) {
  const pathname = usePathname();
  const links = [
    { name: 'ホーム', href: `/team/${teamId}` },
    { name: '課題', href: `/team/${teamId}/task` },
    { name: 'メンバー', href: `/team/${teamId}/member` },
  ];

  return (
    <div className="fixed h-12 w-full border-b-[1px] border-[var(--color-light-gray)] z-50">
      <div className="flex items-center h-full w-full pl-4">
        {links.map((link) => {
          return (
            <div
              key={link.name}
              className={clsx('flex items-center px-6 h-full ',
            {
              'text-[var(--color-black)] hover:text-[var(--color-seccondary)] hover: bg-[var(--color-base-bray)]': pathname !== link.href,
              'text-[var(--color-primary)] pt-[2px] border-b-2 border-[var(--color-primary)]': pathname === link.href,
            })}>
              <Link
                href={link.href}
              >
                <p className=''>
                  {link.name}
                </p>
              </Link>
            </div>
            
          );
        })}
      </div>
    </div>
  );
}