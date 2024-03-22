import React from "react";
import Link from "next/link";
import { PiWatchThin } from "react-icons/pi";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="bg-slate-950 py-2 px-20 flex items-center justify-between">
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
              href="/shop"
              className="text-white relative group inline-block"
            >
              <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="group-hover:mb-1">Shop</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white relative group inline-block"
            >
              <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="group-hover:mb-1">About Us</span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white relative group inline-block"
            >
              <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="group-hover:mb-1">Contact Us</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
