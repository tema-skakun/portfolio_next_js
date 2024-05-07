"use client"

import React, {useRef} from 'react';
import {motion, useInView} from "framer-motion";
import Link from "next/link";

const TimeLine = ({divId, title, items}) => {

  const ref = useRef()
  const isRefInView = useInView(ref, {margin: "-100px"})


  return (
    <div className="flex flex-col gap-12 justify-center pt-23" ref={ref} id={divId}>
      {/*TITLE*/}
      <motion.h2
        initial={{x: "-400px"}}
        animate={isRefInView ? {x: "0px"} : {}}
        transition={{delay: 0.2}}
        className="font-bold text-2xl"
      >
        {title}
      </motion.h2>
      {/*LIST*/}
      <motion.div
        initial={{x: "-900px"}}
        animate={isRefInView ? {x: "0px"} : {}}
        transition={{delay: 0.4}}
        className=""
      >
        {items.map(item => (
          item.id % 2 !== 0 ?
            (
              // LIST ITEM LEFT SIDE
              <div className="flex justify-between h-auto" key={item.id}>
                {/* LEFT */}
                <div className="w-2/5">
                  {/* TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-tl-2xl">
                    {item.title}
                  </div>
                  {/* DESC */}
                  <div className="bg-white p-3 text-sm">
                    {item.description}
                  </div>
                  {/* DATE */}
                  <div className="bg-white p-3 text-red-400 text-sm font-semibold">
                    {item.date}
                  </div>
                  {/* NAME */}
                  <div className="bg-white rounded-b-2xl">
                    <Link href={item.link} target="_blank">
                      <button className="p-3 rounded-bl-2xl rounded-tr-2xl transition ease-in-out duration-300 bg-red-100 text-sm font-semibold w-fit hover:bg-blue-200 hover:ring-1 hover:ring-black">
                        {item.company}
                      </button>
                    </Link>
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/10">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"/>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-2/5"></div>
              </div>
            )
            :
            (
              // LIST ITEM RIGHT SIDE
              <div className="flex justify-between h-auto" key={item.id}>
                {/* LEFT */}
                <div className="w-2/5"></div>
                {/* CENTER */}
                <div className="w-1/10">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"/>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-2/5">
                  {/* TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-tr-2xl">
                    {item.title}
                  </div>
                  {/* DESC */}
                  <div className="bg-white p-3 text-sm">
                    {item.description}
                  </div>
                  {/* DATE */}
                  <div className="bg-white p-3 text-red-400 text-sm font-semibold">
                    {item.date}
                  </div>
                  {/* NAME */}
                  <div className="bg-white rounded-b-2xl">
                    <Link href={item.link} target="_blank">
                      <button className="p-3 rounded-bl-2xl rounded-tr-2xl transition ease-in-out duration-300 bg-red-100 text-sm font-semibold w-fit hover:bg-blue-200 hover:ring-1 hover:ring-black">
                        {item.company}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
        ))}
      </motion.div>
    </div>
  );
};

export default TimeLine;
