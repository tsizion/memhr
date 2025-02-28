import React, { useState } from "react";
import { englishbanner, logo, logomemeher } from "../../../assets";
import Videos from "./Videos";
import PlayLists from "./PlayLists";

const EnglishChannel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Videos");

  return (
    <div className="w-full font-body">
      {/* Header Section */}
      <div className="relative w-full h-40 bg-gray-200">
        {/* Banner Image */}
        <img
          src={englishbanner}
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />
        {/* Logo */}
        <div className="absolute left-4 bottom-[-30px] xsm:w-20 xsm:h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 bg-white rounded-full border-4 border-white overflow-hidden shadow-lg">
          <img
            src={logomemeher}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className=" max-w-svh">
        {/* Channel Name Section */}
        <div className="mt-12 flex items-center gap-4 px-12">
          <div className="xsm:w-20 xsm:h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 bg-white rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img
              src={logomemeher}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Memher English</h1>
            <p className="text-gray-500">@username</p>
            <p className="text-sm text-gray-600">36 subscribers</p>
          </div>
        </div>

        {/* Channel Description */}
        <div className="px-3 mt-2">
          <p className="max-w-[600px]">
            🤗 This channel is dedicated to helping you learn and improve your
            Amharic skills through fun and engaging content.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-2 text-blue-600 font-medium underline"
          >
            More
          </button>
        </div>
        <div className="px-3 mt-2">
          <button className="w-full bg-black text-white py-3 rounded-2xl my-4">
            Subscribe
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
            Videos
          </button>
          <button
            className={`px-4 py-2 text-lg font-medium border-b-2 ${
              activeTab === "Playlists"
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("Playlists")}
          >
            Playlists
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
            <h2 className="text-lg font-bold mb-2">About Memher English</h2>
            <p className="text-gray-700">
              This channel is dedicated to helping you learn and improve your
              Amharic skills through fun and engaging content. 🚀 Subscribe to
              stay updated with new lessons, interactive content, and more!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnglishChannel;
