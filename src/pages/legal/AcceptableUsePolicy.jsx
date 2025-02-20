const AcceptableUsePolicy = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Acceptable Use Policy</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-gray-300">
            <p className="mb-4">
              This Acceptable Use Policy ("AUP") outlines the rules and guidelines for using Technogen's services and
              platforms.
            </p>
            <h2 className="text-2xl font-semibold text-white mt-6 mb-4">1. Prohibited Activities</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Engaging in any unlawful activities</li>
              <li>Distributing malware or viruses</li>
              <li>Attempting to gain unauthorized access to systems or data</li>
              <li>Sending unsolicited bulk emails (spam)</li>
            </ul>
            <h2 className="text-2xl font-semibold text-white mt-6 mb-4">2. Content Guidelines</h2>
            <p className="mb-4">
              Users must not upload, post, or transmit content that is illegal, harmful, threatening, abusive, or
              otherwise objectionable.
            </p>
            <h2 className="text-2xl font-semibold text-white mt-6 mb-4">3. Security</h2>
            <p className="mb-4">
              Users are responsible for maintaining the security of their accounts and must not share login credentials.
            </p>
            <h2 className="text-2xl font-semibold text-white mt-6 mb-4">4. Compliance</h2>
            <p className="mb-4">
              Violation of this AUP may result in suspension or termination of service. Technogen reserves the right to
              report illegal activities to appropriate authorities.
            </p>
            <p className="mt-8 text-sm">By using our services, you agree to comply with this Acceptable Use Policy.</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default AcceptableUsePolicy
  
  