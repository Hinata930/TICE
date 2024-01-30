import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ja">
        <body className={inter.className}>
          <Header />
          {/* flexでサイドバーとchildrenを横並びにする。top-16はヘッダー分 */}
          <div className="flex relative top-16 w-screen">
            <Sidebar />
            {/* 下のdivでSidebarの横幅だけ指定した(Sidebarの中にchildrenが来ないようにするため) */}
            <div className="flex-grow-0 w-[50px] md:w-64"></div>
            <div className="flex-grow h-auto">
              {children}
            </div>
          </div>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}