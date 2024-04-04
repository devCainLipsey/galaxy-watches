import React from "react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-950 via-purple-600 to-slate-950 flex flex-col items-center justify-center min-h-screen">
        <div className="bg-black rounded-3xl py-10 px-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-white">
            The page you are looking for does not exist.
          </p>
          <div className="flex justify-center">
            <Link href="/">
              <div className="w-64 relative inline-flex group mt-12">
                <div className="absolute transition-all duration-100 opacity-50 -inset-px bg-gradient-to-r from-[#cf0cbc] via-[#8554c7] to-[#cf0cbc] rounded-3xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button className="w-64 relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white transition-all duration-100 bg-black font-pj rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#cf0cbc] group-hover:pl-6">
                  <span className="ml-5 group-hover:translate-x-[-1rem] transition-all duration-200 text-center">
                    Go Home
                  </span>
                  <FaLongArrowAltRight
                    className="-ml-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    size={20}
                  />
                </button>
              </div>
            </Link>
          </div>
        </div>
        {/* You can add additional elements or components here */}
      </div>
    </>
  );
};

export default NotFound;
