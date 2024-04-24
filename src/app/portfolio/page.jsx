"use client"
import {motion, useScroll, useTransform} from "framer-motion";
import React, {useRef} from "react";
import Link from "next/link";
import ScrollArrow from "@/components/scrollArrow";
import Image from "next/image";

const items = [
  {
    id: 0,
    color: "from-purple-300 to-red-300",
    title: "TradeLink Web App",
    desc: " I had the opportunity to contribute to a dynamic and innovative project, leveraging my skills in frontend and backend development to deliver high-quality solutions. Working remotely, I played a pivotal role in developing and enhancing key features of the platform, utilizing a stack comprising Vue.js, Typescript, Node.js, Express, and MongoDB.",
    img: "/TradeLink_app.png",
    link: "https://tradelink.pro/",
  },
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Blog Application",
    desc: "In this project, I ventured into backend web development with Node.js and MongoDB. Through hands-on tasks, I mastered crafting dynamic web applications from the ground up. This journey not only sharpened my backend skills but also deepened my understanding of building robust, scalable apps. With expertise in Node.js and MongoDB, I'm primed for tackling ambitious projects ahead.",
    img: "/node_js_app.png",
    link: "https://blog-node-js-rnkc.onrender.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Application",
    desc: "In this project, I explored Next.js, a cutting-edge JavaScript framework by Vercel, built on React.js. Next.js tackles React developer challenges, offering robust features like server-side rendering (SSR) and static site generation (SSG). This experience revealed Next.js's transformative potential in web app development and optimization.",
    img: "/next_js_app.png",
    link: "https://next-5ky9e2thj-temas-projects-7e652ad5.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "My Social Network",
    desc: "This is a Single Page Application is implemented on the React library, state management is implemented using Redux-Toolkit. " +
      "I used AntDesign as the UI framework. The backend is implemented as a REST API, and I interact with it using the Axios library. In order to view the \"friends\" and \"messages\" pages, you need to log in " +
      "use this: Email: free@samuraijs.com; Password: free",
    img: "/My_Social_Network.png",
    link: "https://tema-skakun.github.io/my-social-network/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Data Charts",
    desc: "Leveraging the power of Angular, TypeScript, HTML, and CSS, I created a feature-rich application that offers intuitive chart display functionalities and efficient data management.",
    img: "/Data_Charts.png",
    link: "https://tema-skakun.github.io/ts-frontend/",
  },
];

const basePath = "/portfolio_next_js";

const PortfolioPage = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({target: ref})
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

  return (
    <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl text-center">
          My Works
          <ScrollArrow className=""/>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{x}} className="flex">
            <div
              className=" h-[calc(100vh-6rem) w-screen flex justify-center bg-gradient-to-r from-blue-300 to-purple-300 items-center text-8xl text-center"/>
            {items.map(item => (
              <div
                className={`h-screen w-screen flex justify-center items-start pt-10 bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col justify-center gap-1 lg:gap-2 xl:gap-6 2xl:gap-8 text-white">
                  <div className="relative h-40 md:h-60 lg:h-80 xl:h-90 2xl:h-120">
                    <Image src={basePath + item.img} alt={item.id} fill className="flex justify-start object-contain"/>
                  </div>
                  <h2 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h2>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-center" target="_blank">
                    <button
                      className="p-2 text-sm md:p-3 md:text-md lg:p-4 lg:text-lg bg-white text-gray-500 hover:bg-black hover:text-gray-200 font-semibold rounded">
                      Visit Website
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            <div
              className="lg:w-[calc(50vw)] w-[calc(100vw-17rem)] flex justify-center bg-red-300 items-center text-8xl text-center"/>
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-10 items-center justify-center text-center">
        <h2 className="text-6xl">
          Do you have a project?
        </h2>
        <div className="relative">
          <motion.svg
            animate={{rotate: 360}}
            transition={{duration: 15, ease: "linear", repeat: Infinity}}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]">
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0 "
              />
            </defs>
            <text fill="#000" className="text-md">
              <textPath xlinkHref="#circlePath" className="">
                •Front-End Development•Back-End Development
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact">
            <p
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            >
              Hire Me
            </p>
          </Link>
        </div>
        <ScrollArrow href="#navbar" className="rotate-180"/>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
