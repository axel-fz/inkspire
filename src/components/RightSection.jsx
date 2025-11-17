'use client';
import Link from 'next/link';
import Image from 'next/image';
import { PiStarFourLight } from "react-icons/pi";
import RecommendedTopic from './RecommendedTopic';

const RightSection = () => {
  const posts = [
    {
      authorImg: "/medium_1.png",
      author: "Benjamin Sledge",
      category: "Human Parts",
      title: "It’s Been 20 Years Since We Invaded Iraq. I Am Still in the Desert.",
      date: "Mar 20, 2023",
      cover: "/vercel.svg",
    },
    {
      authorImg: "/med_2.png",
      author: "Benjamin Sledge",
      category: "Human Parts",
      title: "How to Use the Whole Pumpkin",
      date: "1d ago",
      cover: "/vercel.svg",
    },
 
  ];

  const topics = [
    'Productivity', 'Self Improvement', 'Writing', 'Faith', 'Tech', 'Relationships'
  ];

  const people = [
    { name: 'Kim Witten, PhD', bio: 'Helping word nerds do less. Clear the cruft and focus on your craft with the free Hold That Thought newsletter at www.witten.kim', img: '/christopher.jpg' },
    { name: 'Barack Obama', bio: 'Dad, husband, President, citizen. barackobamabooks.com', img: '/john.jpg' },
    { name: 'Jane Doe', bio: 'Writer, designer, lifelong learner', img: '/christopher.jpg' },
  ];

  const footerLinks = [
    'Help', 'Status', 'About', 'Careers', 'Press', 'Blog', 'Privacy', 'Rules', 'Terms', 'Text to speech'
  ];

  return (
    <div className="w-1/5 sticky top-0 border-l border-gray-300 px-4 pt-30 pb-5  flex flex-col gap-5">
      
      {/* ===== Staff Picks ===== */}
      <section>
        <h2 className="mb-2 font-bold text-lg">Staff Picks</h2>

        {posts.map((post, i) => (
          <div key={i} className="mb-3 border-b pb-3 border-gray-200 last:border-none">
            <div className="flex gap-2 items-center justify-center text-sm mb-6">
              <Link href="#">
                <Image src={post.authorImg} alt={post.author} width={20} height={20} className="rounded-sm" />
              </Link>
              <span>
                In <Link href="#" className="font-medium hover:underline">{post.category}</Link> by{" "}
                <Link href="#" className="font-medium hover:underline">{post.author}</Link>
              </span>
            </div>

           
            <Link href="#" className="font-bold block mb-1 hover:underline">{post.title}</Link>

            <div className="flex items-center text-gray-600 text-sm">
              <PiStarFourLight className="text-yellow-600 mr-2" />
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </section>

      {/* ===== Recommended Topics ===== */}
      <section>
        <h2 className="text-center text-md font-bold mb-2">Recommended topics</h2>
        <div className="grid gap-2 grid-cols-2">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="p-2 text-nowrap text-center bg-gray-200 hover:bg-gray-300 rounded-full cursor-pointer text-sm font-medium"
            >
              {topic}
            </div>
          ))}
          <span className="col-span-2 text-center text-gray-400 hover:underline cursor-pointer mt-2">
            See more topics
          </span>
        </div>
      </section>

      {/* ===== Who to Follow ===== */}
      <section>
        <h2 className="font-bold text-lg mb-3">Who to follow</h2>
        <ul className="space-y-4">
          {people.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <Image src={p.img} alt={p.name} width={40} height={40} className="rounded-full" />
              <div className="flex-1">
                <p className="font-semibold text-sm">{p.name}</p>
                <p className="text-sm text-gray-500">{p.bio}</p>
              </div>
              <button className="px-3 py-1 text-sm bg-white text-black border border-black rounded-full hover:bg-gray-800 hover:text-white transition">
                Follow
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-3 text-sm text-sky-600 hover:underline cursor-pointer">
          See more suggestions
        </div>
      </section>

      {/* ===== Reading List ===== */}
      <section className="border-t border-gray-200 pt-4 text-sm">
        <h3 className="font-semibold">Reading list</h3>
        <p className="mt-1 text-gray-600">
          Click the <span className="font-medium">bookmark</span> on any story to easily add it to your reading list or a custom list that you can share.
        </p>
      </section>

      {/* ===== Footer Links ===== */}
      <footer className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500 flex flex-wrap gap-x-2 gap-y-1">
        {footerLinks.map((link, i) => (
          <Link key={i} href="#" className="hover:underline">
            {link}
          </Link>
        ))}
      </footer>
    </div>
  );
};

export default RightSection;
