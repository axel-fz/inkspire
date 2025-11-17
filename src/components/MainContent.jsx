import { Posts } from '@/utils/data'
import React from 'react'
import PostCard from './PostCard'

const MainContent = () => {
 
  

  return (
    <div className="w-4/5 items-center text-md pt-20 px-5 ml-[200px]">
      {Posts.map( post => (
        
        <PostCard key = {post.id} image={post.image} title={post.title} description={post.description} name = {post.author.name} date = {post.date}/>
      ))}


    </div>
  )
}

export default MainContent