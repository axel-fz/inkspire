'use client'
import React from 'react'
import Link from 'next/link'
import { IoIosHome } from "react-icons/io"
import { FaRegUser } from "react-icons/fa"
import { PiBookmarksLight } from "react-icons/pi"
import { MdWebStories } from "react-icons/md"
import { ImStatsBars2 } from "react-icons/im"
import { FiUsers } from "react-icons/fi"
import { RiLogoutBoxLine } from "react-icons/ri"
import { usePathname, useRouter } from 'next/navigation'

const Sidebar = ({ isOpen }) => {
  const path = usePathname()
  const router = useRouter()

  const Links = [
    { name: "home", icon: <IoIosHome size={24} color={path == "/home" && '#007A55'} /> },
    { name: "library", icon: <PiBookmarksLight size={24} color={path == "/library" && '#007A55'} /> },
    { name: "profile", icon: <FaRegUser size={24} color={path == "/profile" && '#007A55'} /> },
    { name: "stories", icon: <MdWebStories size={24} color={path == "/stories" && '#007A55'} /> },
    { name: "stats", icon: <ImStatsBars2 size={24} color={path == "/stats" && '#007A55'} /> },
  ]

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.replace("/login")
  }

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-60  border-r border-gray-300 px-5 pt-25 transition-transform duration-300 ease-in-out z-20
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <ul>
        {Links.map((link) => (
          <li key={link.name}>
            <Link
              href={`/${link.name}`}
              className="flex dark:hover:text-black items-center gap-3 py-2 px-2 hover:bg-gray-200 rounded-lg cursor-pointer mb-1"
            >
              {link.icon}
              <span className={`capitalize text-md ${path == '/' + link.name && 'text-emerald-800 font-bold'}`}>
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <hr className="border-gray-300 my-10" />

      <Link
        href="/"
        className="flex items-center gap-3 py-2 px-2 dark:hover:text-black  hover:bg-gray-200 rounded-lg cursor-pointer mb-2"
      >
        <FiUsers size={24} />
        <span className="capitalize text-md dark:hover:text-black">Following</span>
      </Link>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 py-2 px-2 dark:hover:text-black hover:bg-gray-200 rounded-lg cursor-pointer w-full text-left"
      >
        <RiLogoutBoxLine size={24} />
        <span className="capitalize text-md">Log out</span>
      </button>
    </div>
  )
}

export default Sidebar
