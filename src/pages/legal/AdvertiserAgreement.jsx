const AdvertiserAgreement = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Advertiser Agreement</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-gray-300">
            <p className="mb-4">
              This Advertiser Agreement ("Agreement") is entered into between Technogen ("Company") and the advertiser
              ("Advertiser").
            </p>
            <h2 className="text-2xl font-semibold text-white mt-6 mb-4">1. Advertising Services</h2>
            <p className="mb-4">
              The Company agrees to provide advertising services to the Advertiser as specified in the advertising order
              or insertion order.
            </p>
            <h2 className="text-2xl font-semibold text-white mt-6 mb-4">2. Payment Terms</h2>
            <p className="mb-4">
              Advertiser agrees to pay for the advertising services according to the rates and payment terms set forth in
              the advertising order.
            </p>
            <h2 className="text-2xl font-semibold text-white mt-6 mb-4">3. Content Restrictions</h2>
            <p className="mb-4">
              Advertiser is solely responsible for the content of its advertisements and agrees that such content will
              comply with all applicable laws and regulations.
            </p>
            <h2 className="text-2xl font-semibold text-white mt-6 mb-4">4. Termination</h2>
            <p className="mb-4">
              Either party may terminate this Agreement with 30 days written notice. Ongoing campaigns will be honored
              until completion.
            </p>
            <p className="mt-8 text-sm">
              By using our advertising services, you agree to the terms outlined in this Advertiser Agreement.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default AdvertiserAgreement
  
  