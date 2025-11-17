'use client'
import React from 'react'
import { IoMenu } from "react-icons/io5"
import { CiSearch } from "react-icons/ci"
import { FaRegEdit, FaRegBell } from "react-icons/fa"
import Image from 'next/image'

const Navbar = ({ setIsOpen }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-90 bg-white h-16 flex justify-between items-center px-5 border-b border-gray-200">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <IoMenu
          onClick={() => setIsOpen(prev => !prev)}
          size={32}
          color="gray"
          className="cursor-pointer"
        />
        <Image src="/image/logo.png" alt="Website logo" width={80} height={80} />

        {/* Search Bar */}
        <div className="flex items-center rounded-full gap-3 bg-gray-200 px-4 py-2">
          <CiSearch size={20} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <FaRegEdit size={20} color="gray" className="cursor-pointer" />
        <h3 className="text-md text-gray-500">Write</h3>
        <FaRegBell size={20} color="black" className="cursor-pointer" />
        <div className="text-white h-10 w-10 bg-emerald-700 rounded-full flex items-center justify-center">
          <h3>MW</h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar
