"use client";
import { SidebarContext } from "@/context/SidebarContext";
import {
  CircleDollarSign,
  Flower2,
  Heart,
  Home,
  Mail,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

// All locations/pages available in the app with location categories
const allLocations = [
  {
    category: "Core Pages",
    items: [{ href: "/", label: "Home", icon: Home }],
  },
  {
    category: "Free Healing",
    items: [
      {
        href: "/24-hour-image-activations",
        label: "24 hour image activations",
        icon: Sparkles,
      },
      {
        href: "/healing-sessions",
        label: "Healing Sessions",
        icon: Zap,
      },
      {
        href: "/24-hr-reiki-activations",
        label: "24 Hr Reiki Activation Music",
        icon: Zap,
      },
      {
        href: "/request-healing",
        label: "Request Healing & Prayer",
        icon: Heart,
      },
      // { href: "/energy-healing", label: "Free Energy Healing", icon: Zap },
      // {
      //   href: "/request-healing",
      //   label: "Request Healing & Prayer",
      //   icon: Heart,
      // },
      { href: "/share-healing", label: "Share Healing", icon: Flower2 },
      // { href: "/energy-healing", label: "Energy Healing", icon: Zap },

      // {
      //   href: "/daily-blessings",
      //   label: "Daily Reiki/Energy Blessings",
      //   icon: Sparkles,
      // },
      // {
      //   href: "/daily-reiki-subscription",
      //   label: "Daily Reiki Subscription",
      //   icon: Activity,
      // },
      // {
      //   href: "/musicians-submit-simple",
      //   label: "For Musicians/Artists/Creators",
      //   icon: Music,
      // },
    ],
  },
  {
    category: "Other",
    items: [
      { href: "/donate", label: "Donate", icon: CircleDollarSign },
      // { href: "/faq", label: "FAQ", icon: HelpCircle },
      { href: "/contributors", label: "Contributors", icon: Users },
      { href: "/contact", label: "Contact", icon: Mail },
    ],
  },
];

export function BottomNav() {
  const { isOpen } = useContext(SidebarContext);

  return (
    <aside
      className={`w-[280px] bg-gradient-to-b from-[#2D1B4E] to-[#1E0B38] shadow-xl z-[9999] overflow-y-auto fixed top-0 bottom-0 left-0 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 bottom-0 w-1"
        style={{
          background:
            "linear-gradient(to bottom, #9333ea, #4f46e5, #ec4899, #9333ea)",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{
          background:
            "linear-gradient(to bottom, #9333ea, #4f46e5, #ec4899, #9333ea)",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(to right, #9333ea, #4f46e5, #ec4899)",
        }}
      ></div>

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, white 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="flex flex-col items-start py-6 relative">
        {/* Logo area with enhanced styling */}
        <div className="px-4 mb-5 text-white w-full text-center">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
            Infinite Star Source
          </h2>
          <p className="text-sm font-medium bg-gradient-to-r from-blue-300 via-purple-200 to-pink-300 bg-clip-text text-transparent mt-1">
            Healing
          </p>
          <div className="mt-2 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>

        {/* Main navigation with enhanced styling - balanced spacing */}
        <div className="w-full px-2">
          {allLocations.map((category, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-purple-300 text-xs font-bold uppercase tracking-wider px-4 mb-1 flex items-center">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                {category.category}
              </h3>

              <div className="rounded-lg overflow-hidden">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.href} href={item.href}>
                      <span className="flex items-center gap-2.5 py-2 px-4 text-white hover:bg-[#4D3B6E] hover:text-[#d4b8ff] w-full transition-all duration-300 cursor-pointer rounded-md mx-1 my-0.5 group">
                        <div className="p-1 rounded-full bg-[#3D2B5E] group-hover:bg-[#5b4885] transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{item.label}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center">
          <div className="w-10 h-1 bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </aside>
  );
}

// Mobile bottom navigation
export function MobileNav() {
  // Use the most important items for mobile navigation
  const mobileNavItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/energy-healing", label: "Free Healing", icon: Zap },
    { href: "/daily-blessings", label: "Blessings", icon: Sparkles },
    { href: "/request-healing", label: "Request", icon: Heart },
    { href: "/share-healing", label: "Share", icon: Flower2 },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#2D1B4E] to-[#1E0B38] shadow-xl z-[9999] md:hidden">
      {/* Top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(to right, #9333ea, #4f46e5, #ec4899, #9333ea)",
        }}
      ></div>

      <div className="flex justify-around items-center h-[70px] px-2">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href}>
              <span className="flex flex-col items-center justify-center p-1 text-white hover:text-[#d4b8ff] cursor-pointer transition-all duration-300 group">
                <div className="p-2 rounded-full bg-[#3D2B5E] group-hover:bg-[#5b4885] transition-colors mb-1">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium">{item.label}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;
