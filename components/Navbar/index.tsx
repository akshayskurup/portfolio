'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

const NavBar: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className='w-[25rem] h-8 border border-gray-700 rounded-full flex items-center justify-between p-6 text-sm relative z-100'>
      <p
        className={`cursor-pointer font-semibold ${pathname === '/' ? 'text-teal-600' : ''}`}
        onClick={() => router.push('/')}
      >
        Home
      </p>
      <Link href="https://drive.google.com/file/d/1jt06r0O0xdKFiahWRsxoGF6fvwMsiamQ/view" passHref>
        <p className='cursor-pointer font-semibold'>Resume</p>
      </Link>
      <p
        className={`cursor-pointer font-semibold ${pathname === '/projects' ? 'text-teal-600' : ''}`}
        onClick={() => router.push('/projects')}
      >
        Projects
      </p>
      <p
        className={`cursor-pointer font-semibold ${pathname === '/contact' ? 'text-teal-600' : ''}`}
        onClick={() => router.push('/contact')}
      >
        Contact
      </p>
    </div>
  )
}

export default NavBar
