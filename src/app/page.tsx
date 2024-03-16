const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-start justify-center">
          <div className="w-full mt-5 ml-5 mr-5 h-2/4 relative border-4 border-gray-500 rounded-lg">
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>{" "}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
