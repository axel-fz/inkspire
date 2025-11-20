"use client"
import React from "react";
import moment from "moment";
import { FaComment, FaRegBookmark } from "react-icons/fa6";
import Link from "next/link";
import { formatName, slugify } from "@/utils";

const PostCard = ({ image, description, title, name, date }) => {
    const url = slugify(title)
    return (
    <div className="flex gap-5 justify-between min-w-[800px] m-5 py-5 border-b border-gray-300">
      <div className="flex-1">
        <div className="flex-col w-full">
          {/* Profile */}
          <div className="flex gap-2 items-center">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#007A55] text-white font-semibold">
              {formatName(name)}
            </div>
            <h1 className="font-medium">{name}</h1>
          </div>

          {/* Post Content */}
          <Link href={`/posts/${url}`} className="my-3 font-bold text-2xl w-[500px]">{title}</Link>
          <p className="text-gray-600 dark:text-white text-wrap w-[400px]">{description}</p>

          {/* Post Meta */}
          <div className="flex dark:text-white items-center gap-5 mt-3 text-gray-500">
            <p className="font-semibold ">{moment(date).fromNow()}</p>
            <FaComment size={18} color="gray" />
            <FaRegBookmark size={18} color="gray" />
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-[200px] h-[200px] overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default PostCard;
