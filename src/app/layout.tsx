import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BottomNav, MobileNav } from "@/components/BottomNav";
import { SidebarProvider } from "@/context/SidebarContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infinite Star Source Healing",
  description: "Share healing energy and positive energy with others",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <BottomNav />
          <MobileNav />
          <main className="flex-1 ml-0 md:ml-[280px] bg-gradient-to-b from-purple-50 to-white min-h-screen">
            <div className="container mx-auto px-4 py-8 pb-20 md:pb-8 max-w-6xl">
              {children}
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
