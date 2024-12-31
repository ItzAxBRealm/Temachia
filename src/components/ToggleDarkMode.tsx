import { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { motion } from "motion/react";

function ToggleDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the saved theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) {
      const isDark = savedTheme === "dark";
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);

  // Toggle dark mode and save preference
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <motion.button 
      onClick={toggleTheme} 
      className="outline-none border-none bg-transparent"
      whileHover={{ rotate: "180deg" }}
      transition={{ type: "spring", duration: 1.5}}
    >
      {isDarkMode ? (
        <FiSun className="text-2xl hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out" />
      ) : (
        <FaRegMoon className="text-2xl hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out" />
      )}
    </motion.button>
  );
}

export default ToggleDarkMode;