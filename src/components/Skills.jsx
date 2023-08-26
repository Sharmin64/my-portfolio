import React from "react";
import html from "../assets/projects/html-logo.png";
import css from "../assets/projects/css-logo.png";
import javascript from "../assets/projects/js_logo.png";
import bootstrap from "../assets/projects/bs.png";
import tailwind from "../assets/projects/tailwind (1).png";
import react from "../assets/projects/reeact.png";
import node from "../assets/projects/Noode.png";
import mongo from "../assets/projects/mongodb.png";
import express from "../assets/projects/express.png";

import {motion} from "framer-motion";
import {fadein} from "../hooks/fadein";
import SectionTitle from "../hooks/SectionTitle.jsx";

const Skills = () => {
  return (
    <>
      <SectionTitle heading="MY SKILLS" />
      <div className="md:flex mt-12 w-full">
        <motion.div
          variants={fadein("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className="grid grid-cols-4 h-20 flex-grow card rounded-box place-items-center gap-1 md:gap-8 lg:gap-1"
        >
          <div className="flex flex-col justify-center items-center">
            <img src={html} alt="" className="w-16 rounded-full nav-hover" />
            <p className="font-secondary font-semibold">HTML</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={css} alt="" className="w-16 rounded-full nav-hover" />
            <p className="font-secondary font-semibold">CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={javascript}
              alt=""
              className="w-16 rounded-full nav-hover"
            />
            <p className="font-secondary font-semibold">JAVASCRIPT</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={bootstrap}
              alt=""
              className="w-16 rounded-full nav-hover"
            />
            <p className="font-secondary font-semibold">BOOTSTRAP</p>
          </div>
        </motion.div>
        <div className="divider divider-horizontal border-cyan-700 border-x-2"></div>
        <motion.div
          variants={fadein("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className="grid grid-cols-5 gap-1 h-20 flex-grow card rounded-box place-items-center mt-12 md:mt-0 md:gap-4 lg:gap-1"
        >
          <div className="flex flex-col justify-center items-center">
            <img
              src={tailwind}
              alt=""
              className="w-16 rounded-full nav-hover"
            />
            <p className="font-secondary font-semibold">TAILWIND</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={react} alt="" className="w-16 rounded-full nav-hover" />
            <p className="font-secondary font-semibold">ReactJS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={node} alt="" className="w-16 rounded-full nav-hover" />
            <p className="font-secondary font-semibold">NODE</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={mongo} alt="" className="w-16 rounded-full nav-hover" />
            <p className="font-secondary font-semibold">MongoDB</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={express} alt="" className="w-16 rounded-full nav-hover" />
            <p className="font-secondary font-semibold">ExpressJS</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
