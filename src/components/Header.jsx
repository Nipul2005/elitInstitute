import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-auto py-4 bg-white border-b border-primary/90 sticky top-0">
      <nav className="flex justify-around items-center ">
        <div className="">
          <Link to="/">
            <img
              src="/eliteLogo.png"
              alt="Elite Computer Institute"
              className="sm:w-54 w-40"
            />
          </Link>
        </div>
        <ul className="flex gap-8 text-lg">
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
        <button className="bg-primary text-white px-6 py-2 rounded-full cursor-pointer">
          Enroll Now
        </button>
      </nav>
    </header>
  );
}

export default Header;
