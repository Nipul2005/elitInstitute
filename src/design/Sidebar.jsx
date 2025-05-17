import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar({ setShow }) {
  return (
    <div className="fixed right-0 top-0 w-full bg-primary z-30 px-4 pl-6 py-10">
      <i
        className="ri-close-large-line text-white cursor-pointer text-lg fixed top-4 right-6"
        onClick={() => setShow(false)}
      ></i>
      <ul className="flex flex-col justify-center items-start gap-3 text-white text-lg">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-8 decoration-2 "
              : "text-white"
          }
        >
          <li className="transition-all duration-300 ease-in-out">Home</li>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-8 decoration-2"
              : "text-white"
          }
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to={"/courses"}
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-8 decoration-2"
              : "text-white"
          }
        >
          <li>Courses</li>
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8 decoration-2" : ""
          }
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
