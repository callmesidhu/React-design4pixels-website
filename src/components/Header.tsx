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
            className="text-design-purple font-semibold text-lg md:text-xl"
          >
            Home
          </Link>
          <Link
            to="#services"
            className="text-design-purple font-semibold text-lg md:text-xl opacity-50 hover:opacity-100 transition-opacity"
          >
            Services
          </Link>
          <Link
            to="#about"
            className="text-design-purple font-semibold text-lg md:text-xl opacity-50 hover:opacity-100 transition-opacity"
          >
            About Us
          </Link>
        </nav>

        {/* Logo */}
        <div className="flex flex-col items-center gap-1">
          <div className="relative w-[200px] md:w-[315px] h-[50px] md:h-[81px]">
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
                className="w-[27px] md:w-[46px] h-[32px] md:h-[54px]"
              >
                <path
                  d="M23 0L46 54H0L23 0Z"
                  fill="none"
                  stroke="#621FE9"
                  strokeWidth="12"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Connect Button */}
        <Link
          to="/contact"
          className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-design-purple rounded-full text-design-purple font-semibold text-lg md:text-xl hover:bg-design-purple hover:text-white transition-colors"
        >
          Connect Us
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
        </Link>
      </div>
    </header>
  );
}
