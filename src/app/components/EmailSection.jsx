"use client"
import React from 'react';
import emailjs from '@emailjs/browser';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from 'next/image';

const EmailSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID; 
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID; 
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; 

    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      .then((result) => {
        console.log('Message sent successfully!', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.error('Failed to send message:', error.text);
        alert('Failed to send message, please try again later.');
      });

    e.target.reset(); 
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div className=' h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE]'>
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
        <a
  href="https://www.github.com/Alicetang1"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image src={GithubIcon} alt="Github Icon" />
</a>

 <a
  href="https://www.linkedin.com/in/jieqiong-tang "
  target="_blank"
  rel="noopener noreferrer"
>
  <Image src={LinkedinIcon} alt="Linkedin Icon" />
</a>
</div>
<div>

<form className='flex flex-col' onSubmit={handleSubmit}>

  <div className='mb-6'>
    <label htmlFor='email' className='text-white block text-sm font-medium'>Your email</label>
    <input
      name="user_email"
      type="email"
      id="email"
      required
      className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
      placeholder="jacob@google.com"
    />
  </div>
  <div className='mb-6'>
    <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
    <input
      name="subject"
      type="text"
      id="subject"
      required
      className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block mb-2 w-full p-2.5'
      placeholder="Just saying hi"
    />
  </div>
  <div className='mb-6'>
    <label htmlFor="message" className='text-white block text-sm mb-2 font-medium'>Message</label>
    <textarea
      name="message"
      id="message"
      required
      className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block mb-2 w-full p-2.5'
      placeholder="Let's talk about..."
    />
  </div>
  <button
    type='submit'
    className='bg-purple-500 border border-gray-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
    Send Message
  </button>
</form>

      </div>
    </section>
  );
};

export default EmailSection;
