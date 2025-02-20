const Connect = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Connect With Us</h1>
          <div className="flex justify-center space-x-2 text-gray-300">
            <span>HOME</span>
            <span>/</span>
            <span>CONNECT</span>
          </div>
        </section>
  
        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  We'd love to hear from you! Whether you have a question about our services, need technical support, or
                  want to explore partnership opportunities, our team is here to help.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Our Office</h3>
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
                    <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM (PST)
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-gray-600 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-gray-600 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-gray-600 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-gray-600 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-cyan-400 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-300 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
  
        {/* Social Media Section */}
        <section className="py-20 bg-blue-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Connect on Social Media</h2>
            <p className="text-gray-300 mb-8">
              Stay up to date with our latest news, updates, and insights by following us on social media.
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { name: "Facebook", icon: "fab fa-facebook-f" },
                { name: "Twitter", icon: "fab fa-twitter" },
                { name: "LinkedIn", icon: "fab fa-linkedin-in" },
                { name: "Instagram", icon: "fab fa-instagram" },
                { name: "YouTube", icon: "fab fa-youtube" },
              ].map((platform, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-4 rounded-full hover:from-purple-500/50 hover:to-blue-500/50 transition-colors duration-300"
                  aria-label={platform.name}
                >
                  <i className={`${platform.icon} text-white text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </section>
  
        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "How can I get technical support?",
                  answer:
                    "For technical support, please visit our Support Center or contact our support team at support@technogen.com.",
                },
                {
                  question: "Do you offer partnership opportunities?",
                  answer:
                    "Yes, we're always open to exploring partnership opportunities. Please reach out to our partnerships team at partnerships@technogen.com.",
                },
                {
                  question: "Where can I find your latest product updates?",
                  answer:
                    "You can find our latest product updates on our blog, in our newsletter, or by following us on social media.",
                },
                {
                  question: "How can I apply for a job at Technogen?",
                  answer:
                    "You can view our current job openings and apply directly through our Careers page on our website.",
                },
                {
                  question: "What are your office hours for walk-in inquiries?",
                  answer:
                    "Our office is open for walk-in inquiries during our business hours, Monday to Friday from 9:00 AM to 6:00 PM (PST). However, we recommend scheduling an appointment for the best experience.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-6 rounded-xl backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default Connect
  
  