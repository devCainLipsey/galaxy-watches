"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PiWatchThin } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/features/store";

const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const cartTotalCount = useSelector(
    (state: RootState) => state.cart.totalCount
  );

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-slate-950 via-purple-600 to-slate-950 py-2 px-4 sm:px-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <PiWatchThin className="text-white ml-2" size={24} />
          <span className="text-white font-bold text-lg pl-2 ">
            Galaxy Watches
          </span>
        </div>

        {/* Hamburger Icon */}
        <div className="min-[848px]:hidden">
          <GiHamburgerMenu
            className="text-white"
            size={24}
            onClick={toggleMenu}
          />
        </div>

        {/* Overlay Module for Links */}
        <div
          className={`${
            showMenu
              ? "fixed inset-0 flex items-center justify-center"
              : "hidden"
          }`}
        >
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-4 rounded-md">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/" className="text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Shop" className="text-black">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/Cart" className="text-black">
                  <MdOutlineShoppingCart size={24} />
                  {cartTotalCount > 0 && (
                    <span className="ml-1">{cartTotalCount}</span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Links */}
        <ul
          className={`hidden min-[848px]:flex space-x-4 ${
            showMenu ? "hidden" : ""
          }`}
        >
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
            <Link href="/Cart" className="relative group inline-block">
              <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="group-hover:mb-1 relative">
                <MdOutlineShoppingCart size={30} />
                {cartTotalCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#cf0cbc] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartTotalCount}
                  </span>
                )}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
