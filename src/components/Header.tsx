import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-8 md:px-16 py-8 md:py-12">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            to="/"
            className="font-semibold text-lg md:text-xl"
            style={{ color: '#621FE9' }}
          >
            Home
          </Link>
          <Link
            to="#services"
            className="font-semibold text-lg md:text-xl opacity-50 hover:opacity-100"
            style={{ color: '#621FE9', transition: 'opacity 0.3s ease-in-out' }}
          >
            Services
          </Link>
          <Link
            to="#about"
            className="font-semibold text-lg md:text-xl opacity-50 hover:opacity-100"
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
            className="h-12 md:h-16 w-auto"
          />
        </div>

        {/* Connect Button */}
        <Link
          to="/contact"
          className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border rounded-full font-semibold text-lg md:text-xl hover:text-white"
          style={{ color: '#621FE9', borderColor: '#621FE9', transition: 'all 0.3s ease-in-out' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#621FE9'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Connect Us
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
        </Link>
      </div>
    </header>
  );
}
