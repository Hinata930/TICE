import { teamExists } from '@/app/lib/data';
import { notFound } from 'next/navigation';


export default async function Page({ params }: { params: { team_id: string } }) {
  const team = await teamExists(params.team_id);
  if (!team) {
    notFound();
  }

  return (
    <>
      <p>ナニモナイヨ</p>
    </>
  );
}