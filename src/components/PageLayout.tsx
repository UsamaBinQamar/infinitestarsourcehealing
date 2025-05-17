"use client";
import { ReactNode, useContext } from "react";
import { AlignJustify } from "lucide-react";
import { SidebarContext } from "@/context/SidebarContext";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="flex min-h-screen">
      {/* Main Content- */}
      <main className="flex-1 ml-0 md:ml-[280px] bg-gradient-to-b from-purple-50 to-white">
        {/* Mobile menu button */}
        <div className="p-4 md:hidden">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md bg-white shadow-md text-purple-900"
          >
            <AlignJustify className="w-5 h-5" />
          </button>
        </div>

        <div className="container mx-auto px-4 py-4 pb-20 md:pb-8 max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  );
}
