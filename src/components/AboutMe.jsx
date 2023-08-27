/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {motion} from "framer-motion";
import {fadein} from "../hooks/fadein";
import {Link} from "react-scroll";
import {
  MdEmail,
  MdFacebook,
  MdWhatsapp,
  MdOutlineConnectWithoutContact,
} from "react-icons/md";

const AboutMe = () => {
  return (
    <div id="about" className="py-8 lg:py-24 lg:h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-12 lg:flex-row-reverse lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[550px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadein("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className="flex-1"
          >
            <h2 className="font-semibold bg-gradient-to-r from-sky-400 via-sky-400 to-sky-600 text-transparent bg-clip-text text-5xl">
              About Me
            </h2>
            <h3 className="h3 mb-4 mt-4">
              I'm
              <span className="bg-gradient-to-r from-sky-400 via-sky-400 to-sky-600 text-transparent bg-clip-text">
                Sharmin Sultana
              </span>
              a MERN Stack web developer, loves to create attractive websites
              with user-friendly experiences.
            </h3>
            <p className="mb-4">
              I'm experienced in developing websites that are fully responsive
              to all kinds of devices. I have the ability to write semantic,
              cross-browser compatible, clean code by hand that is re-useable,
              maintainable, and easy to understand. The main areas of my
              expertise are HTML, CSS, Tailwind,Bootstrap, JavaScript , React. I
              also have intermediate knowledge of Next.js Node.js, Express.js &
              MongoDB. So if you are looking for a front-end developer for your
              company, I can be the solution you're looking for. I am very much
              enthusiastic to show you how my experience and skills meet your
              needs. You can send email directly from here or contact with me
              via
            </p>
            <div className="font-semibold">
              <div className="flex gap-2 items-center">
                <MdFacebook className="hover:animate-bounce" /> Sharmin Sultana
              </div>
              <div className="flex gap-2 items-center">
                <MdWhatsapp className="hover:animate-bounce" /> +8801858110146
              </div>
              <div className="flex gap-2 items-center">
                <MdEmail className="hover:animate-bounce" />
                sharminsultana2127@gmail.com
              </div>
            </div>

            <Link to="home" smooth={true}>
              <button className="font-semibold drop-shadow-2xl px-4 py-2 md:px-8 md:py-3 text-lg rounded-full bg-transparent text-white hover:bg-gradient-to-r hover:from-sky-600 hover:via-sky-400 hover:to-sky-500 border-2 border-sky-500 hover:border-sky-400 hover:text-black hover:scale-110 transition duration-200 mt-2 flex items-center gap-1">
                Connect With Me
                <MdOutlineConnectWithoutContact className="hover:animate-bounce" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
