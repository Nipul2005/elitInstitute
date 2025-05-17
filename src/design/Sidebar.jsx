import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ setShow }) {
  return (
    <div className="absolute right-0 top-0 w-3/6 h-full bg-primary z-30 px-4 pl-6">
      <div className="sticky top-0">
        <span className="w-full flex justify-end items-center pt-4">
          <i
            className="ri-close-large-line text-white  cursor-pointer text-lg"
            onClick={() => setShow(false)}
          ></i>
        </span>
        <ul className="flex flex-col justify-center items-start gap-2 text-white text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
