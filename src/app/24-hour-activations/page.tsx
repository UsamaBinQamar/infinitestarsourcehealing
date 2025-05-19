"use client";
import { Share, Download, Link as LinkIcon, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ShareHealing() {
  // Gallery slider state and images
  const images = [
    {
      src: "/ISS Healing Reiki Energy Infused 1.webp",
      alt: "ISS Healing Reiki Energy Infused",
    },
    {
      src: "/reiki stress.webp",
      alt: "Reiki Stress Relief",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [copied, setCopied] = useState(false);

  const prevImage = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Download current image
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = images[current].src;
    link.download = images[current].src.split("/").pop() || "image.webp";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Share current image (Web Share API)
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: images[current].alt,
          text: images[current].alt,
          url: window.location.origin + images[current].src,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      // Fallback: copy link to clipboard
      await handleCopyLink();
      alert(
        "Sharing is not supported on this device/browser. The link has been copied instead."
      );
    }
  };

  // Copy link to clipboard
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(
      window.location.origin + images[current].src
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Gallery Slider */}
      <div className="relative w-full max-w-xl mx-auto mb-6">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            width={500}
            height={500}
            src={images[current].src}
            alt={images[current].alt}
            className="w-full h-72 object-cover transition-all duration-500"
          />
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white text-purple-700 rounded-full p-2 shadow transition-colors"
          aria-label="Previous image"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white text-purple-700 rounded-full p-2 shadow transition-colors"
          aria-label="Next image"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all border-2 ${current === idx ? "bg-purple-600 border-purple-600" : "bg-white border-purple-300"}`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

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

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {typeof navigator !== "undefined" &&
          typeof navigator.share === "function" && (
            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Share className="w-5 h-5" />
              <span>Share</span>
            </button>
          )}
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <Download className="w-5 h-5" />
          <span>Download</span>
        </button>
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition-colors relative"
        >
          <LinkIcon className="w-5 h-5" />
          <span>Copy Link</span>
          {copied && (
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs rounded px-2 py-1 flex items-center gap-1">
              <Check className="w-4 h-4" /> Copied!
            </span>
          )}
        </button>
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
