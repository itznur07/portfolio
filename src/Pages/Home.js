import { motion, useScroll } from "framer-motion";
import React from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import LoveToDo from "../Components/LoveToDo";
import MySkill from "../Components/MySkill";
import Navbar from "../Components/Navbar";
import Protfolio from "../Components/Protfolio";

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div>
        <motion.div
          className='progress-bar'
          style={{ scaleX: scrollYProgress }}
        />
        <Navbar />
        <Banner />
        <About />
        <MySkill />
        <LoveToDo />
        <Protfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
