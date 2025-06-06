// This is a Server Component by default in Next.js App Router.
// Do NOT add "use client"; at the top if you want to export metadata.

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import the new SupabaseProvider Client Component
import SupabaseProvider from "./supabase-provider";
import Navigation from '@/components/Navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata export is only supported in Server Components.
export const metadata: Metadata = {
  title: "StayEase",
  description: "StayEase nextjs app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ...existing head content... */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-50 dark`}
        suppressHydrationWarning
      >
        <Navigation />
        <SupabaseProvider>
          <main className="flex-grow dark:bg-black">
            {children}
          </main>
        </SupabaseProvider>
      </body>
    </html>
  );
}
