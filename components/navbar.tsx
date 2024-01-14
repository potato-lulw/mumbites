import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './button'
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=' relative max-container flexBetween padding-container py-5 z-50 border '>
        <Link href="/" > 
            <Image  src="/logo-mumbites.png" alt="Logo" width={60} height={60}/>
        </Link>
        <ul className='hidden lg:flex h-full gap-12'>
          {NAV_LINKS.map(link => (
            <Link href={link.href} key={link.key} className='text-grey-50 hover:font-bold mt-2 transition regular-16 flexCenter hover:text-orange-100 '>{link.body}</Link>
          )) }
        </ul>

        <div className='lg:flexCenter hidden'>
            <Button title = "Log In" type='button' icon={<FaRegUser/>} varient='btn_dark_yellow'/>
        </div>
        <FaBars className='lg:hidden flexCenter regular-32'/> 
    </nav>
  )
} 

export default Navbar