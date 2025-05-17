import { Button } from "@/components/ui/button";
// import gregoryImage from "../assets/gregory.jpg";
// import rachelImage from "../assets/rachel.jpg";
export default function Contributors() {
  return (
    <div className="min-h-screen bg-background">
      {" "}
      <main className="container mx-auto px-4 py-8">
        {" "}
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
          {" "}
          Our Contributors{" "}
        </h1>{" "}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {" "}
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-purple-200 flex flex-col md:flex-row gap-6">
            {" "}
            <div className="w-36 h-36 mx-auto md:mx-0 rounded-full overflow-hidden">
              {" "}
              {/* <Image
                width={100}
                height={100}
                src={gregoryImage}
                alt="Gregory L"
                className="w-full h-full object-cover"
              /> */}
            </div>{" "}
            <div className="flex-1">
              {" "}
              <h2 className="text-2xl font-semibold text-purple-800">
                Gregory L
              </h2>{" "}
              <div className="mt-2 text-purple-700 opacity-80">
                {" "}
                <p>
                  Energy Healer specializing in spiritual healing and energy
                  work.
                </p>{" "}
                <p className="mt-2">
                  Gregory brings years of experience in channeling Reiki energy
                  and creating powerful healing connections with clients around
                  the world.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-pink-200 flex flex-col md:flex-row gap-6">
            {" "}
            <div className="w-36 h-36 mx-auto md:mx-0 rounded-full overflow-hidden">
              {" "}
              {/* <Image
                width={100}
                height={100}
                src={rachelImage}
                alt="Rachel Smith"
                className="w-full h-full object-cover"
              />{" "} */}
            </div>{" "}
            <div className="flex-1">
              {" "}
              <h2 className="text-2xl font-semibold text-pink-800">
                Rachel Smith
              </h2>{" "}
              <div className="mt-2 text-pink-700 opacity-80">
                {" "}
                <p>
                  Healing Practitioner expert in holistic healing and wellness.
                </p>{" "}
                <p className="mt-2">
                  Rachel combines traditional healing modalities with intuitive
                  practices to create personalized healing experiences for each
                  individual.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-12 text-center">
          {" "}
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            {" "}
            Apply to Become a Contributor{" "}
          </Button>{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
}
