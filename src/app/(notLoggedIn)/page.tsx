import Link from 'next/link';

export default async function Page() {
  return (
    <main className='h-screen w-screen'>
      <Link href='/home' className='size-96 font-medium text-4xl'>
        サインイン
      </Link>
    </main>
  );
}
