import React, { useState } from "react";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

const PlayLists = () => {
  const playlists = [
    { title: "Playlist 1", playlistId: "PL88PvbeqXtDsOPQjB2ENdLQ8fSAqz2GKF" },
    { title: "Playlist 2", playlistId: "PLJtSh2y4dY8Jlsoq65QpdzxKN6XIftXb7" },
    { title: "Playlist 3", playlistId: "PLJWJz1FiYHvfAF9yRuhYjJbZi7yRpD9Af" }, // Add more playlists as needed
  ];

  const [selectedPlaylist, setSelectedPlaylist] = useState(
    playlists[0].playlistId
  );

  return (
    <div className="container flex flex-col items-center p-4 space-y-4 bg-[#f7f7f7] relative">
      {/* Display YouTube Playlist */}
      <div className="mx-auto mt-6 w-full max-w-5xl">
        {playlists.map((playlist, index) => (
          <div key={index} className="my-4">
            <h2 className="text-center text-xl font-bold mb-4">
              {playlist.title}
            </h2>
            <YouTubePlaylist
              apiKey="AIzaSyA3S74hVSIyfY4A0CjYxmLDgoHy9Wa3-Bg"
              playlistId={playlist.playlistId}
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
        ))}
      </div>
    </div>
  );
};

export default PlayLists;
