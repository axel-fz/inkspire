'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css'

const Page = () => {
    const router = useRouter()
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)

    //  Validation functions
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const isStrongPassword = (password) => {
        // Minimum 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
        const passRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/
        return passRegex.test(password)
    }

    const handleRegister = () => {
        //  Check if all fields are filled
        if (!email || !firstName || !lastName || !password) {
            toast.error('Please fill all fields')
            return
        }

        //  Validate email
        if (!isValidEmail(email)) {
            toast.error('Please enter a valid email address')
            return
        }

        //  Validate password strength
        if (!isStrongPassword(password)) {
            toast.error(
                'Password must be at least 8 characters, include upper and lower case letters, a number, and a special character.'
            )
            return
        }

        //  Passed all checks
        const payload = { firstName, lastName, email, password }
        localStorage.setItem('user', JSON.stringify(payload))

        toast.success('Registered Successfully')
        setTimeout(() => router.push('/home'), 2000)
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4 
                    bg-[url('/register.jpg')] bg-cover bg-center md:bg-none">
            <ToastContainer position="top-center" />

            <div className="flex opacity-83 md:opacity-100 flex-col md:flex-row w-full max-w-4xl shadow-md bg-white rounded-lg overflow-hidden ring ring-emerald-700">
                {/* Left image */}
                <div className="hidden md:flex md:w-1/2 bg-emerald-800 items-center justify-center">
                    <img
                        src="/register.jpg"
                        alt="Register illustration"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Form */}
                <div className="w-full md:w-1/2 p-6 sm:p-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Image
                            src="/image/logo.png"
                            alt="Website logo"
                            width={150}
                            height={150}
                            className="mb-4"
                        />
                        <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
                        <p className="text-gray-600 mb-4">Create your account to get started</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <input
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:ring-emerald-500 focus:border-emerald-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <input
                                type="text"
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:ring-emerald-500 focus:border-emerald-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:ring-emerald-500 focus:border-emerald-500"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:ring-emerald-500 focus:border-emerald-500"
                            />

                            {/* Eye icon toggle */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-[35%] -translate-y-1/2 text-gray-500 text-xs font-medium hover:text-gray-700"
                            >
                                {showPassword ? 'HIDE' : 'SHOW'}
                            </button>


                            {!password || !isStrongPassword(password) ? (
                                <p className="text-xs text-gray-500 mt-1">
                                    Must contain at least 8 characters, 1 uppercase, 1 number, and 1 special symbol.
                                </p>
                            ) : (
                                <p className="text-xs text-green-500 mt-1">Strong password!</p>
                            )}
                        </div>


                        <button
                            type="button"
                            onClick={handleRegister}
                            className="w-full bg-emerald-800 text-white p-2 rounded hover:bg-emerald-700 transition"
                        >
                            Register
                        </button>

                        <p className="text-sm text-gray-600 text-center">
                            Already have an account?
                            <Link href="/login" className="ml-2 text-emerald-600 hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page