'use client'
import React, { useState } from 'react'
import { links } from './constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  // for active links
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  const pathname = usePathname();
  return (
    <nav>
      {links.map((link, index) => (
        <Link key={index} href={link.path} className='px-[32px] capitalize hover:text-accent-100'>{link.name}</Link>
      ))}
    </nav>
  )
}

export default Nav
