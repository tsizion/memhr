import React from "react";

const Blog = () => {
  return (
    <div className="mx-2 flex flex-col text-center text-sm font-body justify-center items-center px-5 py-6 bg-primary text-white font-medium w-full h-[300px] rounded-lg shadow-md hover:bg-primary-dark hover:scale-105 hover:shadow-lg hover:shadow-primary transition-all">
      <h2 className="text-xl font-semibold mb-4 text-left">Blog Title</h2>
      <p className="text-sm text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        Sed placerat feugiat mauris, ut viverra justo gravida sit amet. Nulla ac
        justo ac metus fermentum egestas. Integer vehicula cursus erat non
        viverra. Curabitur a augue elit. Phasellus ac ex vitae nunc interdum
        gravida. Sed euismod interdum nisi, eu mollis odio aliquam a.
      </p>
    </div>
  );
};

export default Blog;
