import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col w-[88%]">
      <h1 className="text-black">Welcome, እንኳን ደህና መጡ</h1>
      <div className="h-auto  rounded-2xl bg-primary w-full my-5  px-4 py-4">
        <h3 className="mb-1 text-lg xsm:text-[10px] font-body ">መምህር/memher</h3>
        <p className="xsm:text-[8px] sm:text-[10px] md:text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et
        </p>
      </div>
    </div>
  );
};

export default Welcome;
