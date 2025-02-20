const Contact = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
    
        </section>
  
        {/* Contact Form Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  Have a question or want to work together? We'd love to hear from you. Fill out the form and we'll be in
                  touch as soon as possible.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Office Location</h3>
                    <p className="text-gray-300">
                      123 Tech Street
                      <br />
                      Silicon Valley, CA 94025
                      <br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Contact Info</h3>
                    <p className="text-gray-300">
                      Phone: +1 (234) 567-8900
                      <br />
                      Email: hello@technogen.com
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Working Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-xl backdrop-blur-sm p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-gray-600 text-white focus:outline-none focus:border-cyan-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-gray-600 text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-gray-600 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-gray-600 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-gray-600 text-white focus:outline-none focus:border-cyan-400 h-32"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-cyan-400 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-500 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default Contact
  
  