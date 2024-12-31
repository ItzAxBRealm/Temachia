import Hero from "./components/heroSection/Hero";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <div className="h-screen w-screen z-10 flex flex-col">
        <Navbar />
        <MobileNavbar />
        <Hero />
    </div>
  )
}

export default App
