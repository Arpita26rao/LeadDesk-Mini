function Services() {
  const services = [
    {
      title: "Lead Management",
      description: "Capture and organize customer leads efficiently.",
    },
    {
      title: "Real-Time Dashboard",
      description: "Monitor and manage all incoming leads instantly.",
    },
    {
      title: "Secure Admin Panel",
      description: "Access your leads with protected authentication.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Our Services
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Everything you need to manage your business leads.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;