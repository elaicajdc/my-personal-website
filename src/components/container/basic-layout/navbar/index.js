import React, { useState } from "react";
import { Image } from "../../../../utility/constants";
import { CLASSES } from "../../../../utility/classes";
import { FaLinkedin, FaBars, FaFacebook, FaEnvelope} from "react-icons/fa";

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
    
    const home = () => {
        window.scrollTo(0, 0);
    };

    const works = () => {
        window.scrollTo(0, document.body.offsetHeight);
    };
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
                            <a href="#home" onClick={home} className={`${CLASSES.subtext} ${CLASSES.fadeUnderline}`}>HOME</a>
                            <a href="#works" onClick={works} className={`${CLASSES.subtext} ${CLASSES.fadeUnderline}`}>WORKS</a>
                            <div className="flex flex-row space-x-4">
                                <a href="https://ph.linkedin.com/in/elaicadelacruz">
                                    <FaLinkedin className="h-7 w-7 hover:text-custom-red-200"/>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100083453246551">
                                    <FaFacebook className="h-7 w-7 hover:text-custom-red-200"/>
                                </a>
                                <a href="mailto:elaicadelacruz06@gmail.com">
                                    <FaEnvelope className="h-7 w-7 hover:text-custom-red-200"/>
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
                <div className={`${getCollapse ? "block" : "hidden"}`}>
                    <a href="#home" onClick={home} className={`flex justify-center py-2 hover:bg-custom-gray-200 ${CLASSES.subtext}`}>HOME</a>
                    <a href="#works" onClick={works} className={`flex justify-center py-2 hover:bg-custom-gray-200 ${CLASSES.subtext}`}>WORKS</a>
                    <div className="flex flex-row space-x-4 mt-4 pb-4 items-center justify-center ">
                        <a href="https://ph.linkedin.com/in/elaicadelacruz">
                            <FaLinkedin className="h-7 w-7 hover:text-custom-red-200"/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100083453246551">
                            <FaFacebook className="h-7 w-7 hover:text-custom-red-200"/>
                        </a>
                        <a href="mailto:elaicadelacruz06@gmail.com">
                            <FaEnvelope className="h-7 w-7 hover:text-custom-red-200"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    );
  };
export default Navbar;