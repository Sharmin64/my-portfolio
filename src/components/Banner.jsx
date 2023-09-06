/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect, useState} from "react";
import liza from "../assets/projects/BannerMe-removebg.png";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsDownload,
} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
//import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import {fadein} from "../hooks/fadein";
import TextTransition, {presets} from "react-text-transition";

const TEXTS = [
  "MERN Stack Developer",
  "React.JS Developer",
  "Front End Developer",
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2500);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section id="home" className="mt-24 flex items-center">
      <div className="container mx-auto mt-24 lg:mt-0">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h3
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="text-xl"
            >
              Hey There, I'm
            </motion.h3>
            <motion.h1
              variants={fadein("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="text-[55px] font-bold leading-[1] lg:text-[110px] bg-gradient-to-r from-sky-400 via-sky-400 to-sky-600 text-transparent bg-clip-text uppercase"
            >
              Sharmin Sultana
            </motion.h1>
            <motion.div
              variants={fadein("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <div className="lg:flex">
                <span className="mr-4">I'm a</span>
                {/*<TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    2000,
                    "React.JS Developer",
                    2000,
                    "Front End Developer",
                    2000,
                  ]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                  className="text-color"
                />*/}
                <span className="text-sky-400 flex items-center justify-center md:text-4xl lg:text-[60px]">
                  <TextTransition springConfig={presets.gentle}>
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>
                </span>
              </div>
              <motion.div
                variants={fadein("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                className="flex gap-x-8 max-w-max mx-auto lg:mx-0 mt-8 text-4xl"
              >
                <a
                  target="_blank"
                  href="https://www.facebook.com/sharmin.liza.5245hibnrrt"
                >
                  <BsFacebook className="hover:bg-sky-400 hover:rounded-full transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl" />
                </a>
                <a target="_blank" href="https://github.com/Sharmin64">
                  <BsGithub className="hover:bg-sky-400 hover:rounded-full transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/sharmin.liza.5245hibnrrt"
                >
                  <BsInstagram className="hover:bg-sky-400 hover:rounded-full transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/sarmin-sultana-34a385280"
                >
                  <BsLinkedin className="hover:bg-sky-400 hover:rounded-full transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl" />
                </a>
                <a target="_blank" href="mailto:sharminsultana2127@gmail.com">
                  <SiGmail className="hover:bg-sky-400 hover:rounded-full transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl" />
                </a>
              </motion.div>
              <motion.div
                variants={fadein("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                className="max-w-max mx-auto  inline-flex gap-4 mt-6 lg:mx-0"
              >
                <a href="/Sharmin_resume.pdf" target="_blank">
                  <button className="flex items-center justify-center gap-2 font-semibold drop-shadow-2xl px-4 py-2 md:px-8 md:py-3 text-lg rounded-full bg-transparent text-white hover:bg-gradient-to-r hover:from-sky-600 hover:via-sky-400 hover:to-sky-500 border-2 border-sky-500 hover:border-sky-400 hover:text-black hover:scale-110 transition duration-200">
                    Resume
                    <BsDownload className="hover:animate-bounce transition-all" />
                  </button>
                </a>
                <a href="/CV_Sharmin_Sultana.pdf" target="_blank">
                  <button className="flex items-center justify-center gap-2 font-semibold drop-shadow-2xl px-4 py-2 md:px-8 md:py-3 text-lg rounded-full bg-transparent text-white hover:bg-gradient-to-r hover:from-sky-600 hover:via-sky-400 hover:to-sky-500 border-2 border-sky-500 hover:border-sky-400 hover:text-black hover:scale-110 transition duration-200">
                    CV
                    <BsDownload className="hover:animate-bounce transition-all" />
                  </button>
                </a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            variants={fadein("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className="hidden lg:flex flex-1 mx-auto max-w-max"
          >
            <img
              src={liza}
              alt="banner"
              className="rounded-full h-full mix-blend-lighten"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
