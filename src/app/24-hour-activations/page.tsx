"use client";
// re_j9mUaqoz_663od5F2FaJ6MY6kH7jwVzP2
import { Share, Download, Link as LinkIcon, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ShareHealing() {
  const images = [
    {
      src: "/image (7).jpg",
      alt: "Healing Gallery 1",
      copyText: "Receive this healing energy!",
    },
    {
      src: "/image (8).jpg",
      alt: "Healing Gallery 2",
      copyText: "May you be blessed with light and healing.",
    },
    {
      src: "/image (10).jpg",
      alt: "Healing Gallery 4",
      copyText: "This card is infused with positive energy.",
    },
    {
      src: "/image (11).jpg",
      alt: "Healing Gallery 5",
      copyText: "Feel the Reiki energy flow to you now.",
    },
    {
      src: "/image (18).jpg",
      alt: "Healing Gallery 6",
      copyText: "Healing and peace to you and your loved ones.",
    },
    {
      src: "/image (14).jpg",
      alt: "Healing Gallery 8",
      copyText: "You are surrounded by love and light.",
    },
    {
      src: "/image (17).jpg",
      alt: "Healing Gallery 11",
      copyText: "May this image bring you comfort and strength.",
    },
    {
      src: "/image (21).jpg",
      alt: "Healing Gallery 15",
      copyText: "Share this card to spread healing energy.",
    },
    {
      src: "/image (23).jpg",
      alt: "Healing Gallery 17",
      copyText: "Infinite healing energy flows to you.",
    },
    {
      src: "/image (25).jpg",
      alt: "Healing Gallery 19",
      copyText: "You are a beacon of light and hope.",
    },
    {
      src: "/image (26).jpg",
      alt: "Healing Gallery 20",
      copyText: "May you feel peace and renewal.",
    },
    {
      src: "/image (29).jpg",
      alt: "Healing Gallery 23",
      copyText: "This card is a gift of healing energy.",
    },
  ];

  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleDownload = (src: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop() || "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (img: { src: string; alt: string }) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: img.alt,
          text: img.alt,
          url: window.location.origin + img.src,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      await handleCopyLink(
        img.src,
        images.findIndex((i) => i.src === img.src)
      );
      alert(
        "Sharing is not supported on this device/browser. The link has been copied instead."
      );
    }
  };

  const handleCopyLink = async (src: string, idx: number) => {
    const image = images[idx];
    const textToCopy = image.copyText;
    await navigator.clipboard.writeText(textToCopy);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <section className="text-center  ">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
          Share Healing Energy
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          This digital healing card contains embedded healing energy. Share it
          with friends, family, and anyone who could benefit from positive
          energy and support.
        </p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={400}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay with action buttons */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => handleDownload(img.src)}
                  className="bg-white/80 hover:bg-white text-blue-700 rounded-full p-2 shadow transition-colors"
                  title="Download"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare(img)}
                  className="bg-white/80 hover:bg-white text-purple-700 rounded-full p-2 shadow transition-colors"
                  title="Share"
                >
                  <Share className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleCopyLink(img.src, idx)}
                  className="bg-white/80 hover:bg-white text-pink-700 rounded-full p-2 shadow transition-colors relative"
                >
                  <LinkIcon className="w-5 h-5" />
                  {copiedIdx === idx && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs rounded px-2 py-1 flex items-center gap-1">
                      <Check className="w-4 h-4" /> Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
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
