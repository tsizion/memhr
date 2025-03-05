import React from "react";
import { useNavigate } from "react-router-dom";
import { amharicbanner, YoutubeIcon } from "../../assets";
import { useLanguage } from "../../Context/LanguageContext";

const youtubeChannels = [
  {
    id: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
    name: "Memher English",
    subscribers: "38 subscribers",
    description:
      "Welcome to Memher English! Your place for learning, growth, and entertainment. 🚀",
    cover: amharicbanner,
    path: "/englishChannel",
  },
  {
    id: "UC29ju8bIPH5as8OGnQzwJyA",
    name: "መምህር አማርኛ",
    subscribers: "36 subscribers",
    description:
      "🤗 እንኳን ወደ መምህር የአማርኛ ቻናል በደህና መጡ! የመማር፣ የእድገት እና የመዝናኛ ቦታዎ! 🚀",
    cover: amharicbanner,
    path: "/amharicChannel",
  },
  {
    id: "UCFbNIlppjAuEX4znoulh0Cw",
    name: "መምህር ትግርኛ",
    subscribers: "36 subscribers",
    description: "🤗 እንቋዕ ናብ መምህር ትግርኛ ብደሓን መጻእኩም! ንመምሃሪን ዕብየትን መዘናግዕን ቦታኻ",
    cover: amharicbanner,
    path: "/tigrinyaChannel",
  },
];

const YoutubeComponent = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Join Our Youtube Channels",
    },
    am: {
      title: "የዩቲዩብ ቻናላችንን ይቀላቀሉ",
    },
    ti: {
      title: " ኣብ የዩቲዩብ ቻነላትና ተጸንበሩ",
    },
  };

  return (
    <>
      <h2 className="xsm:text-xs sm:text-sm md:text-lg font-body uppercase my-4">
        {translations[language].title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {youtubeChannels.map((channel) => (
          <div
            key={channel.id}
            onClick={() => navigate(channel.path)}
            className="relative flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
          >
            <div className="relative h-40">
              <img
                src={channel.cover}
                alt={channel.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-opacity-0 hover:bg-[#101010a0] flex items-center justify-center transition duration-300">
                <div className="flex flex-col items-center text-white opacity-0 hover:opacity-100 transition duration-300">
                  <img src={YoutubeIcon} className="w-12" alt="YouTube Icon" />
                  <span className="text-lg font-semibold">View Channel</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="xsm:text-xs sm:text-sm md:text-lg font-bold">
                {channel.name}
              </h3>
              <p className="text-gray-600 xsm:text-xs sm:text-sm md:text-lg">
                {channel.subscribers}
              </p>
              <p className="xsm:text-xs sm:text-xs md:text-lg text-sm text-gray-500">
                {channel.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default YoutubeComponent;
