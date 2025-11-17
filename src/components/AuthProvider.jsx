'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const router = useRouter()

   /*  useEffect(() => {
        //getting user data from the local storage || check if user exist
        const userGotten = JSON.parse(localStorage.getItem('user'))
        if (userGotten || userGotten?.email) {
            router.replace('/home') // redirect client-side
        } else {
            setUser(userGotten)
        }
    }, [router]) */
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthProvider
