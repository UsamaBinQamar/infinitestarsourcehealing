import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Flower2, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export default function EnergyHealing() {
  const healingTypes = [
    {
      title: "Reiki & Energy Healing",
      description:
        "Experience the gentle power of universal life energy through Reiki healing. This traditional Japanese technique promotes relaxation, stress reduction and supports natural healing processes.",
      icon: Flower2,
      href: "/reiki",
      color: "bg-pink-100 dark:bg-pink-900",
      textColor: "text-pink-800 dark:text-pink-200",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    {
      title: "Energy Flows (Coming Soon)",
      description:
        "Experience different healing energies that support your physical, emotional, and spiritual wellbeing.",
      icon: Zap,
      href: "/energy-flow",
      color: "bg-purple-100 dark:bg-purple-900",
      textColor: "text-purple-800 dark:text-purple-200",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      title: "Healing Activation Music",
      description:
        "The music activates healing that flows to you as you go throughout your day. These energy-infused compositions continue working long after you've finished listening.",
      icon: Sparkles,
      href: "/activations",
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-800 dark:text-blue-200",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
  ];

  return (
    <div className="px-4 py-8 max-w-screen-xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Energy Healing</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Experience Reiki and energy healing transmitted through the app and
          through the music to promote wellness, balance, and spiritual growth.
        </p>
      </div>

      <div className="grid gap-8 max-w-3xl mx-auto">
        {healingTypes.map((item, index) => (
          <Card
            key={index}
            className={`${item.borderColor} border-2 overflow-hidden hover:shadow-lg transition-shadow`}
          >
            <div className="flex flex-col md:flex-row">
              <div
                className={`${item.color} p-6 flex items-center justify-center md:w-1/4`}
              >
                <item.icon className={`w-16 h-16 ${item.textColor}`} />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={item.href}>
                    <Button>Explore {item.title}</Button>
                  </Link>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg shadow-sm max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-3">About Energy Healing</h2>
        <p className="mb-4">
          Energy healing is a holistic practice that works with the subtle
          energy systems of the body to promote health and wellbeing. These
          practices help restore balance and harmony throughout your entire
          being.
        </p>
        <p>
          At Infinite Star Source Healing, we offer multiple approaches to
          energy work, each with its own unique benefits. We invite you to
          explore these different modalities and discover which resonates most
          deeply with your personal healing journey.
        </p>
      </div>
    </div>
  );
}
