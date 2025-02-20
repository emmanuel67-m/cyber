const Home = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
       {/*  <section className="pt-32 pb-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About us</h1>
         { <div className="flex justify-center space-x-2 text-gray-300">
            <span>HOME</span>
            <span>/</span>
            <span>ABOUT US</span>
          </div>}
        </section> */}
  
        {/* Main Content Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-cyan-400 mb-4">About Our IT Technology Agency</div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Creative IT Technology & Cloud Computing Solutions.
                </h2>
                <p className="text-gray-300 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut lacus nec sapien molestie varius sit
                  amet convallus nunc tordiesqu in volutpatase turpis ultra faucibus.
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Velit dignissim molestrisque nope like
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    nisi ut ut felis congue nisi hendrerit
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Affordable Packages & Detailed Results
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    amet consectetur adipisicing elit
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://i.pinimg.com/474x/09/7a/d5/097ad525bffcb890b9f0287c0fe39d6b.jpg"
                  alt="Technology Solutions"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Awesome Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: "JOHAN HELAL", role: "EXECUTIVE OFFICER" },
                { name: "SEANS ALONG", role: "BUSINESS DEVELOPMENT" },
                { name: "JOSHA MICHAL", role: "UX/UI DESIGNER" },
                { name: "JOHAN WRIGHT", role: "HEAD OF MARKETING" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-6 rounded-xl backdrop-blur-sm"
                >
                  <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden">
                    <img
                      src="https://i.pinimg.com/474x/12/cb/ef/12cbef2de0f2d14bf0eae9bece773ad8.jpg"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-bold">{member.name}</h3>
                  <p className="text-cyan-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default Home
  
  