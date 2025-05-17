import { Flower2 } from "lucide-react";

const ReikiPage = () => {
  return (
    <div className="space-y-8 px-4 py-8">
      <div className="text-center space-y-4">
        <Flower2 className="h-12 w-12 mx-auto text-primary" />
        <h1 className="text-3xl font-bold">Reiki & Energy Healing</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the gentle power of universal life force energy through
          these healing music tracks
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Angelic Hymn Reiki & Angelic Energy Healing
        </h2>
        <div className="relative pb-4 space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              className="shadow-lg rounded-lg"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/infiintestarsourcehealing/angelic-hymn-reiki-angelic-energy-healing-light-code-infused-deep-healing-meditation-music&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            This beautiful angelic hymn is infused with Reiki energy and angelic
            healing frequencies that work to clear, balance and harmonize your
            energy field. The healing continues to work through your system even
            after you&apos;ve finished listening. It flows for 24 hours and
            connects you with the support of angelic frequencies to guide your
            life.
          </p>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto mt-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          More healing music tracks will be added regularly. Check back soon for
          updates.
        </p>
      </div>
    </div>
  );
};

export default ReikiPage;
