"use client"
import { slugify } from '@/utils'
import { Posts } from '@/utils/data'
import React from 'react'

const page = ({ params }) => {
    const { slug } = params
    const postData = Posts.find(post => slugify(post.title) == slug)
    return (

        <div className="w-4/5 items-center text-md pt-20 px-5 ml-[200px]">
            <h1 className="my-3 font-extrabold text-4xl">{postData.title}</h1>
            <p className="my-3 text-xl">{postData.description}</p>
            <img src={postData.image} alt="imge" width="100%" />
        </div>

    )
}

export default page
