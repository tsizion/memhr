import React from "react";
import { amharicbanner, YoutubeIcon } from "../../assets";
const youtubeChannels = [
  {
    id: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
    name: "Memher English",
    subscribers: "38 subscribers",
    description:
      "Welcome to Memher English! Your place for learning, growth, and entertainment. 🚀",
    cover: amharicbanner,
  },
  {
    id: "UC29ju8bIPH5as8OGnQzwJyA",
    name: "መምህር አማርኛ",
    subscribers: " 36 subscribers",
    description:
      "🤗 እንኳን ወደ መምህር የአማርኛ ቻናል በደህና መጡ! የመማር፣ የእድገት እና የመዝናኛ ቦታዎ! 🚀",
    cover: amharicbanner,
  },
  {
    id: "UCFbNIlppjAuEX4znoulh0Cw",
    name: "መምህር ትግርኛ",
    subscribers: " 36 subscribers",
    description:
      "🤗 እንኳን ወደ መምህር የትግርኛ ቻናል በደህና መጡ! የመማር፣ የእድገት እና የመዝናኛ ቦታዎ! 🚀",
    cover: amharicbanner,
  },
];

const YoutubeComponent = () => {
  return (
    <>
      <h2 className=" text-2xl  font-body uppercase my-4">
        {" "}
        Join Our Youtube Channels
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {youtubeChannels.map((channel) => (
          <a
            key={channel.id}
            href={`https://www.youtube.com/@memhramharic`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* Image Section */}
            <div className="relative h-40">
              <img
                src={channel.cover}
                alt={channel.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0   bg-opacity-0 hover:bg-[#101010a0] flex items-center justify-center transition duration-300">
                <div className="flex flex-col items-center text-white opacity-0 hover:opacity-100 transition duration-300">
                  <img src={YoutubeIcon} className="w-12" />
                  <span className="text-lg font-semibold">View Channel</span>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-bold">{channel.name}</h3>
              <p className="text-gray-600">{channel.subscribers}</p>
              <p className="text-sm text-gray-500">{channel.description}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default YoutubeComponent;
