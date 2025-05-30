"use client";
// re_j9mUaqoz_663od5F2FaJ6MY6kH7jwVzP2
import { Check, Download, Link as LinkIcon, Share } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

export default function ShareHealing() {
  const [origin, setOrigin] = useState("");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  // Open modal if ?card=IDX is present
  useEffect(() => {
    const cardParam = searchParams.get("card");
    if (cardParam && !isNaN(Number(cardParam))) {
      setSelectedIdx(Number(cardParam));
    }
  }, [searchParams]);

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
          url: origin + img.src,
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

  // Helper to open modal and set query param
  const openModal = (idx: number) => {
    setSelectedIdx(idx);
    const params = new URLSearchParams(window.location.search);
    params.set("card", idx.toString());
    router.replace(`?${params.toString()}`);
  };

  // Helper to close modal and remove query param
  const closeModal = () => {
    setSelectedIdx(null);
    const params = new URLSearchParams(window.location.search);
    params.delete("card");
    router.replace(`?${params.toString()}`);
  };

  return (
    <Suspense fallback={null}>
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
              className="cursor-pointer rounded-xl shadow-lg flex flex-col bg-white hover:shadow-2xl transition-shadow"
              onClick={() => openModal(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <div className="text-gray-700 text-sm font-semibold mb-1 truncate">
                  {img.alt}
                </div>
                <div className="text-gray-500 text-xs truncate">
                  {img.copyText}
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
            energy. When someone views this image, the healing energy is
            activated and flows to them, supporting their well-being on all
            levels.
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

        {/* Modal */}
        {selectedIdx !== null && images[selectedIdx] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                aria-label="Close"
              >
                ×
              </button>
              <Image
                src={images[selectedIdx].src}
                alt={images[selectedIdx].alt}
                width={500}
                height={500}
                className="w-full h-72 object-cover rounded-xl mb-4"
              />
              <div className="mb-2 text-lg font-bold text-purple-700 text-center">
                {images[selectedIdx].alt}
              </div>
              <div className="mb-4 text-gray-700 text-center">
                {images[selectedIdx].copyText}
              </div>
              <div className="flex justify-center gap-3 mb-4">
                <button
                  onClick={() => handleDownload(images[selectedIdx].src)}
                  className="bg-gray-100 hover:bg-gray-200 text-blue-700 rounded-full p-2 shadow transition-colors"
                  title="Download"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare(images[selectedIdx])}
                  className="bg-gray-100 hover:bg-gray-200 text-blue-700 rounded-full p-2 shadow transition-colors"
                  title="Share"
                >
                  <Share className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    handleCopyLink(images[selectedIdx].src, selectedIdx)
                  }
                  className="bg-gray-100 hover:bg-gray-200 text-pink-700 rounded-full p-2 shadow transition-colors relative"
                  title="Copy text"
                >
                  <LinkIcon className="w-5 h-5" />
                  {copiedIdx === selectedIdx && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs rounded px-2 py-1 flex items-center gap-1">
                      <Check className="w-4 h-4" /> Copied!
                    </span>
                  )}
                </button>
              </div>
              <div className="flex justify-center gap-2 mb-2">
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(origin + images[selectedIdx].src)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 flex items-center justify-center"
                  title="Share on Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                </a>
                {/* Twitter/X */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(origin + images[selectedIdx].src)}&text=${encodeURIComponent(images[selectedIdx].copyText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 hover:bg-blue-500 text-white rounded-full p-2 flex items-center justify-center"
                  title="Share on Twitter"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0 0 24 4.557z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(images[selectedIdx].copyText + " " + origin + images[selectedIdx].src)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 flex items-center justify-center"
                  title="Share on WhatsApp"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.17-1.23-6.16-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                  </svg>
                </a>
                {/* Copy Link Button */}
                {/* <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${origin + images[selectedIdx].src} - ${images[selectedIdx].copyText}`
                    );
                    setCopiedIdx(selectedIdx);
                    setTimeout(() => setCopiedIdx(null), 1200);
                  }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 flex items-center justify-center relative"
                  title="Copy link and text"
                >
                  <LinkIcon className="w-4 h-4" />
                  {copiedIdx === selectedIdx && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs rounded px-2 py-1 flex items-center gap-1">
                      <Check className="w-4 h-4" /> Copied!
                    </span>
                  )}
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </Suspense>
  );
}
