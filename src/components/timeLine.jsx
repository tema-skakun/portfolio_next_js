"use client"

import React, {useRef} from 'react';
import {motion, useInView} from "framer-motion";

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
                  <div className="bg-white p-3 flex justify-center font-semibold rounded-b-lg rounded-s-lg">{item.title}</div>
                  {/* DESC */}
                  <div className="p-3 text-sm italic">{item.description}</div>
                  {/* DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">{item.date}</div>
                  {/* NAME */}
                  <div className="p-1 m-3 rounded bg-red-100 text-sm font-semibold w-fit">{item.company}</div>
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
                  <div className="bg-white p-3 flex justify-center font-semibold rounded-r-lg rounded-bl-lg items-end">{item.title}</div>
                  {/* DESC */}
                  <div className="p-3 text-sm italic">{item.description}</div>
                  {/* DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">{item.date}</div>
                  {/* NAME */}
                  <div className="p-1 m-3 rounded bg-red-100 text-sm font-semibold w-fit">{item.company}</div>
                </div>
              </div>
            )
        ))}
      </motion.div>
    </div>
  );
};

export default TimeLine;
