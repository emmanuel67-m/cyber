import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-purple-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://i.pinimg.com/474x/00/a1/a5/00a1a5c02d0b1a31d90855197f601719.jpg"
              alt="Technogen"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm">Empowering innovation through cutting-edge technology solutions.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-cyan-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">PRIVACY & TOS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/advertiser-agreement" className="text-gray-300 hover:text-cyan-400">
                  Advertiser Agreement
                </Link>
              </li>
              <li>
                <Link to="/legal/acceptable-use-policy" className="text-gray-300 hover:text-cyan-400">
                  Acceptable Use Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy-policy" className="text-gray-300 hover:text-cyan-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/technology-policy" className="text-gray-300 hover:text-cyan-400">
                  Technology Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/developer-agreement" className="text-gray-300 hover:text-cyan-400">
                  Developer Agreement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">NAVIGATE</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/advertisers" className="text-gray-300 hover:text-cyan-400">
                  Advertisers
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-gray-300 hover:text-cyan-400">
                  Developers
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-cyan-400">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/company" className="text-gray-300 hover:text-cyan-400">
                  Company
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-gray-300 hover:text-cyan-400">
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-gray-300">
              <li>www.technogen.com</li>
              <li>hello@technogen.com</li>
              <li>+1 (234) 567-8900</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Technogen. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

