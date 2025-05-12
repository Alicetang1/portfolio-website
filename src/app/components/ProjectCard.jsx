"use client";
import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <a href={previewUrl} target="_blank" rel="noopener noreferrer">
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative h-52 md:h-72 w-full rounded-t-xl overflow-hidden">
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;