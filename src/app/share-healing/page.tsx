import { Share, Download, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function ShareHealing() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent mb-4">
          Share Healing Energy
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          This digital healing card contains embedded healing energy. Share it
          with friends, family, and anyone who could benefit from positive
          energy and support.
        </p>
      </div>

      {/* Healing Card */}
      <div className="bg-gradient-to-b from-[#593d96] to-[#3a2969] rounded-xl shadow-xl p-8 text-center text-white mx-auto max-w-lg mb-8">
        <h2 className="text-2xl font-bold mb-1">Infinite Star Source</h2>
        <p className="text-sm text-purple-200 mb-8">Healing Energy Card</p>

        <div className="relative w-48 h-48 mx-auto mb-8">
          {/* Concentric circles */}
          <div className="absolute inset-0 rounded-full border-4 border-purple-300 opacity-20 animate-pulse"></div>
          <div
            className="absolute inset-4 rounded-full border-4 border-purple-300 opacity-30 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="absolute inset-8 rounded-full border-4 border-purple-300 opacity-40 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <div
            className="absolute inset-12 rounded-full border-4 border-purple-300 opacity-50 animate-pulse"
            style={{ animationDelay: "0.6s" }}
          ></div>

          {/* Center circle */}
          <div className="absolute inset-16 rounded-full bg-purple-300 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white opacity-70"></div>
          </div>
        </div>

        <h3 className="text-xl mb-2">Healing Energy Transmission</h3>
        <h2 className="text-2xl font-bold mb-2">Infinite Star Source</h2>
        <p className="text-sm text-purple-200 mb-4">
          This card has been energetically charged with Reiki healing energy
        </p>
        <p className="text-sm mb-8">
          Healing energy is being sent to you with love and intention
        </p>
      </div>

      {/* Sharing options */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Link
          href="#"
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <Share className="w-5 h-5" />
          <span>Share with Others</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <Download className="w-5 h-5" />
          <span>Download Image</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <LinkIcon className="w-5 h-5" />
          <span>Copy Link</span>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">
          How This Healing Card Works
        </h2>

        <p className="text-gray-700 mb-4">
          This digital card has been energetically charged with healing Reiki
          energy. When someone views this image, the healing energy is activated
          and flows to them, supporting their well-being on all levels.
        </p>

        <h3 className="text-xl font-semibold text-purple-700 mt-6 mb-3">
          Ways to Share
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
            Share directly through social media or messaging apps
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
            Download the image and send it as an attachment
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
            Copy the link and share it through email or text
          </li>
        </ul>

        <p className="text-gray-700 mt-6">
          The energy in this card works regardless of time or distance.
          Recipients will receive the healing energy simply by viewing the
          image, which will support their highest good.
        </p>
      </div>
    </div>
  );
}
