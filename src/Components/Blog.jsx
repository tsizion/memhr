import React from "react";

const Blog = ({ title, content }) => {
  return (
    <div className="mx-2 flex flex-col text-center text-sm font-body justify-center items-center px-5 py-6 bg-primary text-white font-medium w-full h-[300px] rounded-lg shadow-md hover:bg-primary-dark hover:scale-105 hover:shadow-lg hover:shadow-primary transition-all">
      <h2 className="text-xl font-semibold mb-4 text-left">{title}</h2>
      <p className="text-sm text-gray-200">{content}</p>
    </div>
  );
};

export default Blog;
