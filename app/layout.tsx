import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StairEffect from '@/components/UI/StairEffect';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WAVECHIEF",
  description: "The smartest way to save money while moving, from booking to delivery. The UK’s favorite delivery, removals and transport marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StairEffect />
          {children}
      </body>
    </html>
  );
}



