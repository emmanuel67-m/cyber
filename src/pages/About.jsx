const About = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
        
        </section>
  
        {/* Company Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-cyan-400 mb-4">Our Story</div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Leading The Way In Creative Digital Solutions
                </h2>
                <p className="text-gray-300 mb-6">
                  Founded in 2010, Technogen has been at the forefront of digital innovation.
                  Our journey began with a simple mission: to provide cutting-edge technology
                  solutions that empower businesses to thrive in the digital age.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-white">
                    <div className="text-4xl font-bold text-cyan-400">500+</div>
                    <p>Completed Projects</p>
                  </div>
                  <div className="text-white">
                    <div className="text-4xl font-bold text-cyan-400">250+</div>
                    <p>Happy Clients</p>
                  </div>
                  <div className="text-white">
                    <div className="text-4xl font-bold text-cyan-400">50+</div>
                    <p>Team Members</p>
                  </div>
                  <div className="text-white">
                    <div className="text-4xl font-bold text-cyan-400">10+</div>
                    <p>Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://i.pinimg.com/474x/1f/3a/c6/1f3ac66262edb7a0019fd55a1871acb7.jpg" 
                  alt="Our Story" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* Values Section */}
        <section className="py-20 bg-blue-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-gray-300">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "Constantly pushing boundaries and embracing new technologies"
                },
                {
                  title: "Excellence",
                  description: "Delivering the highest quality in everything we do"
                },
                {
                  title: "Integrity",
                  description: "Building trust through honest and ethical practices"
                }
              ].map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-8 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default About
  