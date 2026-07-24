function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="md:w-1/2">
          <p className="text-blue-200 font-semibold mb-3">
            Welcome to LeadDesk Mini
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Capture More Leads,
            <br />
            Grow Your Business.
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Manage customer inquiries effortlessly with our modern lead
            management platform designed for startups and businesses.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700"
            alt="Business Team"
            className="rounded-2xl shadow-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;