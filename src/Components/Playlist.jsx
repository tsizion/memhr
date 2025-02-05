import React from "react";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";
const Playlist = () => {
  return (
    <div>
      {" "}
      <div className="mx-2 flex text-center text-sm font-body justify-center items-center px-5 py-6 bg-primary text-white font-medium w-full h-[300px] rounded-lg shadow-md hover:bg-primary-dark hover:scale-105 hover:shadow-lg hover:shadow-primary transition-all">
        <h2 className="text-xl font-semibold mb-4 text-left">
          YouTube Playlist
        </h2>
        <YouTubePlaylist
          apiKey="AIzaSyA3S74hVSIyfY4A0CjYxmLDgoHy9Wa3-Bg"
          playlistId="PL88PvbeqXtDsOPQjB2ENdLQ8fSAqz2GKF"
          columnCount="auto"
          columnWidth="230"
          gapSize={24}
          customStyles={{
            galleryContainerStyle: {
              borderRadius: "8px",
              overflow: "hidden",
            },
            videoImageStyle: {
              borderRadius: "5px",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Playlist;
