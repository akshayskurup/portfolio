'use client'
import Link from 'next/link';
import { CardHoverEffect } from '../../components/UI/CardHoverEffect'

import NavBar from "@/components/Navbar";


function ProjectsPage() {
  const data = [{
    id: 1,
    title: "Nexus",
    description: `Developed and implemented features for a social media
website, including post creation, friend chat, audio and
video calls, payment management, and an AI assistant`,
    icon: '/Nexus.svg',
    link: "https://github.com/akshayskurup/Nexus",
    tags: ['React', 'TailwindCss', 'Redux', 'TypeScript', 'Gemini', 'NodeJs', 'Express', 'MongoDB', 'RazorPay'],
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  }, {
    id: 2,
    title: "Pro Players",
    description: `Developed and implemented features for an e-commerce
website, including user management, product
management, shopping cart, wishlist, order processing, and
online payment integration`,
    icon: '/ProPlayers.png',
    link: "https://github.com/akshayskurup/proPlayers-Ecommerce/tree/main",
    tags: ['HTML', 'CSS', 'JavaScript', 'EJS', 'NodeJs', 'Express', 'MongoDB', 'RazorPay'],
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  }
  ];
  return (
    <>
      <div className='flex items-center justify-center p-4 md:p-6 sticky top-0 bg-[#18181B]'>
        <NavBar />
      </div>
      <div className="flex flex-col items-center px-4 md:px-6">
        <div className="mt-10 h-44 w-full max-w-[45rem]">
          <p className='text-2xl md:text-4xl text-white font-bold'>Projects</p>
          <p className='font-medium text-gray-400 mt-8'>Here is a showcase of some of my projects that I made.
            They can be found on my <Link href={"https://github.com/akshayskurup"} target='_blank'><span className='bg-purple-600 text-white cursor-pointer'>Github !</span></Link> including my hobby projects.</p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 ">
            {data && data.map((d) => (
              <CardHoverEffect key={d.id} data={d} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
