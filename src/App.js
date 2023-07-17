import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MySkill from "./Components/MySkill";
import Protfolio from "./Components/Protfolio";

import Home from "./Pages/Home";

const App = () => {
  return (
    <div className='bg-gradient-to-r from-[#f5f5f5]  to-blue-400 '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<MySkill />} />
        <Route path='/portfolio' element={<Protfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
