'use client'
import Link from 'next/link'
import logo from "@/assets/logo.png";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {ArrowRightToSquare} from '@gravity-ui/icons';
const Navbar = () => {
    const pathName = usePathname();
    console.log(pathName);
    
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex="0" role="button" className="$$btn $$btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href="/">Home</Link></li>
        <li>
         <Link href="/books">Books</Link>
        </li>
        <li><Link href="/profile">My Profile</Link></li>
      </ul>
    </div>
    <Link href="/" className="flex items-center text-xl">
      <Image src={logo} alt="Boi Bondu Logo" width={60} height={60} />
      <span className="font-bold text-[#132f52]">
            Boi <span className="text-[#538c48]">Bondu</span>
      </span>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium">
      <li><Link className={pathName === '/home' ? 'text-primary underline' : ''} href="/">Home</Link></li>
      <li>
       <Link className={pathName === '/books' ? 'text-primary underline' : ''} href="/books">Books</Link>
      </li>
      <li><Link className={pathName === '/profile' ? 'text-primary underline' : ''} href="/profile">My Profile</Link></li>
    </ul>
  </div>
  <div className="navbar-end">

    <Link href="/login">
    <button className="btn rounded-full bg-transparent border border-[#538c48] text-[#538c48] hover:bg-[#538c48]  hover:text-white transition-colors duration-300">
        <ArrowRightToSquare />
        <span >Login</span>
    </button>
    </Link>
  </div>
</div>
    </div>
  )
}

export default Navbar
