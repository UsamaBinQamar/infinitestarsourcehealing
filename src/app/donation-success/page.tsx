"use client";
import { CheckCircle, Heart } from "lucide-react";
import Link from "next/link";

export default function DonationSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 shadow-lg">
            <CheckCircle className="w-14 h-14 text-white drop-shadow" />
          </span>
        </div>
        <h1 className="text-3xl font-bold text-purple-700 mb-2">
          Thank You for Your Donation!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Your generosity helps us spread more healing, love, and light to the
          world.
        </p>
        <div className="flex justify-center mb-6">
          <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
        </div>
        <p className="text-gray-500 mb-8">
          A confirmation email has been sent to you. Your support truly makes a
          difference!
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:scale-105 transition-transform"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
