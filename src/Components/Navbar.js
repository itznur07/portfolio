import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { color } = useSelector((state) => state.datas);
  const [showMenu, setShowMenu] = useState(false); // state to control menu visibility
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 2) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='md:flex md:flex-row  items-center flex flex-col justify-between md:gap-y-0 gap-y-7 md:py-6 py-5'>
        {/* div 1 */}
        <div className='flex justify-between md:space-x-0 space-x-96 items-center'>
          <Link to='/'>
            <span
              className='text-5xl font-bold text-[#f5f5f5] rounded-full'
            >
              NUR.
            </span>
          </Link>
          {/* hamburger icon for mobile view */}
          <div
            className='md:hidden cursor-pointer'
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke={color}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={
                  showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </div>
        </div>
        {/* div 1 */}
        {/* div 2 */}
        <div
          className={`${
            showMenu ? "block" : "hidden"
          }  md:flex  md:items-center justify-between`}
        >
          <nav>
            <ul className='flex flex-col md:flex-row items-center md:space-x-16 space-y-5 md:space-y-0 md:text-md text-md font-medium cursor-pointer'>
              <li className={`text-[#676767] hover:text-[${color}]`}>
                <a
                  href='#home'
                  className={activeSection === "section1" ? "active" : ""}
                  onClick={() => scrollToSection("section1")}
                >
                  Home
                </a>
              </li>
              <li className={`text-[#676767] hover:text-[${color}]`}>
                <a
                  href='#about'
                  className={activeSection === "section2" ? "active" : ""}
                  onClick={() => scrollToSection("section2")}
                >
                  About
                </a>
              </li>
              <li className={`text-[#676767] hover:text-[${color}]`}>
                <a
                  href='#skills'
                  className={activeSection === "section3" ? "active" : ""}
                  onClick={() => scrollToSection("section3")}
                >
                  Skills
                </a>
              </li>
              <li className={`text-[#676767] hover:text-[${color}]`}>
                <a
                  href='#project'
                  className={activeSection === "section4" ? "active" : ""}
                  onClick={() => scrollToSection("section4")}
                >
                  Projects
                </a>
              </li>
              <li className={`text-[#676767] hover:text-[${color}]`}>
                <a
                  href='#contact'
                  className={activeSection === "section5" ? "active" : ""}
                  onClick={() => scrollToSection("section5")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* div 2 */}
        {/* div 3 */}
        <div
          className={`${showMenu ? "block" : "hidden"} md:block mt-5 md:mt-0`}
        >
          <a
            href='https://docs.google.com/document/d/1deOhuohW61m7Zub-mtYbQ3Zh8t7OUdDl8wGhSWF9mAw/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
            className="border px-4 py-2 text-[#f5f5f5] border-[#1D293A] font-medium rounded"
          >
            Resume
          </a>
        </div>
        {/* div 3 */}
      </div>
    </div>
  );
};

export default Navbar;
