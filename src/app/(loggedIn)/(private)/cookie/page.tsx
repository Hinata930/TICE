'use server'

import CookieClicker from '@/app/components/cookieClicker/cookie-clicker';
import { fetchCookieClickerByUserId, fetchCurrentUser } from '@/app/lib/data';
import { currentUser } from '@clerk/nextjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function Page() {
  const userFromClerk = await currentUser();
  if (!userFromClerk) {
    throw new Error('Failed to fetch current user');
  }
  const user = await fetchCurrentUser(userFromClerk.id);

  const cookie = await fetchCookieClickerByUserId(user.id);
  if (!cookie) return (<></>);

  return (
    <>
      <CookieClicker cookie={cookie} />
    </>
  );
}
