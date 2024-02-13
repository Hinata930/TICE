'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { clsx } from "clsx";
import { HomeIcon, CalendarIcon, UsersIcon } from "@heroicons/react/24/outline"; 

// sidebarにつかうデータ
const links = [
  { name: 'ホーム', href: '/home', icon: HomeIcon },
  { name: 'カレンダー', href: '/calendar', icon: CalendarIcon },
  { name: 'チーム', href: '/team', icon: UsersIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  return(
    <div className="fixed h-screen w-[50px] border-r-[1px] border-[var(--color-light-gray)] md:w-64 z-50">
      <nav className="flex flex-col pr-1 py-2 space-y-[6px] md:pr-2">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx('flex h-[48px] items-center rounded-lg gap-2 p-3 text-sm font-medium md:flex-none md:p-2 md:px-3',
                {
                  'text-[var(--color-black)] hover:text-[var(--color-seccondary)]': pathname !== link.href,
                  'text-[var(--color-primary)]': pathname === link.href,
                },
              )}
            >
              <div className="w-6">
                <LinkIcon />
              </div>
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}