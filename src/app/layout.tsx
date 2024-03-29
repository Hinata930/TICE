import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Noto_Sans_JP } from 'next/font/google';
import '@/app/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TICE',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='ja'>
        <body className={`${inter.className}`}>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
