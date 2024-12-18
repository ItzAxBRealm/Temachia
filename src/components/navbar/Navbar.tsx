import { FaRegMoon } from "react-icons/fa6";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed inset-0 w-full h-[66px] flex items-center justify-center bg-[#EEEEEE] backdrop:blur-lg text-black z-10">
        <div className="relative w-full h-full flex-center-between p-4">
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 flex-center justify-center rounded-full">
                <img src={Logo} className="w-16 mt-2 p-1 rounded-full bg-white cursor-pointer hover:shadow-lg shadow-blue-700" alt="Temachia Logo" />
            </div> */}
            <div className="flex-center-center flex-row dropshadow-color cursor-pointer">
                <img src={Logo} className="w-16 p-1 h-full cursor-pointer rounded-full" alt="Temachia Logo" />
                <h3 className="text-black text-5xl font-smoochSans font-bold">Temachia</h3>
            </div>
            <div className="ml-auto flex flex-row items-center gap-8">
                <ul className="flex-center-between flex-row gap-8">
                    <li className="hover:text-blue-400 transition-all duration-300 ease-in-out">
                        <Link to="/" className="text-xl font-normal font-lexend">
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-blue-400 transition-all duration-300 ease-in-out">
                        <Link to="/" className="text-xl font-normal font-lexend">
                            Components
                        </Link>
                    </li>
                </ul>
                <FaRegMoon className="text-2xl hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar;