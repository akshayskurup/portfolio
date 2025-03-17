
import NavBar from "@/components/Navbar";
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function ContactPage() {
  return (
    <>
      <div className='flex items-center justify-center p-4 md:p-6'>
        <NavBar />
      </div>
      <div className="flex flex-col items-center px-4 md:px-6">
      <div className="mt-10 h-44 w-full max-w-[45rem]">
          <p className='text-white text-2xl md:text-4xl font-bold'>Contact</p>
          <div className='mt-8'>
           <p className='md:text-xl text-gray-400 font-medium'>
            The fastest way to reach me is 
            through <a href="https://wa.me/917558872083"
            target="_blank"><span className='bg-green-400 text-black p-1 rounded-sm cursor-pointer hover:underline '>WhatsApp</span></a>.</p>
            <p className='md:text-xl text-gray-400 font-medium mt-5'>An <a href='mailto:akshayskurup@gmail.com'><span className='bg-purple-600 text-white  rounded-sm cursor-pointer hover:underline '>email</span></a> works as well.</p>
            <div className="flex gap-10 mt-14">
          <a
            href="https://github.com/akshayskurup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/akshay-s-kurup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-500"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ContactPage