const FAQ = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">FAQ</h1>
          
        </section>
  
        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {[
                {
                  question: "What services do you offer?",
                  answer:
                    "We offer a comprehensive range of IT services including web development, mobile app development, cloud solutions, cybersecurity, and digital transformation consulting.",
                },
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise solution could take several months.",
                },
                {
                  question: "Do you provide ongoing support?",
                  answer:
                    "Yes, we offer various support and maintenance packages to ensure your solutions continue to perform optimally after launch.",
                },
                {
                  question: "What technologies do you use?",
                  answer:
                    "We use the latest technologies including React, Node.js, Python, AWS, Azure, and more, always choosing the best tool for each specific project.",
                },
                {
                  question: "How do you handle project pricing?",
                  answer:
                    "We offer flexible pricing models including fixed-price, time and materials, and retainer arrangements based on your project needs.",
                },
                {
                  question: "Can you help with existing projects?",
                  answer:
                    "Yes, we can help optimize, maintain, or expand existing projects. We'll first conduct a thorough assessment to understand your current setup.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-xl backdrop-blur-sm p-6"
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
  
  export default FAQ
  
  