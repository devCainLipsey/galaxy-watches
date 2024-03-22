import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">About Galaxy Watches</h2>
            <p className="text-sm">
              Galaxy Watches offers a wide range of high-quality smartwatches
              blending cutting-edge technology with timeless craftsmanship.
              Explore our collection and discover the perfect companion for your
              lifestyle.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="text-sm inline-block">
              <li className="mb-2 group w-5">
                <a href="#" className="relative inline-block">
                  Home
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </li>
              <li className="mb-2 group w-5 ">
                <a href="#" className="relative inline-block">
                  Shop
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </li>
              <li className="mb-2 group">
                <a href="#" className="relative inline-block">
                  About Us
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </li>
              <li className="mb-2 group w-5">
                <a href="#" className="relative  inline-block">
                  Contact
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex flex-col w-5  space-y-4">
              <a href="#" className="text-lg hover:text-blue-500">
                <FaFacebookSquare size={25} />
              </a>
              <a href="#" className="text-lg hover:text-slate-500">
                <FaSquareXTwitter size={25} />
              </a>
              <a href="#" className="text-lg hover:text-[#d62976]">
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Subscribe</h2>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 mr-2 py-2 px-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button className="bg-[#8554c7] text-white py-2 px-4 rounded-r-lg hover:bg-[#cf0cbc] focus:outline-none focus:ring-2 focus:ring-purple-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="my-8">
          <div className="w-full h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7]"></div>
        </div>
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Galaxy Watches. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
