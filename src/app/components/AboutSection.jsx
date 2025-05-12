'use client'
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA =[
  {
    title:'Skills',
    id:'skills',
    content:(
      <ul className='list-disc pl-2'>
        <li>Design Tools: Figma, Photoshop</li>
        <li>Front-End Development: JavaScript (React, Redux, React Router), TypeScript, Next.js, Tailwind CSS, HTML, CSS</li>
        <li>Back-End Development: Node.js</li>
        <li>Databases & CMS: MySQL, MongoDB, Sanity CMS</li>
        <li>Tools: GitHub, VS Code, Insomnia, Postman, Jira, MongoDB Compass</li>
      </ul>
    )
  },
  {
    title:'Educations',
    id:'educations',
    content:(
      <ul className='list-disc pl-2'>
        <dl>Master of Information Technology
Flinders University, Adelaide(07/2022 – 06/2024)
</dl>
<li>GPA: 6.93/7</li>
<li>Chancellor’s Letter of Commendation</li>
      </ul>
    )
  },
  {
    title:'Certifications',
    id:'certifications',
    content:(
      <ul className='list-disc pl-2'>
        <li>Ailurotech Solutions, Adelaide</li>
        <li>YNW Web and Apps, Adelaide</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Add flex and justify-center for small screens */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/about-image.png"
            alt="about image"
            width={400}
            height={400}
          />
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm a passionate and driven Web Developer with experience in both front-end and back-end development. I recently completed my Master of Information Technology at Flinders University.
          <br/>
          I have experience working with technologies such as React, TypeScript, Next.js, Tailwind CSS, Node.js, and MongoDB. I enjoy creating clean, user-friendly interfaces and thrive in Agile team environments.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("educations")} active={tab === "educations"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Experience
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
