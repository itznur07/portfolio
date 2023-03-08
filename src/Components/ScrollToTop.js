import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useSelector } from "react-redux";

function ScrollToTopButton() {
  
  const { color } = useSelector((state) => state.datas);

  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    
    <div className='animate-bounce'>
      <button
        className=' text-[#fff] text-xl rounded-full px-2 py-2'
        onClick={handleClick}
        style={{ visibility: visibility ? "visible" : "hidden", backgroundColor: color }}
      >
        <AiOutlineArrowUp />
      </button>
    </div>
  );
}

export default ScrollToTopButton;