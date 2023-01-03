import React, { useState } from "react";
import { Image } from "../../../../utility/constants";
import { CLASSES } from "../../../../utility/classes";
import { FaLinkedin, FaGithub, FaCodepen, FaBars } from "react-icons/fa";

const Navbar = () => {
    
    return (
        <Header />
    );
}

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = React.useState(null);
  
    React.useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };

  function Header() {
    const scrollDirection = useScrollDirection();
    const [getCollapse, setCollapse] = useState(false);
    
    return (
      <div className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} transition-all duration-500 z-50	`}>
        <nav className="bg-custom-gray-100">
            <div className="container mx-auto ">
                <div className="max-w-full px-16">
                    <div className="flex justify-between py-4">
                        <div className="flex">
                        <div>
                            <img src={Image.logo} alt="logo" className="h-10 w-14 inline-block -mt-1"/>
                            <h3 className={`${CLASSES.subtext} inline-block`}>ELAICA DELA CRUZ</h3>
                        </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-10">
                            <a href="/" className={`${CLASSES.subtext} ${CLASSES.fadeUnderline}`}>RESUME</a>
                            <a href="/" className={`${CLASSES.subtext} ${CLASSES.fadeUnderline}`}>WORKS</a>
                            <div className="flex flex-row space-x-4">
                                <a href="/" target="_blank">
                                    <FaLinkedin className="h-7 w-7"/>
                                </a>
                                <a href="/" target="_blank">
                                    <FaGithub className="h-7 w-7"/>
                                </a>
                                <a href="/" target="_blank">
                                    <FaCodepen className="h-7 w-7"/>
                                </a>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center"
                        onClick={()=> {
                            setCollapse(!getCollapse)
                        }}>
                            <FaBars className="h-7 w-7"/>
                        </div>
                    </div>
                </div>
                <div className={`${getCollapse ? "" : "hidden"}`}>
                    <a href="/" className={`flex justify-center py-2 hover:bg-custom-gray-200 ${CLASSES.subtext}`}>RESUME</a>
                    <a href="/" className={`flex justify-center py-2 hover:bg-custom-gray-200 ${CLASSES.subtext}`}>WORKS</a>
                    <div className="flex flex-row space-x-4 mt-4 pb-4 items-center justify-center ">
                        <a href="/" target="_blank">
                            <FaLinkedin className="h-7 w-7"/>
                        </a>
                        <a href="/" target="_blank">
                            <FaGithub className="h-7 w-7"/>
                        </a>
                        <a href="/" target="_blank">
                            <FaCodepen className="h-7 w-7"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    );
  };
export default Navbar;