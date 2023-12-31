/* eslint-disable react/no-unknown-property */
import React, {useEffect, useState} from "react";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import {PropagateLoader} from "react-spinners";
import logo from "/Slogo.jpeg";
import {motion} from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex flex-col justify-center items-center mt-[350px]">
          <motion.div
            animate={{y: [20, 50, 20], opacity: 1, scale: 0.8}}
            transition={{
              duration: 1.5,
              delay: 0.1,
              ease: [0.5, 0.3, 1, 1.5],
            }}
            initial={{opacity: 0, scale: 0.5}}
            whileHover={{scale: 0.2}}
          >
            <img src={logo} alt="Logo" />
          </motion.div>
          <PropagateLoader size={25} color="#07a8D1" />
        </div>
      ) : (
        <div>
          <Header />
          <Banner />
          <Navbar />
          <Services />
          <Projects />
          <AboutMe />
          <ContactMe />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
