'use client'
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";


import Image from 'next/image';

const Navbar = () => {
  return (
    <div className = " bg-white fixed w-full h-16 flex justify-between items-center px-5 shadow-lg">
       {/* nav left*/} 
       <div className = "flex justify-center items-center gap-6">
       <IoMenu size={40} color="gray" className = "cursor-pointer " />
       <Image
            src="/image/logo.png"
            alt="Website logo"
            width={80}
            height={80}
            
            />
        {/* search bar*/} 
            <div className = "flex item-center rounded-full gap-6 bg-gray-200 px-4 py-2">
                <CiSearch size={20}/>
                <input type="text" placeholder = "search"/>
            </div>
       </div>
       {/*end nav left*/} 
       {/* nav rigth*/} 
       <div className ="flex items-center gap-4">
            <div className = "flex items-center gap-5">
                <FaRegEdit size={20} color="gray" className = "cursor-pointer " />
                <h3 className= "text-xl text-gray-500">write</h3>
                <FaRegBell size={20} color="black" className = "cursor-pointer "/>
                <div className =" text-white h-10 w-10 bg-emerald-700 rounded-full flex items-center                justify-center">
                    <h3>MW</h3>
                </div>
            </div>
       </div>
       {/* end nav rigth*/} 
    </div>
  )
}

export default Navbar