"use client"
import { formatName, slugify } from '@/utils'
import { Posts } from '@/utils/data'
import moment from 'moment'
import React, { useState } from 'react'
import { FaComment, FaRegBookmark } from 'react-icons/fa'

const Page = ({ params }) => {
    const { slug } = params
    const postData = Posts.find(post => slugify(post.title) === slug)

    const [comment, setComment] = useState("")
    const [profileName, setProfileName] = useState("")
    const [comments, setComments] = useState([])

    const handleAddComment = () => {
        if (comment.trim() === "" || profileName.trim() === "") return

        setComments(prev => [...prev, { 
            id: Date.now(), 
            text: comment,
            user: {
                name: profileName,
                initials: formatName(profileName)
            }
        }])

        setComment("")
        setProfileName("")
    }

    return (
        <div className="w-4/5 items-center text-md pt-20 px-5 ml-[200px]">
            <h1 className="my-3 font-extrabold text-4xl">{postData.title}</h1>

            <div className="flex items-center gap-5 mt-3 text-gray-500">
                <p className="font-semibold dark:text-white ">{moment(postData.date).fromNow()}</p>
                <FaComment size={18} className = "dark:text-white "/>
                <FaRegBookmark size={18} className = "dark:text-white " />
            </div>

            <p className="my-3 text-xl">{postData.description}</p>

            {/* Profile */}
            <div className="flex mb-5 gap-2 items-center">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#007A55] text-white font-semibold">
                    {formatName(postData.author.name)}
                </div>
                <h1 className="font-medium">{postData.author.name}</h1>
            </div>

            <img src={postData.image} alt="imge" width="100%" />

            {/* ---------------------------------------------------
                    COMMENT SECTION
            --------------------------------------------------- */}
            <div className="mt-10">
                <h3 className="text-xl font-semibold dark:text-white text-gray-500 mb-5 flex items-center gap-2">
                    <FaComment size={18} className = "dark:text-white " /> Comments
                </h3>

                {/* Comment Input */}
                <div className="flex flex-col gap-3 mb-5">

                    {/* NEW: Profile Name Input */}
                    <input
                        type="text"
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                        placeholder="Enter your name..."
                        className="border px-3 py-2 w-full rounded-md outline-none"
                    />

                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write a comment..."
                            className="border px-3 py-2 w-full rounded-md outline-none"
                        />

                        <button
                            onClick={handleAddComment}
                            className="bg-black dark:bg-gray-900 text-white px-4 py-2 rounded-md"
                        >
                            Add
                        </button>
                    </div>
                </div>

                {/* Comments List */}
                <div className="flex flex-col gap-3">
                    {comments.length === 0 && (
                        <p className="text-gray-500 text-sm dark:text-white ">No comments yet.</p>
                    )}

                    {comments.map((c) => (
                        <div 
                            key={c.id}
                            className="p-3 border dark:bg-black rounded-md bg-gray-50"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="h-8 w-8 rounded-full p-2 bg-[#007A55] text-white flex items-center justify-center font-semibold">
                                    {c.user.initials}
                                </div>
                                <p className="font-medium text-sm">{c.user.name}</p>
                            </div>

                            {c.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page
