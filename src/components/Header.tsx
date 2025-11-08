import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-4 sm:px-6 md:px-16 py-6 sm:py-8 md:py-12">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Navigation */}
        <nav className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
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

        {/* Logo */}
        <div className="flex flex-col items-center gap-1">
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
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#621FE9'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <span className="hidden sm:inline">Connect Us</span>
          <span className="sm:hidden">Connect</span>
          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={2} />
        </Link>
      </div>
    </header>
  );
}
