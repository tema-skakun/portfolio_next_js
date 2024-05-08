import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioItem = ({id, basePath, img, title, desc, link, color}) => {
  return (
    <div
      className={`h-screen w-screen flex justify-center items-start pt-20 bg-gradient-to-r ${color}`}
    >
      <div className="flex flex-col gap-1 lg:gap-2 xl:gap-6 2xl:gap-8 text-white">
        <div className="relative h-40 md:h-60 lg:h-80 xl:h-90 2xl:h-120">
          <Link href={link} target="_blank">
            <Image
              src={basePath + img} alt={id} fill
              className="flex justify-start object-contain transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            />
          </Link>
        </div>
        <h2 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl">
          {title}
        </h2>
        <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
          {desc}
        </p>
        <Link href={link} className="flex justify-center" target="_blank">
          <button
            className="p-2 text-sm md:p-3 md:text-md lg:text-lg transition ease-in-out duration-300 bg-white text-gray-500 hover:bg-black hover:text-gray-200 font-semibold rounded">
            Visit Website
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PortfolioItem;
