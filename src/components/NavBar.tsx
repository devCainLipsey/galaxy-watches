import React from "react";

import Link from "next/link";
import { PiWatchThin } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";

const NavBar: React.FC = () => {
  return (
    <>
      <nav
        className="bg-gradient-to-r from-slate-950 via-purple-600 to-slate-950
 py-2 px-20 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center">
          <PiWatchThin className="text-white ml-2" size={24} />
          <span className="text-white font-bold text-lg pl-2 ">
            Galaxy Watches
          </span>
        </div>

        {/* Links */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white relative group inline-block">
              <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="group-hover:mb-1">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/Shop"
              className="text-white relative group inline-block"
            >
              <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="group-hover:mb-1">Shop</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="text-white relative group inline-block"
            >
              <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="group-hover:mb-1">About Us</span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="text-white relative group inline-block"
            >
              <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="group-hover:mb-1">Contact Us</span>
            </Link>
          </li>
          <Link href="/Cart">
            <MdOutlineShoppingCart size={30} />
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
