import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16 mt-12 sm:mt-16 md:mt-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-6 sm:mb-8">
          {/* Logo */}
          <div className="flex flex-col items-center gap-1">
            <img 
              src="/Subtract.png" 
              alt="Design4Pixels Logo" 
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
            />
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col items-center md:items-end gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border rounded-full font-semibold text-xl sm:text-2xl md:text-3xl hover:text-white"
              style={{ borderColor: '#621FE9', color: '#621FE9', transition: 'all 0.3s ease-in-out' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#621FE9'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-1.5 sm:gap-2 font-semibold opacity-50 text-sm sm:text-base md:text-lg lg:text-xl flex-wrap justify-center" style={{ color: '#621FE9' }}>
              <a href="#" style={{ transition: 'opacity 0.3s ease-in-out' }} className="hover:opacity-100">
                Linked in
              </a>
              <span style={{ color: '#621FE9' }}>|</span>
              <a href="#" style={{ transition: 'opacity 0.3s ease-in-out' }} className="hover:opacity-100">
                Twitter
              </a>
              <span style={{ color: '#621FE9' }}>|</span>
              <a href="#" style={{ transition: 'opacity 0.3s ease-in-out' }} className="hover:opacity-100">
                Behance
              </a>
              <span style={{ color: '#621FE9' }}>|</span>
              <a href="#" style={{ transition: 'opacity 0.3s ease-in-out' }} className="hover:opacity-100">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px opacity-50 mb-3 sm:mb-4" style={{ backgroundColor: '#621FE9' }}></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-start gap-3 sm:gap-4 opacity-50" >
          <a
            href="#"
            className="underline text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:opacity-100"
            style={{ transition: 'opacity 0.3s ease-in-out' }}
          >
            Privacy & cookie policy
          </a>
          <span className="hidden md:inline" style={{ color: '#621FE9' }}>|</span>
          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
            <span>dseign4pixels</span>
            <span>© 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
