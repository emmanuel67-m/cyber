const Services = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
        
        </section>
  
        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Development",
                  description: "Custom websites and web applications built with cutting-edge technologies",
                  icon: "🌐",
                },
                {
                  title: "Cloud Solutions",
                  description: "Scalable cloud infrastructure and migration services",
                  icon: "☁️",
                },
                {
                  title: "Mobile Development",
                  description: "Native and cross-platform mobile applications",
                  icon: "📱",
                },
                {
                  title: "UI/UX Design",
                  description: "User-centered design solutions that enhance user experience",
                  icon: "🎨",
                },
                {
                  title: "Cybersecurity",
                  description: "Comprehensive security solutions to protect your digital assets",
                  icon: "🔒",
                },
                {
                  title: "AI & Machine Learning",
                  description: "Intelligent solutions powered by advanced algorithms",
                  icon: "🤖",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-8 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Process Section */}
        <section className="py-20 bg-blue-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-gray-300">How we bring your ideas to life</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Discovery", description: "Understanding your needs" },
                { step: "2", title: "Planning", description: "Creating the roadmap" },
                { step: "3", title: "Execution", description: "Building your solution" },
                { step: "4", title: "Delivery", description: "Launching and supporting" },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-900">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default Services
  
  