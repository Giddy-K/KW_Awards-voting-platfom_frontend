import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/vote', label: 'Vote' },
    { to: '/category', label: 'Category' },
    { to: '/aboutus', label: 'About Us' },
    { to: '/register', label: 'Register', isSpecial: true },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-7xl z-50">
      <div className="bg-[#DAA520] rounded-full shadow-lg px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-2xl hover:text-[#DAA520] transition duration-300">
          LOGO
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-4">
            {links.filter(link => !link.isSpecial).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white hover:text-[#DAA520] transition duration-300 px-3 py-2 rounded-full hover:bg-[#3D261E]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="border-l border-[#DAA520] pl-6">
            {links.filter(link => link.isSpecial).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[#DAA520] hover:text-white bg-[#3D261E] px-6 py-2 rounded-full transition duration-300 hover:bg-[#DAA520]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-transparent  md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="flex flex-col space-y-1">
            <span className={`block w-6 h-0.5 bg-7white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-[#2C1810] rounded-2xl p-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-white hover:text-[#DAA520] px-3 py-2 rounded-lg hover:bg-[#3D261E] transition duration-300 
                ${link.isSpecial ? 'text-[#DAA520] hover:bg-[#DAA520] hover:text-[#2C1810]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
