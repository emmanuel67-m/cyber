const Advertisers = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Advertisers</h1>
          <div className="flex justify-center space-x-2 text-gray-300">
            <span>HOME</span>
            <span>/</span>
            <span>ADVERTISERS</span>
          </div>
        </section>
  
        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Reach Your Target Audience with Precision</h2>
                <p className="text-gray-300 mb-8">
                  Our advanced advertising platform allows you to connect with the right customers at the right time.
                  Leverage our data-driven insights and cutting-edge technology to maximize your ROI.
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Targeted advertising solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Real-time analytics and reporting
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Multi-channel campaign management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    AI-powered optimization
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Advertising Dashboard"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="py-20 bg-blue-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Advertising Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Programmatic Advertising",
                  description: "Automate your ad buying for more efficient and effective campaigns.",
                },
                {
                  title: "Native Advertising",
                  description: "Seamlessly integrate your ads into our platform for higher engagement.",
                },
                {
                  title: "Video Advertising",
                  description: "Capture attention with compelling video ads across our network.",
                },
                {
                  title: "Mobile Advertising",
                  description: "Reach users on-the-go with targeted mobile advertising solutions.",
                },
                {
                  title: "Retargeting",
                  description: "Re-engage potential customers who have shown interest in your products.",
                },
                {
                  title: "Brand Safety",
                  description: "Ensure your ads appear in brand-safe environments across our platform.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-6 rounded-xl backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Amplify Your Advertising?</h2>
            <p className="text-gray-300 mb-8">
              Join thousands of successful advertisers who have boosted their ROI with our platform.
            </p>
            <button className="bg-cyan-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-cyan-300 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </section>
      </div>
    )
  }
  
  export default Advertisers
  
  