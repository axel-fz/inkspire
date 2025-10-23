'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import MainContent from '@/components/MainContent'
import RightSection from '@/components/RightSection'

const Page = () => {
    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(() => {
        //getting user data from the local storage || check if user exist
        const userGotten = JSON.parse(localStorage.getItem('user'))
        if (!userGotten || !userGotten.email) {
            router.replace('/login') // redirect client-side
        } else {
            setUser(userGotten)
        }
    }, [router])
    // logout a user 
    const handleLogout = () => {
       // localStorage.removeItem('user')
        router.replace('/login')
    }
    if (!user) {
        // Optional loading screen before redirect
        return (
            <div className="h-screen flex items-center 
      justify-center text-white text-2xl">
                Loading...
            </div>
        )
    }
    return (
        <>
            <Navbar />
            <div className="w-full flex ">
              {/*side bar */}
              <Sidebar />
              {/*end side bar */}
              {/*main content */}
              <MainContent />
              {/*end main content */}
              {/*rigth section */}
              <RightSection />
              {/*end rigth section */}
            </div>
        </>
    )
}

export default Page
