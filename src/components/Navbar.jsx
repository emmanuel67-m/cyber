import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900/90 to-purple-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://i.pinimg.com/474x/00/a1/a5/00a1a5c02d0b1a31d90855197f601719.jpg"
                alt="Technogen"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-white hover:text-cyan-400 px-3 py-2">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-cyan-400 px-3 py-2">
                About Us
              </Link>
              <Link to="/services" className="text-white hover:text-cyan-400 px-3 py-2">
                Services
              </Link>
              <Link to="/projects" className="text-white hover:text-cyan-400 px-3 py-2">
                Projects
              </Link>
              <Link to="/faq" className="text-white hover:text-cyan-400 px-3 py-2">
                FAQ
              </Link>
              <Link to="/pricing" className="text-white hover:text-cyan-400 px-3 py-2">
                Pricing
              </Link>
              <Link to="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

