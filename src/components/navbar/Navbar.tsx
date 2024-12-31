import { Logo } from "../../assets";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menus } from "../../utils";
import { motion } from "motion/react";
import ToggleDarkMode from "../ToggleDarkMode";

const Navbar:React.FC = () => {
  const [isHover, toggleHover] = useState(false);

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = Menus[0]?.subMenu?.length;


  return (
    <nav className="hidden lg:block fixed inset-0 w-full h-[66px] lg:flex-center-center backdrop-blur-md dark:bg-[#383838a9] bg-[#EEEEEE] backdrop:blur-lg dark:text-[#EEEEEE] text-black z-10">
        <div className="relative h-full w-4/5 flex-center-between p-4">
            <div className="flex-center-between flex-row cursor-pointer">
                <img src={Logo} className="w-16 p-1 h-full cursor-pointer rounded-full" alt="Temachia Logo" />
                <h3 className="text-[#3a3a3a] dark:text-[#EEEEEE] text-3xl font-lexend font-bold">Temachia</h3>
            </div>
            <div className="flex flex-row items-center gap-10 mr-10 px-3 py-1">
                <ul className="flex-center-between flex-row gap-10">
                    <li
                     className="hover:text-[#68b8ee] transition-all duration-300 ease-in-out"
                     >
                        <Link to="/" className="text-xl font-normal font-lexend outline-none border-none">
                            Home
                        </Link>
                    </li>
                    <motion.li 
                    onHoverStart={() => {
                        toggleHoverMenu();
                      }}
                    onHoverEnd={toggleHoverMenu}
                    className="">
                        <Link 
                        to="/components" 
                        className="relative outline-none border-none transition-all duration-300 ease-in-out hover:text-[#68b8ee] text-xl font-normal font-lexend cursor-pointer">
                            Components
                        </Link>
                        {hasSubMenu &&  (
                            <motion.div 
                            initial="exit"
                            animate={isHover ? "enter" : "exit"}
                            variants={subMenuAnimate}
                            className="absolute top-[4.2rem] bg-[#eeeeeea9] dark:bg-[#6d6d6dc9] flex-col p-4 rounded-md mt-2"
                            >
                            <div className="grid grid-cols-3 gap-7">
                                {Menus[0].subMenu.map((item, index) => {
                                return(
                                    <motion.div 
                                      key={index} 
                                      className="relative w-28 text-center" 
                                      whileHover={{rotate: "-7.5deg"}} 
                                      transition={{
                                        type: "spring",
                                        damping: 3,
                                      }}
                                    >
                                        <Link to={`/${item.name}`} className="text-md text-black dark:text-white outline-none cursor-pointer transition-all duration-200 ease-in-out hover:text-blue-500 dark:hover:text-blue-500">{item.name}</Link>
                                    </motion.div>
                                )
                                })}
                            </div>
                        </motion.div>
                        )}
                    </motion.li>
                </ul>
            </div>
            {/* <FaRegMoon className="text-2xl hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out" /> */}
            <ToggleDarkMode />
        </div>
    </nav>
  )
}

export default Navbar;