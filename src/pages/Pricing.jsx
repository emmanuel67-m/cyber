const Pricing = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Pricing Plans</h1>
        
        </section>
  
        {/* Pricing Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$499",
                  period: "per month",
                  features: ["5 Projects", "10GB Storage", "Basic Support", "48h Response Time", "Basic Analytics"],
                  highlighted: false,
                },
                {
                  name: "Professional",
                  price: "$999",
                  period: "per month",
                  features: [
                    "15 Projects",
                    "50GB Storage",
                    "Priority Support",
                    "24h Response Time",
                    "Advanced Analytics",
                    "Custom Solutions",
                  ],
                  highlighted: true,
                },
                {
                  name: "Enterprise",
                  price: "$1999",
                  period: "per month",
                  features: [
                    "Unlimited Projects",
                    "500GB Storage",
                    "24/7 Support",
                    "1h Response Time",
                    "Premium Analytics",
                    "Custom Solutions",
                    "Dedicated Manager",
                  ],
                  highlighted: false,
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`${
                    plan.highlighted
                      ? "bg-gradient-to-br from-cyan-600/50 to-blue-600/50 transform scale-105"
                      : "bg-gradient-to-br from-purple-600/30 to-blue-600/30"
                  } rounded-xl backdrop-blur-sm p-8 relative`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-cyan-400 text-blue-900 text-sm font-bold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300">/{plan.period}</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-center justify-center">
                          <span className="mr-2">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`${
                        plan.highlighted
                          ? "bg-cyan-400 text-blue-900 hover:bg-cyan-500"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      } px-8 py-3 rounded-lg font-bold transition-colors duration-300`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default Pricing
  
  