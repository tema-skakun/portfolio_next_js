"use client"

import Link from "next/link";
import {useState, useEffect} from "react";
import Image from "next/image";
import NavLink from "@/components/navLink";
import {motion} from "framer-motion";
import { LINKS, SOCIALS, BASE_PATH } from "@/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div
      id="navbar"
      className={`h-full flex items-center justify-between ml-9 mr-9 lg:ml-20 lg:mr-20 text-xl ${showNavbar ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}`}>
      {/*LINKS*/}
      <div className="hidden md:flex gap-4 w-1/3">
        {LINKS.map((link) => (
          <NavLink link={link} key={link.title}/>
        ))}
      </div>
      {/*SOCIAL*/}
      <div className="flex gap-4 w-1/3 items-center justify-end">
        {SOCIALS.map((social) => (
          <Link key={social.id} href={social.link} target="_blank">
            <Image
              src={BASE_PATH + social.pathToImage}
              alt={social.altText}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
      {/*RESPONSIVE MENU*/}
      <div className="md:hidden">
        {/*MENU BUTTON*/}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          />
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
        </button>
        {/*MENU LIST*/}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-white text-black flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {LINKS.map((link) => (
              <motion.div variants={listItemVariants} key={link.id}>
                <Link href={link.url}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
