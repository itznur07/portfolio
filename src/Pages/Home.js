import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  // const { color } = useSelector((state) => state.datas);

  // const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="bg-[#0F0F0F]">
        {/* <motion.div
          className='progress-bar'
          style={{ scaleX: scrollYProgress, backgroundColor: color }}
        /> */}
        <Navbar />
        <Banner />
        {/* <About />
        <MySkill />
        <Protfolio />
        <Contact /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
