import { Logo } from "../../assets";
import { GiHamburgerMenu } from "react-icons/gi";
import ToggleDarkMode from "../ToggleDarkMode";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className="block lg:hidden fixed top-0 w-full h-16 backdrop-blur-md dark:bg-[#383838a9] bg-[#EEEEEE] px-4">
        <div className="flex-center-between">
            <div className="flex-center-center flex-row dropshadow-color cursor-pointer">
                <img src={Logo} className="w-16 p-1 h-full cursor-pointer rounded-full" alt="Temachia Logo" />
                <h3 className="text-[#3a3a3a] dark:text-[#EEEEEE] text-3xl font-lexend font-bold">Temachia</h3>
            </div>
            <div className="flex-center-center flex-row gap-5 text-[#3a3a3a] dark:text-[#EEEEEE] text-3xl">
                <ToggleDarkMode />
                <GiHamburgerMenu onClick={toggleMenu} className="text-[#3a3a3a] dark:text-[#EEEEEE] text-3xl" />
                <AnimatePresence>
                    {isOpen && ( 
                        <motion.div 
                        // initial={{ opacity: 0, x: 20, y: 0 }} 
                        // animate={{ opacity: 1, x: 0, y: 130 }} 
                        // exit={{ opacity: 0, x: 20, y: 0 }} 
                        // transition={{ duration: 0.3 }}
                        initial={{ x: '100vw' }} 
                        animate={{ x: isOpen ? 0 : '100vw' }} 
                        exit={{ x: '100vw' }}
                        transition={{ type: 'spring', stiffness: 50 }}
                        className="absolute h-screen right-0 top-0 left-0 w-full p-3 bg-[#EEEEEE] dark:bg-[#383838] shadow-lg rounded-lg" 
                        > 
                        <MdOutlineClose className="absolute top-3 right-3" onClick={toggleMenu} />
                            <motion.ul 
                                className="flex flex-col p-4"
                                transition={{
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.7,
                                    delayChildren: 0.3,
                                    staggerChildren: 0.05,
                                }}
                                variants={{
                                    open: {
                                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                                        transition: {
                                            type: "spring",
                                            bounce: 0,
                                            duration: 0.7,
                                            delayChildren: 0.3,
                                            staggerChildren: 0.05,
                                        }
                                    },
                                    closed: {
                                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                                        transition: {
                                            type: "spring",
                                            bounce: 0,
                                            duration: 0.3
                                        }
                                    }
                                }}
                                style={{ pointerEvents: isOpen ? "auto" : "none"}}
                            > 
                                <li className="py-2 hover:bg-gray-200 dark:bg-[#383838a9]"> 
                                    <Link to="/" className="text-black dark:text-white">Home</Link> 
                                </li> 
                                <li className="py-2 hover:bg-gray-200 dark:bg-[#383838a9]"> 
                                    <Link to="/components" className="text-black dark:text-white">Components</Link>
                                </li> 
                            </motion.ul> 
                        </motion.div> 
                        )}
                </AnimatePresence>
            </div>
        </div>
    </div>
  )
}

export default MobileNavbar
