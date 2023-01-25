import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollToTopButton() {
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
        className='bg-[#0db760] text-[#fff] text-xl rounded-full px-2 py-2'
        onClick={handleClick}
        style={{ visibility: visibility ? "visible" : "hidden" }}
      >
        <AiOutlineArrowUp />
      </button>
    </div>
  );
}

export default ScrollToTopButton;