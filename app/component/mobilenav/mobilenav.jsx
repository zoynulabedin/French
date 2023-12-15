import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "@remix-run/react";
const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-menu">
      <div className="menu-header flex justify-end mt-5 mr-5">
        <div className="menu-icons">
          {isMenuOpen ? (
            <FaTimes className="close-icon z-20" onClick={toggleMenu} />
          ) : (
            <FaBars className="bars-icon" onClick={toggleMenu} />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-conten absolute h-screen w-full top-20 left-0 right-0 bg-stone-950">
          {/* Your menu items go here */}
          <ul className="flex flex-col gap-4 items-centers justify-center text-center">
            <li className="border-r-2 border-black70 pr-4">
              <Link className="text-white" to="/bio">
                Bio
              </Link>
            </li>
            <li className="border-r-2 border-black70 pr-4">
              <Link className="text-white" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="border-r-2 border-black70 pr-4">
              <Link className="text-white" to="/videos">
                Videos
              </Link>
            </li>
            <li className="border-r-2 border-black70 pr-4">
              <Link className="text-white" to="/marketplace">
                Marketplace
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
