import { RiMenu2Fill } from "react-icons/ri";
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
    <nav
      className="flex shadow-white pl-16 bg-[#1d232a] pr-16 pb-2  mx-auto justify-between items-center font-bold text-slate-200 text-lg"
    >
      <div
        className="mr-5 md:hidden text-3xl"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open === true ? (
          <IoCloseSharp></IoCloseSharp>
        ) : (
          <RiMenu2Fill></RiMenu2Fill>
        )}
      </div>
      <div className="text-3xl font-bold text-red-400">PRICE-OPTIONS</div>
      <ul
        className={`md:flex top-[70px] px-5 py-3 justify-center absolute md:static left-12 duration-1000
        ${open ? "bottom-2":"-top-96"}
        `}
      >
        {routes.map((route) => (
          <LinkNav key={route.id} route={route}></LinkNav>
        ))}
      </ul>
      <div>
        <button className="text-2xl font-bold text-red-400">
          <u>LogIn</u>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
