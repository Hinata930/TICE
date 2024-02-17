import CreateForm from "@/app/components/team/invite/create-form";



export default async function Page({ params }: { params: { team_id: string } }) {
  return (
    <>
      <CreateForm teamId={params.team_id} />
    </>
  );
}