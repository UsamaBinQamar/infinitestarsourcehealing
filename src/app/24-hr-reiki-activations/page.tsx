import { Zap } from "lucide-react";

export default function Activations() {
  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="text-center space-y-4 mb-8">
        <Zap className="h-12 w-12 mx-auto text-primary" />
        <h1 className="text-3xl font-bold">24 Hr Reiki Activation Music</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The music activates healing that flows to you as you go throughout
          your day. These energetic compositions continue working long after
          you&apos;ve finished listening.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Stargate (Instrumental) Healing Music Activation
        </h2>
        <div className="relative pb-4">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/infiintestarsourcehealing/stargate-instrumental-reiki-activation&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            className="rounded-md"
          ></iframe>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          This gentle, soothing music is designed to activate healing energies
          within you, helping to restore balance and promote wellbeing. As you
          listen, the healing energy flows through your body, releasing tension
          and bringing a sense of calm. The activation continues working for 24
          hours, supporting your physical and emotional wellness throughout your
          day.
        </p>
      </div>

      <div className="text-center max-w-3xl mx-auto mt-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          More activation music tracks will be added regularly. Check back soon
          for updates.
        </p>
      </div>
    </div>
  );
}
