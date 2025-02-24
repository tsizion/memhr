import React from "react";

const Videos = () => {
  const videoIds = [
    "nau9PQhYpbk&t",
    "Vt6A4U7vDyk",
    "QKnXRJLNccw&",
    "sV1ocjMgI1w",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {videoIds.map((id, index) => (
        <div
          key={index}
          className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Videos;
