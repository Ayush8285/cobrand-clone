import React, { useEffect, useState } from "react";

const StickyNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navLinkClass = "hover:bg-gray-800 px-2 py-2 rounded-lg  transition-colors duration-200";


  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-1/2 z-50 bg-black shadow-lg rounded-3xl transition-all duration-500 ease-in-out ${
        showNav ? "translate-y-[10px] opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 text-white">
        <div className="text-xl font-semibold cursor-pointer">co:brand</div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className={navLinkClass}>Analytics</a>
          <a href="#" className={navLinkClass}>Community</a>
          <a href="#" className={navLinkClass}>Advertising</a>
          <a href="#" className={navLinkClass}>Stories</a>
        </nav>
        <div className="space-x-3">
          <button className={` cursor-pointer px-4 py-2 text-sm font-medium text-white-600 bg-gray-700  rounded-lg ${navLinkClass}`}>
            Sign In
          </button>
          <button className=" cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;
