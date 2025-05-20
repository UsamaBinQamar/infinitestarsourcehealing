import { Sparkles } from "lucide-react";

export default function EnergyFlow() {
  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="text-center space-y-4 mb-8">
        <Sparkles className="h-12 w-12 mx-auto text-primary" />
        <h1 className="text-3xl font-bold">Energy Flows</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience different healing energies that support your physical,
          emotional, and spiritual wellbeing.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[50vh] max-w-3xl mx-auto bg-white/50 dark:bg-slate-800/50 p-8 rounded-lg shadow-sm text-center">
        <Sparkles className="h-16 w-16 mx-auto mb-6 text-primary opacity-50" />
        <h2 className="text-xl font-semibold mb-4">Coming Soon!</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-lg">
          We&apos;re currently developing a variety of specific energy flows
          designed to address different aspects of healing and wellbeing. These
          powerful energetic transmissions will be available soon.
        </p>
        <p className="mt-6 text-gray-500 dark:text-gray-400">
          Check back in the coming weeks for our first release.
        </p>
      </div>
    </div>
  );
}
