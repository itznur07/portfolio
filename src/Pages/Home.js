import { motion, useScroll } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import LoveToDo from "../Components/LoveToDo";
import MySkill from "../Components/MySkill";
import Navbar from "../Components/Navbar";
import Protfolio from "../Components/Protfolio";
import Theme from "../Components/Theme";

const Home = () => {
  
  const { color } = useSelector((state) => state.datas);

  const { scrollYProgress } = useScroll();
  return (
    <>
      <div>
        <motion.div
          className='progress-bar'
          style={{ scaleX: scrollYProgress, backgroundColor: color }}
        />
        <Navbar />
        <Banner />
        <About />
        <MySkill />
        <LoveToDo />
        <Protfolio />
        <Contact />
        <Footer />
        <Theme />
      </div>
    </>
  );
};

export default Home;
