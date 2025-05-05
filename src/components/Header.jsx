import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-auto py-4 bg-white border-b border-primary/90 sticky top-0">
      <nav className="flex sm:justify-around justify-between items-center sm:px-0 px-5">
        <Link to="/">
          <img
            src="/eliteLogo.png"
            alt="Elite Computer Institute"
            className="sm:w-54 w-40"
            loading="lazy"
            title="Elite Computer Institute"
          />
        </Link>
        <ul className="sm:flex gap-8 text-lg hidden ">
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
        <i className="ri-menu-2-line text-black text-2xl sm:hidden cursor-pointer"></i>
        <button className="bg-primary text-white px-6 py-2 rounded-full cursor-pointer hidden sm:block">
          Enroll Now
        </button>
      </nav>
    </header>
  );
}

export default Header;
