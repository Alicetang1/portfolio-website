"use client";
import {React,useState,useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {motion,useInView} from "framer-motion"

const projectData=[
  {
    id:1,
    title:"AI-enhanced To-Do App",
    description:"An AI-enhanced productivity app with task categorization, team collaboration, and planned PDF task extraction and priority recommendations, built with React, Next.js, .NET Core, Azure, and OpenAI API.",
    image:"/images/projects/0.png",
    tag:["All","Web"],
    // gitUrl:"/",
    previewUrl:"https://blotz-task-app.vercel.app/",
  },
  {
    id:2,
    title:"Ecommerce Store",
    description:"A Next.js Ecommerce Store using TypeScript, Tailwindcss, headlessui, and Shopify CMS.",
    image:"/images/projects/1.png",
    tag:["All","Web"],
    // gitUrl:"/",
    previewUrl:"https://next-commerce-alice.vercel.app/",
  },
  {
    id:3,
    title:"Veggify Recipe Blog App",
    description:"A veggify recipe blog app using MongoDB, Express.js, React.js and Node.js.",
    image:"/images/projects/2.png",
    tag:["All","Web"],
    // gitUrl:"/",
    previewUrl:"https://veggify-fronted-app.vercel.app/",
  },
  {
    id:4,
    title:"Corporate Showcase Website",
    description:"A responsive agency website using Next.js 14, React, TypeScript, and Tailwind CSS.",
    image:"/images/projects/3.png",
    tag:["All","Web"],
    // gitUrl:"/",
    previewUrl:"https://agency-yt-7v6c.vercel.app/",
  },
  {
    id:5,
    title:"Weather App",
    description:"A responsive weather website using HTML, CSS and JavaScript.",
    image:"/images/projects/4.png",
    tag:["All","Web"],
    // gitUrl:"/",
    previewUrl:"https://dev-seven-wine.vercel.app/",
  },
  // {
  //   id:6,
  //   title:"Ecommerce Store",
  //   description:"Project 5 description",
  //   image:"/images/projects/5.png",
  //   tag:["All","Web"],
  //   // gitUrl:"/",
  //   previewUrl:"https://next-commerce-alice.vercel.app/",
  // },
  // {
  //   id:7,
  //   title:"React Portfolio Website",
  //   description:"Project 6 description",
  //   image:"/images/projects/6.png",
  //   tag:["All","Web"],
  //   gitUrl:"/",
  //   previewUrl:"/",
  // },
]
const ProjectSection = () => {
  const [tag,setTag]=useState("All");
  const ref=useRef(null);
  const isInView = useInView(ref,{once:true});

  const handleTagChange=(newTag)=>{
    setTag(newTag);
  };
  const filteredProjects=projectData.filter((project)=>
    project.tag.includes(tag)
  );

  const cardVariants={
    initial:{y:50,opacity:0},
    animate:{y:0,opacity:1},
  };

  return (
    <section id="projects"  ref={ref}>
    <h2 className='text-center text-4xl font-bold text-white'>
      My Projects
      </h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
      {/* <ProjectTag 
      onClick={handleTagChange} 
      name="All" 
      active={tag}
      isSelected={tag==="All"}
      />
       <ProjectTag 
      onClick={handleTagChange} 
      name="Web" 
      active={tag}
      isSelected={tag==="Web"}
      />
       <ProjectTag 
      onClick={handleTagChange} 
      name="Mobile" 
      active={tag}
      isSelected={tag==="Mobile"}
      /> */}
    </div>
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
  {filteredProjects.map((project) => (
    <li key={project.id}>
      <ProjectCard
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        previewUrl={project.previewUrl}
      />
    </li>
  ))}
</ul>
    </section>
  )
}

export default ProjectSection