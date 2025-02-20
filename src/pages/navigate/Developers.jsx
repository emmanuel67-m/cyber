const Developers = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Developers</h1>
          <div className="flex justify-center space-x-2 text-gray-300">
            <span>HOME</span>
            <span>/</span>
            <span>DEVELOPERS</span>
          </div>
        </section>
  
        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Build Innovative Solutions with Our APIs</h2>
                <p className="text-gray-300 mb-8">
                  Empower your applications with our robust set of APIs. Whether you're building a mobile app, a web
                  platform, or integrating with existing systems, our developer tools provide the flexibility and power
                  you need.
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Comprehensive API documentation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    SDKs for multiple programming languages
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Sandbox environment for testing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Developer support and community forums
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Developer Dashboard"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* API Showcase Section */}
        <section className="py-20 bg-blue-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our API Ecosystem</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Authentication API",
                  description: "Secure user authentication and authorization for your applications.",
                },
                {
                  title: "Data Analytics API",
                  description: "Access real-time analytics and insights for data-driven decisions.",
                },
                {
                  title: "Payment Processing API",
                  description: "Integrate seamless and secure payment solutions into your apps.",
                },
                {
                  title: "Machine Learning API",
                  description: "Leverage our AI models for advanced data processing and predictions.",
                },
                {
                  title: "Content Delivery API",
                  description: "Optimize content delivery with our global CDN integration.",
                },
                {
                  title: "IoT Device Management API",
                  description: "Connect and manage IoT devices at scale with our robust API.",
                },
              ].map((api, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-6 rounded-xl backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{api.title}</h3>
                  <p className="text-gray-300">{api.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Start Building Today</h2>
            <p className="text-gray-300 mb-8">
              Join our developer community and create the next generation of innovative applications.
            </p>
            <button className="bg-cyan-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-cyan-300 transition-colors duration-300">
              Get API Access
            </button>
          </div>
        </section>
      </div>
    )
  }
  
  export default Developers
  
  