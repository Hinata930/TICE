import NavBar from "@/app/components/team/nav-bar";

export default async function TeamLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { team_id: string };
}>) {
  return (
    <div className="w-full h-full">
      <NavBar teamId={params.team_id}/>
      <div className="relative top-12">
        {children}
      </div>
    </div>
  );
}
