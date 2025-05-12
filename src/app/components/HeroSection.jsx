'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div 
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:0.5}} 
        className="col-span-8 place-self-center text-center  justify-between">
          <h1 
          className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I'm {" "}
            </span>
            <br/>
            <TypeAnimation
              sequence={[
                'Alice',
                1000, 
                'Web Developer',
                1000,
                'Mobile Developer',
                1000,
                'UI/UX Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
          <a href="#contact">
  <button 
  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full border mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
    Hire Me
  </button>
</a>

<a href="AliceTang-Resume.pdf" download>
  <button 
  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full border bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full py-2 px-2'>
      Download CV
    </span>
  </button>
</a>

          </div>
        </motion.div>

        {/* Image section */}
        <motion.div initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className='col-span-12 sm:col-span-4 place-self-center mt-4 lg:mt-0 flex justify-center'>
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src='/images/hero-image.png'
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
