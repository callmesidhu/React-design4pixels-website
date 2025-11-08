import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>
        {`
          input::placeholder,
          textarea::placeholder {
            color: #621FE9 !important;
            opacity: 0.5;
          }
        `}
      </style>
      <Header />

      <main className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <h1 className="font-stalions text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[135px] leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12" style={{ color: '#621FE9' }}>
            Contact Us
          </h1>

          {/* Content Container */}
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            {/* Left Side - Image and Email */}
            <div className="flex flex-col items-start gap-12 sm:gap-16 md:gap-20 lg:gap-28 w-full lg:w-auto">
              {/* Pointing Hand Image */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ca25f71eb2899ea078da3692b7c84845f1fcdc6f?width=1127"
                alt="Pointing hand"
                className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[564px] h-auto object-contain"
              />

              {/* Contact Email */}
              <div className="flex flex-col gap-0">
                <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[35px] leading-tight underline" style={{ color: '#621FE9' }}>
                  Mail for more
                </p>
                <p className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-[35px] leading-tight break-all" style={{ color: '#621FE9' }}>
                  designfourpixels@gmail.com
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full lg:w-[600px] xl:w-[720px]">
              {/* Name Field */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                <label
                  htmlFor="name"
                  className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[39px] leading-tight"
                  style={{ color: '#621FE9' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="h-[70px] sm:h-[80px] md:h-[90px] lg:h-[114px] px-6 sm:px-7 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-8 rounded-[28px] sm:rounded-[32px] md:rounded-[36px] border-2 bg-white opacity-80 font-medium text-lg sm:text-xl md:text-2xl lg:text-[31px] placeholder:opacity-50 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#621FE9', color: '#621FE9', transition: 'all 0.3s ease-in-out' }}
                  onFocus={(e) => e.target.style.outlineColor = '#621FE9'}
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                <label
                  htmlFor="email"
                  className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[39px] leading-tight"
                  style={{ color: '#621FE9' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  className="h-[70px] sm:h-[80px] md:h-[90px] lg:h-[114px] px-6 sm:px-7 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-8 rounded-[28px] sm:rounded-[32px] md:rounded-[36px] border-2 bg-white opacity-80 font-medium text-lg sm:text-xl md:text-2xl lg:text-[31px] placeholder:opacity-50 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#621FE9', color: '#621FE9', transition: 'all 0.3s ease-in-out' }}
                  onFocus={(e) => e.target.style.outlineColor = '#621FE9'}
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                <label
                  htmlFor="phone"
                  className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[39px] leading-tight"
                  style={{ color: '#621FE9' }}
                >
                  Phone No:
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="h-[70px] sm:h-[80px] md:h-[90px] lg:h-[114px] px-6 sm:px-7 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-8 rounded-[28px] sm:rounded-[32px] md:rounded-[36px] border-2 bg-white opacity-80 font-medium text-lg sm:text-xl md:text-2xl lg:text-[31px] placeholder:opacity-50 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#621FE9', color: '#621FE9', transition: 'all 0.3s ease-in-out' }}
                  onFocus={(e) => e.target.style.outlineColor = '#621FE9'}
                />
              </div>

              {/* Description Field */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                <label
                  htmlFor="description"
                  className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[39px] leading-tight"
                  style={{ color: '#621FE9' }}
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={6}
                  className="h-[200px] sm:h-[230px] md:h-[250px] lg:h-[330px] px-6 sm:px-7 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-8 rounded-[28px] sm:rounded-[32px] md:rounded-[36px] border-2 bg-white opacity-80 font-medium text-lg sm:text-xl md:text-2xl lg:text-[31px] placeholder:opacity-50 focus:outline-none focus:ring-2 resize-none"
                  style={{ borderColor: '#621FE9', color: '#621FE9', transition: 'all 0.3s ease-in-out' }}
                  onFocus={(e) => e.target.style.outlineColor = '#621FE9'}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
