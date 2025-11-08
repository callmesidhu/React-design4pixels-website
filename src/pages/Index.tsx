import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Wand2 } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative px-4 md:px-16 py-12 md:py-20">
          <div className="max-w-[1400px] mx-auto">
            {/* Decorative Stars */}
            <div className="relative flex items-center justify-between mb-8 md:mb-12 px-4">
              {/* Left Star */}
              <svg
                width="120"
                height="120"
                viewBox="0 0 220 178"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
              >
                <path
                  d="M125.936 161.767C128.142 162.326 130.381 160.974 131.011 158.787C143.934 113.973 173.074 109.987 198.515 115.412C200.743 115.888 202.985 114.56 203.545 112.351C204.105 110.142 202.767 107.907 200.581 107.263C175.628 99.9126 151.907 82.5244 161.896 36.9666C162.384 34.7434 161.06 32.4882 158.854 31.9289C156.648 31.3695 154.409 32.7214 153.787 34.9107C141.047 79.753 115.08 84.5531 89.9657 79.2176C87.7366 78.7441 85.4926 80.0701 84.9326 82.2791C84.3725 84.4881 85.7144 86.7237 87.9009 87.366C113.021 94.7453 133.106 111.194 122.903 156.731C122.405 158.952 123.73 161.207 125.936 161.767Z"
                  fill="#FEF689"
                />
                <g filter="url(#filter0_f_left)">
                  <path
                    d="M33.1723 138.248C34.446 138.571 35.7381 137.79 36.1019 136.528C43.5819 110.566 60.4067 108.239 75.0933 111.367C76.3844 111.642 77.6829 110.873 78.0074 109.594C78.3318 108.314 77.5564 107.02 76.2902 106.646C61.8873 102.399 48.2033 92.3375 53.9962 65.9478C54.2779 64.6644 53.5138 63.3624 52.2402 63.0395C50.9665 62.7166 49.6739 63.4971 49.315 64.7611C41.9399 90.739 26.9467 93.5356 12.4494 90.4598C11.1581 90.1859 9.85827 90.9539 9.53386 92.2335C9.20945 93.5131 9.98672 94.808 11.2531 95.1804C25.7517 99.4438 37.3373 108.963 31.4216 135.341C31.134 136.623 31.8987 137.925 33.1723 138.248Z"
                    fill="#FEF689"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_left"
                    x="6.67901"
                    y="60.1854"
                    width="74.1835"
                    height="80.9168"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="1.3906"
                      result="effect1_foregroundBlur"
                    />
                  </filter>
                </defs>
              </svg>

              {/* Right Star */}
              <svg
                width="120"
                height="120"
                viewBox="0 0 220 178"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
              >
                <path
                  d="M94.0681 161.767C91.8618 162.326 89.6236 160.974 88.993 158.787C76.0706 113.973 46.9302 109.987 21.4896 115.412C19.2608 115.888 17.0191 114.56 16.459 112.351C15.899 110.142 17.2375 107.907 19.4235 107.263C44.3761 99.9126 68.0975 82.5244 58.1077 36.9666C57.6202 34.7434 58.9438 32.4882 61.15 31.9289C63.3562 31.3695 65.5953 32.7214 66.2173 34.9107C78.9576 79.753 104.925 84.5531 130.038 79.2176C132.268 78.7441 134.512 80.0701 135.072 82.2791C135.632 84.4881 134.29 86.7237 132.103 87.366C106.984 94.7453 86.898 111.194 97.1013 156.731C97.5989 158.952 96.2743 161.207 94.0681 161.767Z"
                  fill="#FEF689"
                />
                <g filter="url(#filter0_f_right)">
                  <path
                    d="M186.832 138.248C185.558 138.571 184.266 137.79 183.902 136.528C176.422 110.566 159.597 108.239 144.911 111.367C143.62 111.642 142.321 110.873 141.997 109.594C141.672 108.314 142.448 107.02 143.714 106.646C158.117 102.399 171.801 92.3375 166.008 65.9478C165.726 64.6644 166.49 63.3624 167.764 63.0395C169.038 62.7166 170.33 63.4971 170.689 64.7611C178.064 90.739 193.057 93.5356 207.555 90.4598C208.846 90.1859 210.146 90.9539 210.47 92.2335C210.795 93.5131 210.017 94.808 208.751 95.1804C194.252 99.4438 182.667 108.963 188.583 135.341C188.87 136.623 188.105 137.925 186.832 138.248Z"
                    fill="#FEF689"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_right"
                    x="139.142"
                    y="60.1854"
                    width="74.1835"
                    height="80.9168"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="1.3906"
                      result="effect1_foregroundBlur"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col items-center gap-6 text-center">
              <p className="font-stalions text-3xl md:text-5xl lg:text-[66px] leading-tight opacity-60" style={{ color: '#621FE9' }}>
                Where Every Pixel Tells a Story
              </p>

              {/* Main Headline */}
              <div className="flex flex-col items-center gap-2 md:gap-0 md:flex-row md:items-end md:justify-center w-full max-w-5xl">
                {/* Level up */}
                <div className="relative">
                  <svg
                    viewBox="0 0 556 201"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[280px] md:w-[450px] lg:w-[556px] h-auto"
                  >
                    <path
                      d="M20.7893 145.247L0.932712 51.784C-4.60918 25.6987 15.2471 1.12016 41.9146 1.05591L480.141 0.000149834C499.838 -0.0473044 516.922 13.5999 521.227 32.8209L542.396 127.34C548.275 153.588 528.31 178.519 501.412 178.519L61.8723 178.519C42.0401 178.519 24.9107 164.647 20.7893 145.247Z"
                      fill="#FEF689"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="font-stalions text-5xl md:text-7xl lg:text-[174px] leading-none pb-2 md:pb-4" style={{ color: '#621FE9' }}>
                      Level up
                    </h1>
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="relative w-[80px] h-[50px] md:w-[120px] md:h-[75px] lg:w-[160px] lg:h-[103px] flex-shrink-0 mb-0 md:mb-8 lg:mb-12">
                  <div className="w-full h-full rounded-full border-2 border-[#8A38F5] bg-design-yellow"></div>
                  <svg
                    viewBox="0 0 77 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] md:w-[40px] lg:w-[52px] h-auto"
                  >
                    <path
                      d="M3.81971 29.6014H72.5713M72.5713 29.6014L46.7894 55.3832M72.5713 29.6014L46.7894 3.81952"
                      stroke="#621FE9"
                      strokeWidth="7.63906"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* with */}
                <h1 className="font-stalions text-5xl md:text-7xl lg:text-[174px] leading-none pb-2 md:pb-4" style={{ color: '#621FE9' }}>
                  with
                </h1>
              </div>

              <h1
                className="font-stalions text-5xl md:text-7xl lg:text-[174px] leading-none"
                style={{
                  color: '#621FE9',
                  WebkitTextStroke: "2px #FFF",
                  paintOrder: "stroke fill",
                }}
              >
                our design class
              </h1>
            </div>

            {/* Create Magic Button */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mt-12 md:mt-16">
              <button 
                className="flex items-center gap-3 md:gap-4 px-8 md:px-12 py-4 md:py-6 border rounded-full transform -rotate-[13deg] hover:rotate-0" 
                style={{ 
                  borderColor: '#621FE9',
                  transition: 'all 0.3s ease-in-out'
                }} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#621FE9';
                  const span = e.currentTarget.querySelector('span');
                  if (span) span.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  const span = e.currentTarget.querySelector('span');
                  if (span) span.style.color = '#621FE9';
                }}
              >
                <span className="font-semibold text-xl md:text-3xl lg:text-[37px] leading-tight" style={{ color: '#621FE9', transition: 'color 0.3s ease-in-out' }}>
                  Create Magic
                </span>
              </button>
              <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-[95px] lg:h-[95px] flex-shrink-0 transform -rotate-[14deg]">
                <div className="w-full h-full rounded-full" style={{ backgroundColor: '#621FE9' }}></div>
                <Wand2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/81a84d6cb4d3eb5701b585e2151dff6fa4d43b7a?width=322"
                alt="Pointing hand"
                className="w-24 h-24 md:w-32 md:h-32 lg:w-[161px] lg:h-[161px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="px-4 md:px-16 py-12 md:py-20 mt-12 md:mt-20"
        >
          <div className="max-w-[1400px] border-2 rounded-[70px] bg-white hover:shadow-lg" style={{ borderColor: '#621FE9', transition: 'box-shadow 0.3s ease-in-out' }}>
            <div className="border-3 rounded-[71px] p-8 md:p-12 lg:p-16" style={{ borderColor: 'rgba(98, 31, 233, 0.4)' }}>
              <div className="flex flex-col items-center gap-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 w-full ">
                  <h2 className="font-stalions text-4xl md:text-6xl lg:text-[135px] leading-tight" style={{ color: '#621FE9' }}>
                    Our Services
                  </h2>
                  <p className="font-medium text-lg md:text-2xl lg:text-[30px] leading-relaxed opacity-50 text-center md:text-right max-w-md" style={{ color: '#621FE9' }}>
                    Here are the wide range of services that we provide
                  </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                  <ServiceCard
                    title="Company Branding"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/d273c753abaad3e66c2dfee48d02eccbd47897c5?width=586"
                  />
                  <ServiceCard
                    title="Company Branding"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/d273c753abaad3e66c2dfee48d02eccbd47897c5?width=586"
                  />
                  <ServiceCard
                    title="Company Branding"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/d273c753abaad3e66c2dfee48d02eccbd47897c5?width=586"
                  />
                  <ServiceCard
                    title="Company Branding"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/d273c753abaad3e66c2dfee48d02eccbd47897c5?width=586"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="px-4 md:px-16 py-12 md:py-20 mt-12 md:mt-20"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-6">
              <h2 className="font-stalions text-4xl md:text-6xl lg:text-[135px] leading-tight" style={{ color: '#621FE9' }}>
                About Us
              </h2>
              <p className="font-medium text-lg md:text-2xl lg:text-[30px] leading-relaxed text-justify" style={{ color: '#621FE9' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Testimonials */}
            <div className="mt-12 md:mt-20 flex flex-col items-center gap-8">
              <div className="flex flex-col lg:flex-row items-center gap-8 w-full justify-center">
                <TestimonialCard
                  name="Name"
                  designation="Designation"
                  testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                />
                <TestimonialCard
                  name="Name"
                  designation="Designation"
                  testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  featured
                />
                <TestimonialCard
                  name="Name"
                  designation="Designation"
                  testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                />
              </div>

              {/* Carousel Indicators */}
              <div className="flex items-center gap-2">
                <div className="w-[158px] h-[29px] rounded-full bg-gradient-to-r from-design-cream via-gray-400 to-design-cream border-3 border-design-purple"></div>
                <div className="w-[29px] h-[29px] rounded-full bg-design-cream border-3 border-design-purple"></div>
                <div className="w-[29px] h-[29px] rounded-full bg-design-cream border-3 border-design-purple"></div>
                <div className="w-[29px] h-[29px] rounded-full bg-design-cream border-3 border-design-purple"></div>
                <div className="w-[29px] h-[29px] rounded-full bg-design-cream border-3 border-design-purple"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="px-4 md:px-16 py-12 md:py-20 mt-12 md:mt-20">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="relative inline-block">
              <h2 className="text-gray-800 font-extrabold text-4xl md:text-6xl lg:text-[101px] leading-tight">
                Keep creating until you find your own{" "}
                <span className="text-design-purple">audience.</span>
              </h2>
              <div className="absolute top-0 left-[15%] md:left-[20%] w-[200px] md:w-[300px] lg:w-[446px] h-[60px] md:h-[90px] lg:h-[126px] border-4 border-design-yellow rounded-[43px] -z-10"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
