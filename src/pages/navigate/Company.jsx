const Company = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Company</h1>
          <div className="flex justify-center space-x-2 text-gray-300">
            <span>HOME</span>
            <span>/</span>
            <span>COMPANY</span>
          </div>
        </section>
  
        {/* About Us Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Innovating for a Better Tomorrow</h2>
                <p className="text-gray-300 mb-8">
                  At Technogen, we're passionate about leveraging technology to solve complex challenges and drive
                  positive change. Our team of experts is dedicated to creating cutting-edge solutions that empower
                  businesses and individuals alike.
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Founded in 2010 with a vision for the future
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Global presence with offices in 5 countries
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Over 500 talented employees worldwide
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Committed to sustainability and social responsibility
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Technogen Office"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* Mission and Values Section */}
        <section className="py-20 bg-blue-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission and Values</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We're driven by a clear mission and guided by strong values that shape everything we do.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To revolutionize industries through innovative technology solutions, empowering businesses and
                  individuals to achieve their full potential in the digital age.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Our Values</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Innovation: Constantly pushing the boundaries of what's possible</li>
                  <li>• Integrity: Upholding the highest ethical standards in all we do</li>
                  <li>• Collaboration: Fostering teamwork and partnerships for mutual success</li>
                  <li>• Excellence: Striving for the highest quality in our products and services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* Leadership Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Jane Doe", role: "CEO & Founder", image: "/placeholder.svg?height=300&width=300" },
                { name: "John Smith", role: "CTO", image: "/placeholder.svg?height=300&width=300" },
                { name: "Emily Johnson", role: "COO", image: "/placeholder.svg?height=300&width=300" },
                { name: "Michael Brown", role: "CFO", image: "/placeholder.svg?height=300&width=300" },
                { name: "Sarah Lee", role: "CMO", image: "/placeholder.svg?height=300&width=300" },
                { name: "David Wilson", role: "Head of Innovation", image: "/placeholder.svg?height=300&width=300" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-6 rounded-xl backdrop-blur-sm text-center"
                >
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 bg-blue-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-gray-300 mb-8">
              We're always looking for talented individuals to join our mission. Explore career opportunities at
              Technogen.
            </p>
            <button className="bg-cyan-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-cyan-300 transition-colors duration-300">
              View Open Positions
            </button>
          </div>
        </section>
      </div>
    )
  }
  
  export default Company
  
  