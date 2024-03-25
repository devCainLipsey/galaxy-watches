import React from "react";

const ContactUsForm: React.FC = () => {
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
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-[#cf0cbc]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xl text-white mb-3">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
                id="message"
                name="message"
                rows={8}
                placeholder="Enter your message"
                className="w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-[#cf0cbc]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#8554c7] text-white py-2 px-4 rounded-md hover:bg-[#cf0cbc]  focus:outline-none focus:ring focus:border-[#cf0cbc]"
            >
              Submit
            </button>
          </form>
        </div>
        <img
          src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Contact Us"
          className="w-1/3 h-auto object-cover rounded-r-3xl ml-4"
        />
      </div>
    </>
  );
};

export default ContactUsForm;
