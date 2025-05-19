import { Zap, Heart, Flower2, Sparkles, Info } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
          Infinite Star Source Healing
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Welcome to a space of healing energy and positive vibes. Connect with
          healing resources, share energy, and find support.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <Link href="/energy-healing">
          <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="p-3 bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Zap className="w-7 h-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Free Energy Healing
              </h3>
              <p className="text-gray-600 flex-grow">
                Receive free energy healing to support your well-being on all
                levels.
              </p>
              <div className="mt-4 text-purple-600 font-medium">
                Learn more →
              </div>
            </div>
          </div>
        </Link>

        <Link href="/share-healing">
          <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="p-3 bg-pink-100 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors">
                <Flower2 className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Share Healing
              </h3>
              <p className="text-gray-600 flex-grow">
                Share healing energy cards with friends, family, and anyone who
                could benefit.
              </p>
              <div className="mt-4 text-pink-600 font-medium">Learn more →</div>
            </div>
          </div>
        </Link>

        <Link href="/24-hour-activations">
          <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Sparkles className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24 Hour Activations
              </h3>
              <p className="text-gray-600 flex-grow">
                Receive 24 hour activations to support your spiritual journey.
              </p>
              <div className="mt-4 text-blue-600 font-medium">Learn more →</div>
            </div>
          </div>
        </Link>
      </div>

      <section className="mt-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              How Healing Energy Works
            </h2>
            <p className="text-gray-700 mb-4">
              Our digital healing cards and resources are energetically charged
              with Reiki healing energy. When someone views or interacts with
              them, the healing energy is activated and flows to them,
              supporting their well-being on all levels.
            </p>
            <p className="text-gray-700">
              The energy works regardless of time or distance. Recipients will
              receive the healing energy simply by viewing the image, which will
              support their highest good.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-white shadow-lg flex items-center justify-center p-4">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 opacity-80 flex items-center justify-center animate-pulse">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                  <Heart className="w-12 h-12 text-pink-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16 text-center">
        <div className="flex items-center justify-center mb-4">
          <Info className="w-5 h-5 text-purple-600 mr-2" />
          <h3 className="text-xl font-semibold text-gray-800">
            Need personal healing support?
          </h3>
        </div>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          If you need personalized healing energy or prayer support, you can
          request it through our dedicated form.
        </p>
        <Link href="/request-healing">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
            Request Healing & Prayer
          </button>
        </Link>
      </div>
    </div>
  );
}
