import NavBar from "@/components/NavBar";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen  bg-slate-950 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 flex items-start justify-center">
            <div className="w-full mt-5 ml-5 mr-5 h-2/4 relative border-4 border-slate-800 rounded-lg">
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              {/* Overlay */}
              <img
                src="https://images.unsplash.com/photo-1570294438100-bbb766244bc0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Background"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-center text-white">
                  Welcome to Galaxy Watches
                </h1>
                <p className="mt-4 text-3xl text-white">
                  Best place in the universe to tell time!
                </p>

                <div className="w-64 relative inline-flex  group mt-12">
                  <div className="absolute transitiona-all duration-1000 opacity-30 -inset-px bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <button className="w-64 relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
