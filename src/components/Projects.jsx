import React from "react";
import {motion} from "framer-motion";
import {fadein} from "../hooks/fadein";
import img1 from "../assets/logoman/corepower/coreK.jpeg";
import img2 from "../assets/logoman/toyland/barbiD.jpeg";
import img3 from "../assets/logoman/foodValley/chef_2.jpg";
import img4 from "../assets/projects/job-portal-1.jpg";

import logo1 from "../assets/projects/reeact.png";
import logo4 from "../assets/projects/mongodb.png";
import logo5 from "../assets/projects/tailwind (1).png";
import logo6 from "../assets/projects/express.png";
import SectionTitle from "../hooks/SectionTitle.jsx";

import {TbWorld, TbCode, TbCodeCircle} from "react-icons/tb";

const projects = [
  {
    image: img1,
    title: "Core Power",
    details: "Summer camp full MERN web application.",
    technologies: [
      {image: logo1},
      {image: logo4},
      {image: logo6},
      {image: logo5},
    ],
    liveLink: "https://assignment-12-summer-camp.web.app",
    clientCode: "https://github.com/Sharmin64/yoga-camp-client",
    serverCode: "https://github.com/Sharmin64/yoga-camp-server",
  },
  {
    image: img2,
    title: "Kid Castle",
    details: "Toy Store full MERN web application.",
    technologies: [
      {image: logo1},
      {image: logo4},
      {image: logo6},
      {image: logo5},
    ],
    liveLink: "https://assignment-11-toy-firebase.web.app",
    clientCode: "https://github.com/Sharmin64/kid-castle",
    serverCode: "https://github.com/Sharmin64/kid-castle-server",
  },
  {
    image: img3,
    title: "Food Valley",
    details: "Chef and food details full React web application.",
    technologies: [{image: logo1}, {image: logo6}, {image: logo5}],
    liveLink: "https://assign-10-chef-hunt-client.web.app",
    clientCode: "https://github.com/Sharmin64/chief-hunt-client",
    serverCode: "https://github.com/Sharmin64/chief-hunt-server",
  },
  {
    image: img4,
    title: "Job Portals",
    details: "Job hunting full React web application.",
    technologies: [{image: logo1}, {image: logo5}],
    liveLink: "https://gleeful-lebkuchen-c5538f.netlify.app",
    clientCode: "https://github.com/Sharmin64/job-portal",
  },
];
const Projects = () => {
  const handleShow = () => {};
  return (
    <section id="projects" className="">
      <div className="container mx-auto px-10">
        <SectionTitle heading={"PROJECTS"} />
        <motion.div
          variants={fadein("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 gap-y-12 mt-32 mb-10"
        >
          <div>
            <h2 className="font-primary text-[32px] mb-6 tracking-[10%] uppercase leading-tight bg-gradient-to-r from-sky-400 via-sky-400 to-sky-600 text-transparent bg-clip-text font-semibold">
              My Latest <br /> Creation
            </h2>
            <p className="max-w-sm mb-6">
              Here are the projects that i have finished working on, these are
              my best projects so far, you can see the details when you hover
              over the image.
            </p>
            <button
              className="font-semibold drop-shadow-2xl px-4 py-2 md:px-8 md:py-3 text-lg rounded-full bg-transparent text-white hover:bg-gradient-to-r hover:from-sky-600 hover:via-sky-400 hover:to-sky-500 border-2 border-sky-500 hover:border-sky-400 hover:text-black hover:scale-110 transition duration-200"
              onClick={handleShow}
            >
              View All Project
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={fadein("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className="grid sm:grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10"
        >
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              <div className="group-hover:bg-black/70 w-1/2 absolute z-40 transition-all duration-300"></div>
              <img
                src={project.image}
                alt=""
                className="group-hover:scale-125 transition-all duration-500 w-screen h-[400px]"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-700 z-50 bg-gradient-to-r from-sky-400 via-sky-400 to-sky-600 text-transparent bg-clip-text text-5xl font-bold mb-6">
                {project.title}
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-36 transition-all duration-700 z-50 text-sky-600 text-lg font-bold mb-6">
                {project.details}
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 bg-gradient-to-r from-sky-400 via-sky-400 to-sky-600 text-transparent bg-clip-text text-5xl font-bold mb-6 flex gap-6">
                {project.technologies.map((item, i) => (
                  <img
                    src={item.image}
                    key={i}
                    className="h-12 w-12 hover:bg-sky-400 hover:rounded-full transition duration-200 hover:scale-125 rounded-full hover:shadow-2xl"
                  />
                ))}
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 flex sm:gap-0 md:gap-4">
                <a href={project.liveLink}>
                  <button className="font-semibold drop-shadow-2xl px-6 py-1 text-lg rounded-md bg-sky-400 text-black border hover: bg-transparent hover:scale-125 transition-all duration-300 border-sky-500 hover:text-white flex items-center gap-2">
                    <TbWorld className="hover:animate-spin" />
                    Live
                  </button>
                </a>
                <a href={project.clientCode}>
                  <button className="font-semibold drop-shadow-2xl px-6 py-1 text-lg rounded-md bg-sky-400 text-black border hover: bg-transparent hover:scale-125 transition-all duration-300 border-sky-500 hover:text-white flex items-center gap-2">
                    <TbCode className="hover:animate-spin" />
                    ClientCode
                  </button>
                </a>
                {project.serverCode ? (
                  <a href={project.serverCode}>
                    <button className="font-semibold drop-shadow-2xl px-6 py-1 text-lg rounded-md bg-sky-400 text-black border hover: bg-transparent hover:scale-125 transition-all duration-300 border-sky-500 hover:text-white flex items-center gap-2">
                      <TbCodeCircle className="hover:animate-spin" />
                      Server
                    </button>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
