import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link 
      href={href}
      className="block py-1 px-2 text-sm sm:text-base md:text-lg text-[#ADB7BE] rounded hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
