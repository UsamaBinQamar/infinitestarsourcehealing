"use client";
import { XCircle } from "lucide-react";
import Link from "next/link";

export default function DonationCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-pink-100 to-purple-100 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 shadow-lg">
            <XCircle className="w-14 h-14 text-white drop-shadow" />
          </span>
        </div>
        <h1 className="text-3xl font-bold text-pink-700 mb-2">
          Donation Cancelled
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Your donation was not completed. If you changed your mind, that&apos;s
          okay!
        </p>
        <p className="text-gray-500 mb-8">
          If you need help or wish to try again, please feel free to do so.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/donate"
            className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:scale-105 transition-transform"
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-300 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
