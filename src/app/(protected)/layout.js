'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightSection from '@/components/RightSection'

export default function Layout({ children }) {
    const [user, setUser] = useState(null)
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(true);

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


            <div className="w-full justify-between flex ">

                
                <div className="flex ">
                    {/* Sidebar */}
                    <Sidebar isOpen={isOpen} />

                    {/* Main content area */}
                    <div
                        className={`transition-all duration-500 flex-1 ${isOpen ? 'pl-[80px] ' : 'pl-[80px] ml-[-150px]'
                            }`}
                    >
                        <Navbar setIsOpen={setIsOpen} />
                        <main > {children}</main>
                    </div>
                </div>


                {/*rigth section */}
                <RightSection />
                {/*end rigth section */}
            </div>

        </>
    )
}


