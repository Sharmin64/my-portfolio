import React from "react";
import logo from "/logoS.png";
import {Link} from "react-scroll";
import {MdWorkHistory} from "react-icons/md";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-color font-primary font-semibold">
            <a href="">
              <img
                src={logo}
                alt="logo"
                className="w-16 rounded-full hover:scale-150 transition duration-300"
              />
            </a>
            <h1>harmin Sultana</h1>
          </div>
          <Link to="projects" smooth={true}>
            <button className="font-semibold drop-shadow-2xl px-4 py-2 md:px-8 md:py-3 text-lg rounded-full bg-transparent text-white hover:bg-gradient-to-r hover:from-sky-600 hover:via-sky-400 hover:to-sky-500 border-2 border-sky-500 hover:border-sky-400 hover:text-black hover:scale-110 transition duration-200 flex items-center gap-2">
              See My Work
              <MdWorkHistory />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
