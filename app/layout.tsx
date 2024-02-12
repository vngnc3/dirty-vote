import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIRTY VOTE",
  description: "Tonton film Dirty Vote - Full - Tanpa iklan",
  openGraph: {
    title: 'DIRTY VOTE',
    description: 'Tonton film Dirty Vote - Full - Tanpa iklan',
    url: 'https://dirty-vote.vercel.app',
    siteName: 'DIRTY VOTE',
    images: [
      {
        url: 'https://dirty-vote.vercel.app/maxresdefault.jpg', // Must be an absolute URL
        width: 1280,
        height: 720,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
