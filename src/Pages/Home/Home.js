import React from "react";
import Banner from "../../Components/Banner";

const Home = () => {
  // const { color } = useSelector((state) => state.datas);

  // const { scrollYProgress } = useScroll();
  return (
    <>
      <div >
        {/* <motion.div
          className='progress-bar'
          style={{ scaleX: scrollYProgress, backgroundColor: color }}
        /> */}
        <Banner />
      </div>
    </>
  );
};

export default Home;
