import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import LinkNav from "../LinkNav/LinkNav";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About Us", id: 2 },
    { path: "/services", name: "Our Services", id: 3 },
    { path: "/contact", name: "Contact Us", id: 4 },
    { path: "*", name: "Not Found", id: 5 },
  ];

  return (
    <nav className="flex shadow-white pl-16 bg-[#1d232a] pr-16 pb-2  mx-auto justify-between items-center font-bold text-slate-200 text-lg">
      <div
        className="md:hidden mr-[-130px] ml-[-20px] text-3xl"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open === true ? (
          <IoCloseSharp></IoCloseSharp>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>
      <h4 class="bg-gradient-to-b from-blue-500 via-green-400 to-purple-500 bg-clip-text text-transparent text-3xl">
        PRICE-OPTIONS
      </h4>

      <ul
        className={`md:flex top-[70px] px-5 py-3 justify-center absolute md:static left-12 duration-1000
        ${open ? "bottom-2" : "-top-96"}
        `}
      >
        {routes.map((route) => (
          <LinkNav key={route.id} route={route}></LinkNav>
        ))}
      </ul>
      <div>
        <button className="bg-gradient-to-b from-blue-500 via-green-400 to-purple-500 bg-clip-text text-transparent text-3xl">
          <u>LogIn</u>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
