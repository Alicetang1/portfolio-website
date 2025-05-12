import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white bg-purple-500 border-purple-500"
    : "text-[#ABD7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`
        ${buttonStyle}
        rounded-full border-2
        px-4 md:px-6 py-2 md:py-3
        text-sm md:text-base
        cursor-pointer
        transition-all duration-200
        active:scale-95
      `}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
