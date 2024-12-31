import { motion } from "motion/react"
import React from "react"
import { Shape1, Shape2 } from "../../assets"
import { Link } from "react-router-dom"
import CodeEditor from "../codeEditor"

const Hero:React.FC = () => {
  return (
    <div className="h-screen mx-auto w-full flex items-center justify-center flex-col md:flex-row font-lexend">
      <div className="flex items-center justify-center md:justify-start h-full w-full md:w-4/5 gap-20">
        <motion.div 
          className="flex items-start justify-between flex-col gap-5 p-4 backdrop-blur-md rounded-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration: 0.5}}
        >
          <motion.h2 className="text-3xl md:text-5xl text-black dark:text-white w-full md:w-[30rem]" >
            Cutting-Edge UI Components for <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-600 font-extrabold">Modern Web Apps.</span>
          </motion.h2>
          <p className="text-sm md:text-base text-black dark:text-white md:w-[35rem]">
            A library packed with 
            <span className="text-indigo-400"> tailwind components </span>
            like
            <Link to="/buttons" className="text-cyan-400"> buttons, </Link>
            <Link to="/navbars" className="text-cyan-400">navbars, </Link>
            <Link to="/cards" className="text-cyan-400">cards, </Link>
            <Link to="/forms" className="text-cyan-400">forms </Link>and
          <span className="text-cyan-400"> much more</span> to build visually stunning websites quickly.
          </p>
        </motion.div>
        <CodeEditor />
      </div>
        <motion.img 
        initial={{ opacity: 0, scale: 0, x: 0}}
        animate={{ opacity: 1, scale: 1, x: 100 }}
        transition={{duration: 2}}
        src={Shape1} 
        className="absolute -z-10 top-40 left-28 h-1/4 md:h-2/4" 
        alt="" />
        <motion.img
        // initial={{ opacity: 0, scale: 0, x: 0}}
        animate={{ rotate: "360deg" }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        src={Shape2} 
        className="absolute -z-10 bottom-24 right-[8rem] h-1/4 md:h-2/5 drop-shadow-2xl" 
        alt=""
        />
    </div>
  )
}

export default Hero
