import { UserButton } from "@clerk/nextjs"
import Link from "next/link";

export default function Header() {
  return(
    <div className="fixed w-screen z-20 bg-white">
      <nav className="flex h-16 border-solid border-[var(--color-light-gray)] border-b">
        <Link href="/home" className="flex items-center ml-8 h-full text-3xl text-neutral-600">
          TICE
        </Link>
        <div className="flex-grow">
        </div>
        <div className="flex items-center justify-center mr-2 w-16 h-full flex-grow-0">
          <UserButton afterSignOutUrl="/"/>
        </div>
      </nav>
    </div>
  );
}