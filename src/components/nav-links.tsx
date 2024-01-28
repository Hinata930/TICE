'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { clsx } from "clsx";
import { HomeIcon, CalendarIcon, UsersIcon } from "./icons";

// 同じ処理だからsidebarにつかうデータをここに
const links = [
  { name: 'ホーム', href: '/', icon: HomeIcon },
  { name: 'カレンダー', href: '/calendar', icon: CalendarIcon },
  { name: 'チーム', href: '/team', icon: UsersIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] items-center gap-2 rounded-lg p-3 text-sm font-medium text-neutral-950 hover:bg-gray-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3',
              {
                'bg-gray-100 text-blue-600': pathname === link.href,
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
    </>
  );
}