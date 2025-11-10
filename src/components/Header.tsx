import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full px-4 sm:px-6 md:px-16 py-6 sm:py-8 md:py-12 relative">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <Link
            to="/"
            className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl"
            style={{ color: '#621FE9' }}
          >
            Home
          </Link>
          <Link
            to="#services"
            className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl opacity-50 hover:opacity-100"
            style={{ color: '#621FE9', transition: 'opacity 0.3s ease-in-out' }}
          >
            Services
          </Link>
          <Link
            to="#about"
            className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl opacity-50 hover:opacity-100"
            style={{ color: '#621FE9', transition: 'opacity 0.3s ease-in-out' }}
          >
            About Us
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border-2 z-50"
          style={{ borderColor: '#621FE9', color: '#621FE9' }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center gap-1 absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
          <img 
            src="/Subtract.png" 
            alt="Design4Pixels Logo" 
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
          />
        </div>

        {/* Connect Button */}
        <Link
          to="/contact"
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl hover:text-white"
          style={{ color: '#621FE9', borderColor: '#621FE9', transition: 'all 0.3s ease-in-out' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#621FE9';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#621FE9';
          }}
        >
          <span className="hidden sm:inline">Connect Us</span>
          <span className="sm:hidden">Connect</span>
          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={2} />
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <motion.nav
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-6 pt-8 pb-6 px-4"
            >
              <Link
                to="/"
                onClick={toggleMenu}
                className="font-semibold text-xl"
                style={{ color: '#621FE9' }}
              >
                Home
              </Link>
              <Link
                to="#services"
                onClick={toggleMenu}
                className="font-semibold text-xl opacity-50 hover:opacity-100"
                style={{ color: '#621FE9', transition: 'opacity 0.3s ease-in-out' }}
              >
                Services
              </Link>
              <Link
                to="#about"
                onClick={toggleMenu}
                className="font-semibold text-xl opacity-50 hover:opacity-100"
                style={{ color: '#621FE9', transition: 'opacity 0.3s ease-in-out' }}
              >
                About Us
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
