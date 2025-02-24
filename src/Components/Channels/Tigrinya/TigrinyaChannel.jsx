import React, { useState } from "react";
import { tigrinyabanner, logo } from "../../../assets"; // Make sure to update the banner for Tigrinya
import Videos from "./Videos";
import PlayLists from "./PlayLists";

const TigrinyaChannel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Videos");

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="relative w-full h-40 bg-gray-200">
        {/* Banner Image */}
        <img
          src={tigrinyabanner} // Update the banner image
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />
        {/* Logo */}
        <div className="absolute left-4 bottom-[-30px] xsm:w-20 xsm:h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 bg-white rounded-full border-4 border-white overflow-hidden shadow-lg">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-svh">
        {/* Channel Name Section */}
        <div className="mt-12 flex items-center gap-4 px-12">
          <div className="xsm:w-20 xsm:h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 bg-white rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">መምህር ትግርኛ</h1>{" "}
            {/* Channel name translated */}
            <p className="text-gray-500">@username</p>
            <p className="text-sm text-gray-600">36 ተከታታዮች</p>{" "}
            {/* Subscribers in Tigrinya */}
          </div>
        </div>

        {/* Channel Description */}
        <div className="px-3 mt-2">
          <p className="max-w-[600px]">
            🤗 ይህ ቻናል ትግርኛን በተለይ በመምህራን እንዲቻሉ እና በሚስተር ባህሪ በመጠቀም የትግርኛ ችግኝት
            በተሞላባት ትምህርት ያበረታታል። {/* Description translated */}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-2 text-blue-600 font-medium underline"
          >
            ተጨማሪ እንዲሆን {/* 'More' translated */}
          </button>
        </div>
        <div className="px-3 mt-2">
          <button className="w-full bg-black text-white py-3 rounded-2xl my-4">
            ተከታታይ {/* 'Subscribe' translated */}
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="overflow-x-auto whitespace-nowrap border-b">
        <div className="flex space-x-6 px-4 py-2">
          <button
            className={`px-4 py-2 text-lg font-medium border-b-2 ${
              activeTab === "Videos"
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("Videos")}
          >
            ቪድዮዎች {/* 'Videos' translated */}
          </button>
          <button
            className={`px-4 py-2 text-lg font-medium border-b-2 ${
              activeTab === "Playlists"
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("Playlists")}
          >
            ዝርዝሮች {/* 'Playlists' translated */}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "Videos" && <Videos />}
        {activeTab === "Playlists" && <PlayLists />}
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#00000088] bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 text-xl"
            >
              ✖
            </button>
            <h2 className="text-lg font-bold mb-2">ስለ መምህር ትግርኛ</h2>{" "}
            {/* Modal Title translated */}
            <p className="text-gray-700">
              ይህ ቻናል ትግርኛን በተለይ በመምህራን እንዲቻሉ እና በሚስተር ባህሪ በመጠቀም የትግርኛ ችግኝት
              በተሞላባት ትምህርት ያበረታታል። 🚀 እባኮትን ለአዳዲስ ስለምርት በቀጣይ እንዲቀርበው እባኮትን
              ተመዝግቡ!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TigrinyaChannel;
