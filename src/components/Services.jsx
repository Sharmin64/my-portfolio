import React from "react";
import Skills from "./Skills";
import {motion} from "framer-motion";
import {fadein} from "../hooks/fadein";
import webBuild from "../assets/projects/web-build.jpg";
import reactDev from "../assets/projects/react-dev.png";
import maintenance from "../assets/projects/maintenance.png";
import SectionTitle from "../hooks/SectionTitle.jsx";
import {Link} from "react-scroll";
import {MdWorkHistory} from "react-icons/md";

const Services = () => {
  const services = [
    {
      id: "1",
      name: "Website Building",
      details:
        "I provide end-to-end website development services, including design, front-end development, back-end development, and database integration. Whether you need a simple static website or a complex web application, I can create a customized solution tailored to your needs.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      image: `${webBuild}`,
    },
    {
      id: "2",
      name: "React App Development",
      details:
        "I specialize in developing interactive and responsive web applications using the React framework. From single-page applications (SPAs) to complex UI/UX designs, I can build scalable and efficient React apps that meet your specific requirements.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Redux",
        "Webpack",
        "Babel",
      ],
      image: `${reactDev}`,
    },
    {
      id: "3",
      name: "Website Maintenance",
      details:
        "I offer website maintenance services to ensure your website runs smoothly and remains up-to-date. From regular backups and security updates to content management and performance optimization, I can take care of all aspects of website maintenance, allowing you to focus on your core business.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      image: `${maintenance}`,
    },
  ];

  return (
    <section id="services" className="container mx-auto">
      <Skills />
      <div className="mt-24">
        <SectionTitle heading="SERVICES" />
        <div className="mt-24 flex flex-col lg:flex-row">
          <motion.div
            variants={fadein("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className="flex-1 mb-12 lg:mb-0"
          >
            <h2 className="bg-gradient-to-r from-sky-400 via-sky-400 to-sky-600 text-transparent bg-clip-text font-primary text-[32px] tracking-[10%] uppercase font-semibold mb-6">
              What I Offer
            </h2>
            <h3 className="font-secondery font-semibold text-[26px] mb-6 leading-[46px] max-w-[455px] lg:mb-16">
              I offer front-end development, customized web applications,
              responsive and interactive UI/UX, API development, database
              integration, and performance optimization.
            </h3>
            <Link to="projects" smooth={true}>
              <button className="font-semibold drop-shadow-2xl px-4 py-2 md:px-8 md:py-3 text-lg rounded-full bg-transparent text-white hover:bg-gradient-to-r hover:from-sky-600 hover:via-sky-400 hover:to-sky-500 border-2 border-sky-500 hover:border-sky-400 hover:text-black hover:scale-110 transition duration-200 flex items-center gap-2">
                <MdWorkHistory />
                See My Work
              </button>
            </Link>
          </motion.div>
          <motion.div
            variants={fadein("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const {name, details, image} = service;
                return (
                  <div
                    className="border-b border-white/20 h-[295px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[600px]">
                      <img
                        src={image}
                        alt=""
                        className="w-36 h-24 rounded-2xl mb-4"
                      />
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">{details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
