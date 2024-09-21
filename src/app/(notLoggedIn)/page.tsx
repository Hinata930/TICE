import Link from 'next/link';

export default async function Page() {
  return (
    <main className='flex items-center justify-center h-screen w-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md max-w-md w-full'>
        <h1 className='text-2xl font-bold text-center mb-4'>TICE サインイン</h1>
        <p className='text-gray-600 text-center mb-6'>TICEへようこそ。アカウントにサインインして、素晴らしい体験を始めましょう。</p>
        <Link href='/home' className='block text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md py-2 font-semibold'>
          サインイン
        </Link>
      </div>
    </main>
  );
}
