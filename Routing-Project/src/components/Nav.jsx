import React from "react";

import { Link, Links, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full ">
      <nav className="w-full h-12 bg-[#000020] flex justify-center items-center gap-20">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-bold   ${isActive ? "text-sky-300 transition duration-300 ease-in-out" : "text-white"} `
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-bold   ${isActive ? "text-sky-300 transition duration-300 ease-in-out" : "text-white"} `
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-bold   ${isActive ? "text-sky-300 transition duration-300 ease-in-out" : "text-white"} `
          }
        >
          Contact
        </NavLink>




         <NavLink
          to="/product"
          className={({ isActive }) =>
            `font-bold   ${isActive ? "text-sky-300 transition duration-300 ease-in-out" : "text-white"} `
          }
        >
          Product
        </NavLink>





      </nav>
    </div>
  );
};

export default Nav;
