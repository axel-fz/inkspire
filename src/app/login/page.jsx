'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  // Validation functions
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isStrongPassword = (password) => {
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;
    return passRegex.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (!isStrongPassword(password)) {
      toast.error(
        "Password must be at least 8 chars, include uppercase, lowercase, number, and special character"
      );
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      toast.error("No registered user found. Please register first.");
      return;
    }

    const user = JSON.parse(storedUser);
    if (email === user.email && password === user.password) {
      toast.success("Login successful!");
      setTimeout(() => router.push("/home"), 1000);
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url('/login.jpg')] bg-cover bg-center md:bg-none bg-gray-50 p-4">
      <ToastContainer position="top-center" />

      <div className="flex opacity-83 md:opacity-100 flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden ring ring-emerald-700">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/image/logo.png"
              alt="Website logo"
              width={150}
              height={150}
              className="mb-4 md:mb-8"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
            Login to Your Account
          </h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-medium hover:text-gray-700"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>

              {!password || !isStrongPassword(password) ? (
                <p className="text-xs text-gray-500 mt-1">
                  Must be 8+ chars, include upper/lowercase, number & special char
                </p>
              ) : (
                <p className="text-xs text-green-500 mt-1">Strong password!</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-800 text-white p-2 rounded hover:bg-emerald-700 transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-5">
            Don't have an account?
            <Link
              href="/register"
              className="ml-2 text-emerald-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Right: Image */}
        <div className="hidden md:flex md:w-1/2 bg-emerald-800 items-center justify-center">
          <img
            src="login.jpg"
            alt="Login illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
