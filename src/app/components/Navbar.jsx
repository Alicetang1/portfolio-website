"use client";
import React from 'react';
import Link from "next/link";
import NavLink from './NavLink';
import Image from 'next/image';

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" }
];

const Navbar = () => {
  return (
    <nav className='fixed border border-[#333353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex items-center justify-between px-4 sm:px-6 py-2 sm:py-4'>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-12 sm:w-20 md:w-24 lg:w-32">
            <Image
              src="/images/logo.png"
              alt="logo image"
              width={200}
              height={200}
            />
          </div>
        </Link>

        <div className='flex space-x-2 sm:space-x-4'>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
