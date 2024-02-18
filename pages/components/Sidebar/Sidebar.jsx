import React, { useState, useEffect } from "react";
import Link from "next/link";
import NewThread from "./NewThread";
import Score from "./Score";
import Leaderboard from "./Leaderboard";
import Name from "./Name";
import Signout from "./Signout";
import { FaHamburger } from "react-icons/fa";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 786);
      if (window.innerWidth > 786) {
        setMenuOpen(true);
      }
    };

    handleResize(); // Call the function initially to set the state
    window.addEventListener("resize", handleResize); // Add event listener to handle resize

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run effect only once on mount

  const toggleMenu = () => {
    if (!isMobile) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <header className=" h-full">
      <nav
        onClick={!isMobile ? () => setMenuOpen(false) : undefined}
        className={`w-[100%] xs:w-[70%] sm:w-[60%] md:w-[40%] lg:w-[40%] xl:w-[35%] xxl:w-[28%] h-[100vh] bg-gradient-to-t from-[#2D2D2D] to-[#364741] flex flex-col gap-y-2 justify-start items-center ${
          menuOpen ? "left-[0%]" : "left-[-100%]"
        }  absolute z-50 duration-500 transition-all`}
      >
        <Link href={"/"} className={`w-[90%] h-fit scale-100 `}>
          <div className="flex flex-row justify-start gap-2 items-center text-[#FEFEFE] mx-auto my-2 ">
            <span className="bg-[#D8D8D8] w-6 h-6 rounded-full"></span>
            <h1 className="text-2xl">
              Chat<span className="font-bold">SAT</span>
            </h1>
          </div>
        </Link>
        <NewThread />
        <Score />
        <Leaderboard />
        <Name />
        <Signout />
      </nav>
      <div
        onClick={toggleMenu}
        className={`flex absolute duration-500 transition-all justify-center items-start h-[100vh]  w-8 bg-gradient-to-t from-transparent to-[#364741] ${
          !menuOpen ? "left-0" : "left-[-10%]"
        }`}
      >
        <FaHamburger
          size={20}
          onClick={toggleMenu}
          className="text-[#FEFEFE] text-center"
        />
      </div>
    </header>
  );
};

export default Sidebar;
