import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";

export default async function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {/* flexでサイドバーとchildrenを横並びにする。top-16はヘッダー分 */}
      <div className="flex relative top-16 100%">
        <Sidebar />
        <div className="relative left-[50px] h-auto child-width md:left-64">
          {children}
        </div>
      </div>
    </>  
  );
}
