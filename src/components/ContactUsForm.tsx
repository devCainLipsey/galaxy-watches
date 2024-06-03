"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactSuccessOverlay from "./ContactSuccessOverlay";
import FillOutFieldsOverlay from "./FillOutFieldsOverlay";

const ContactUsForm: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showFillOutFieldsOverlay, setShowFillOutFieldsOverlay] =
    useState(false); // State to track whether the fill-out fields overlay should be shown

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOpenOverlay = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Check if all fields are filled
    if (formData.name && formData.email && formData.message) {
      setShowOverlay(true);
    } else {
      // If not all fields are filled, show the fill-out fields overlay
      setShowFillOutFieldsOverlay(true);
    }
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setShowFillOutFieldsOverlay(false); // Close the fill-out fields overlay when closing the main overlay
  };

  return (
    <>
      <div className="mt-10 w-3/4 flex items-center justify-center bg-black shadow-md rounded-3xl p-4 relative">
        <div className="flex-1 px-4">
          <h3 className="text-4xl text-indigo-300 font-semibold mb-10">
            Contact Us
          </h3>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xl text-white mb-3">
                Name:
              </label>
              <input
                required={true}
                type="text"
                id="name"
                name="name"
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-[#cf0cbc]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xl text-white mb-3">
                Email:
              </label>
              <input
                required={true}
                type="email"
                id="email"
                name="email"
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-[#cf0cbc]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xl text-white mb-3"
              >
                Message:
              </label>
              <textarea
                required={true}
                id="message"
                name="message"
                rows={8}
                placeholder="Enter your message"
                onChange={handleInputChange}
                className="w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-[#cf0cbc]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#8554c7] text-white py-2 px-4 rounded-md hover:bg-[#cf0cbc]  focus:outline-none focus:ring focus:border-[#cf0cbc]"
              onClick={handleOpenOverlay}
            >
              Submit
            </button>
          </form>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress"
          alt="Contact Us"
          className="w-1/3 h-auto object-cover rounded-r-3xl ml-4 max-[1700px]:hidden"
          width={800}
          height={1200}
        />
      </div>
      {showOverlay && <ContactSuccessOverlay onClose={handleCloseOverlay} />}
      {showFillOutFieldsOverlay && (
        <FillOutFieldsOverlay
          onClose={() => setShowFillOutFieldsOverlay(false)}
        />
      )}
    </>
  );
};

export default ContactUsForm;
