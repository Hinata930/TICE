

export default async function Page({ params }: { params: { team_id: string } }) {
  return (
    <>
      <h2>
        {params ? params.team_id : 'null'}
      </h2>
    </>
  );
}
