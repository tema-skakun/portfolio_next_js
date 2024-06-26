"use client"

import {motion} from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-auto justify-center items-center">
        {/*IMAGE CONTAINER*/}
        {/*<div className="h-2/3 lg:h-2/3 lg:w-1/2 relative ">*/}
        {/*  <Image src="/5276346312156005958.webp" alt="Artem Skakun" fill className="object-contain"/>*/}
        {/*</div>*/}
        {/*TEXT CONTAINER*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-2xl md:text-4xl font-bold items-center justify-center">
            Hi, my name is Artem Skakun
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 transition ease-in-out duration-300 ring-black bg-white text-black hover:bg-black hover:text-white">
                View My Works
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 transition ease-in-out duration-300 ring-black bg-white text-black hover:bg-black hover:text-white">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
