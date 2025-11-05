import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full px-8 md:px-16 py-12 md:py-16 mt-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 mb-8">
          {/* Logo */}
          <div className="flex flex-col items-center gap-1">
            <div className="relative w-[300px] md:w-[531px] h-[80px] md:h-[137px]">
              <svg
                viewBox="0 0 531 137"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M0 68.5C0 30.6538 30.6538 0 68.5 0H462.5C500.346 0 531 30.6538 531 68.5C531 106.346 500.346 137 462.5 137H68.5C30.6538 137 0 106.346 0 68.5Z"
                  fill="#621FE9"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 46 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[46px] h-[54px]"
                >
                  <path
                    d="M23 0L46 54H0L23 0Z"
                    fill="none"
                    stroke="#621FE9"
                    strokeWidth="21"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 border border-design-purple rounded-full text-design-purple font-semibold text-2xl md:text-3xl hover:bg-design-purple hover:text-white transition-colors"
            >
              Let's Talk
              <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-2 text-design-purple font-semibold opacity-50 text-lg md:text-xl flex-wrap justify-center">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Linked in
              </a>
              <span className="text-design-purple">|</span>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Twitter
              </a>
              <span className="text-design-purple">|</span>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Behance
              </a>
              <span className="text-design-purple">|</span>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 opacity-50 mb-4"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-start gap-4 text-gray-800 opacity-50">
          <a
            href="#"
            className="underline text-base md:text-xl font-medium hover:opacity-100 transition-opacity"
          >
            Privacy & cookie policy
          </a>
          <span className="hidden md:inline text-gray-800">|</span>
          <div className="flex items-center gap-2 text-base md:text-xl font-medium">
            <span>dseign4pixels</span>
            <span>© 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
