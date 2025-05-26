"use client";

import { Coffee, Heart, Sparkles } from "lucide-react";

export default function Donation() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-purple-100 via-yellow-50 to-pink-100 py-10 px-4  ">
      <div className="w-full max-w-xl bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-100">
        <div className="flex flex-col items-center mb-6">
          <Sparkles className="w-12 h-12 text-purple-400 mb-2 animate-bounce" />
          <h1 className="text-3xl font-extrabold text-center mb-2 text-purple-700 drop-shadow-sm">
            Support Our Healing Work
          </h1>
        </div>
        <p className="text-center mb-10 max-w-2xl mx-auto text-gray-700">
          Your generous donations help us continue providing free Reiki and
          healing energy to those in need around the world.
        </p>

        {/* Buy Me a Coffee Button */}
        <div className="flex flex-col items-center justify-center mb-8">
          <a
            href="https://www.buymeacoffee.com/isshealing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            <Coffee className="w-7 h-7" />
            Support us on Buy Me a Coffee
          </a>
          <span className="text-gray-500 text-sm mt-2">
            Quick, secure, and no signup required!
          </span>
          <Heart className="w-6 h-6 text-pink-400 mt-4 animate-pulse" />
        </div>
        <div className="text-center text-xs text-gray-400 mt-4">
          Thank you for supporting our mission 💜
        </div>
      </div>
    </div>
  );
}
