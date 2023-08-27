import React from "react";
import logos from "/logoS.png";
import {BsFacebook, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import {Link} from "react-scroll";

const Footer = () => {
  return (
    <div className="mb-36">
      <footer className="footer p-10  text-base-content">
        <div>
          <img
            src={logos}
            alt=""
            className="w-16 rounded-full hover:scale-150 transition duration-300"
          />
          <span className="uppercase text-xl text-sky-500">Shamin Sultana</span>
        </div>
        <div>
          <span className="footer-title">Detail</span>
          <Link
            to="about"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center  hover:underline transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl"
          >
            About Me
          </Link>
          <Link
            to="services"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center  hover:underline transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl"
          >
            Services
          </Link>
          <Link
            to="projects"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center  hover:underline transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl"
          >
            Projects
          </Link>
          <Link
            to="contact"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center  hover:underline transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl"
          >
            ContactMe
          </Link>
        </div>
        <div>
          <span className="footer-title">Social Contact</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/sharmin.liza.5245hibnrrt">
              <BsFacebook className="hover:bg-sky-400 hover:rounded-full transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl" />
            </a>
            <a href="https://github.com/Sharmin64">
              <BsGithub className="hover:bg-sky-400 hover:rounded-full transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl" />
            </a>
            <a href="https://www.instagram.com/sharmin.liza.5245hibnrrt">
              <BsInstagram className="hover:bg-sky-400 hover:rounded-full transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/sarmin-sultana-34a385280">
              <BsLinkedin className="hover:bg-sky-400 hover:rounded-full transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl" />
            </a>
          </div>
        </div>
      </footer>
      <div className=" text-center p-4 bg-transparent text-base-content font-semibold text-2xl font-secondary">
        <div>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
