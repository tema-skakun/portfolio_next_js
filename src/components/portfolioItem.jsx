import React from "react";
import { BASE_PATH } from "@/constants";

const PortfolioItem = ({ id, img, title, desc, link, color }) => {
  return (
    <div
      className={`h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-r ${color}`}
      key={id}
    >
      <div className="w-11/12 md:w-8/12 lg:w-4/12 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <img
          alt={`${title} image`}
          src={`${BASE_PATH}/${img}`}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <p className="text-gray-600 mt-2">{desc}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
