"use client"

import Link from "next/link";
import {useState} from "react";
import Image from "next/image";
import NavLink from "@/components/navLink";
import {motion} from "framer-motion";

const links = [
  {url: "/", title: "Home"},
  {url: "/about", title: "About"},
  {url: "/portfolio", title: "Portfolio"},
  {url: "/contact", title: "Contact"},
];

const socials = [
  {
    id: 0,
    link: "https://linkedin.com/in/artem-skakun",
    pathToImage: "/linkedin.svg",
    altText: "linkedin",
  },
  {
    id: 1,
    link: "https://github.com/tema-skakun",
    pathToImage: "/github.svg",
    altText: "github",
  },
  {
    id: 2,
    link: "https://instagram.com/tema_skakun",
    pathToImage: "/instagram.svg",
    altText: "instagram",
  },
  {
    id: 3,
    link: "https://t.me/tema_skakun",
    pathToImage: "/telegram.svg",
    altText: "telegram",
  },
];

const basePath = "/portfolio_next_js";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
    <div id="navbar" className="h-full flex items-center justify-between ml-9 mr-9 lg:ml-20 lg:mr-20 text-xl">
      {/*LINKS*/}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map(link => (
          <NavLink link={link} key={link.title}/>
        ))}
      </div>
      {/*SOCIAL*/}
      <div className="flex gap-4 w-1/3 items-center justify-end">
        {socials.map(social => (
          <Link key={social.id} href={social.link} target="_blank">
            <Image
              src={basePath + social.pathToImage}
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
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(() => setOpen(!open))}>
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className='w-10 h-1 bg-black rounded'
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
        </button>
        {/*MENU LIST*/}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-white text-black flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map(link => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
