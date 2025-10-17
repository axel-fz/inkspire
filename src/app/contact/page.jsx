import { copyRight } from "@/date"
import Link from "next/link"

const Page = () => {
  const pageLink = '/'

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen font-sans">
      
      {/* Left Section (Image) */}
      <div className="lg:w-1/2 w-full h-[40vh] lg:h-screen bg-no-repeat bg-[url('/image/alan.jpg')] bg-center bg-cover flex justify-center items-center text-3xl text-white font-bold bg-teal-700">
        <span className="w-4/5 md:w-2/3 font-bold text-center px-2">
          Let's Make Something Memorable
        </span>
      </div>

      {/* Right Section (Form) */}
      <form className="lg:w-1/2 w-full flex flex-col justify-center items-center gap-4 py-8 px-4">
        <input
          className="w-full max-w-md border border-gray-400 rounded-xl py-2 px-3"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="w-full max-w-md border border-gray-400 rounded-xl py-2 px-3"
          type="text"
          placeholder="Your Email"
        />
        <input
          className="w-full max-w-md border border-gray-400 rounded-xl py-2 px-3"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="w-full max-w-md border border-gray-400 rounded-xl py-2 px-3 min-h-[120px]"
          placeholder="Your Message"
        ></textarea>
        <button
          className="w-full max-w-md bg-teal-700 text-white rounded-xl py-2 px-3 hover:bg-teal-800 transition-all duration-300"
          type="submit"
        >
          Send Message
        </button>

        {/* Optional footer text */}
        <p className="text-gray-500 text-sm mt-6">{copyRight}</p>
      </form>
    </div>
  )
}

export default Page
