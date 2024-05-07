"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLink = ({link}) => {

  const pathName = usePathname()

  return (
    <Link className={`rounded p-1 ${pathName === link.url && "transition ease-in-out duration-300 bg-black text-white hover:text-gray-800"} transition ease-in-out duration-300 hover:bg-white`} href={link.url}>{link.title}</Link>
  )
}

export default NavLink;
