const Resources = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Resources</h1>
          <div className="flex justify-center space-x-2 text-gray-300">
            <span>HOME</span>
            <span>/</span>
            <span>RESOURCES</span>
          </div>
        </section>
  
        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Knowledge Hub</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive collection of resources designed to help you make the most of our platform and
                stay updated with the latest in technology and digital innovation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Documentation",
                  description: "Detailed guides and API references for developers and users.",
                  icon: "📚",
                },
                {
                  title: "Tutorials",
                  description: "Step-by-step tutorials to help you get started and master our platform.",
                  icon: "🎓",
                },
                {
                  title: "Case Studies",
                  description: "Real-world examples of how businesses have succeeded with our solutions.",
                  icon: "📊",
                },
                {
                  title: "Webinars",
                  description: "Live and on-demand webinars covering various topics and best practices.",
                  icon: "🎥",
                },
                {
                  title: "Blog",
                  description: "Insights, news, and updates from our team of experts.",
                  icon: "✍️",
                },
                {
                  title: "Community Forum",
                  description: "Connect with other users, share ideas, and get help from the community.",
                  icon: "💬",
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-6 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{resource.title}</h3>
                  <p className="text-gray-300">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Featured Resources Section */}
        <section className="py-20 bg-blue-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Resources</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Getting Started Guide",
                  description: "A comprehensive guide to help you get up and running with our platform quickly.",
                  link: "#",
                },
                {
                  title: "API Best Practices",
                  description: "Learn how to make the most of our APIs with these best practices and tips.",
                  link: "#",
                },
                {
                  title: "Security Whitepaper",
                  description: "Understand our robust security measures and how we protect your data.",
                  link: "#",
                },
                {
                  title: "Product Roadmap",
                  description: "Get a sneak peek at upcoming features and improvements to our platform.",
                  link: "#",
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-6 rounded-xl backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <a href={resource.link} className="text-cyan-400 hover:underline">
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Newsletter Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest updates, tips, and exclusive content directly in your
              inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-blue-900/50 border border-gray-600 text-white focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="bg-cyan-400 text-blue-900 font-bold py-2 px-6 rounded-lg hover:bg-cyan-300 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    )
  }
  
  export default Resources
  
  