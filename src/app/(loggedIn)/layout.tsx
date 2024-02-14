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
      <div className="flex relative top-16 w-screen">
        <Sidebar />
        <div className="relative left-[50px] h-auto md:left-64">
          <div className='child-width h-full'>
            {children}
          </div>
        </div>
      </div>
    </>  
  );
}
