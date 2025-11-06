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

      <main className="w-full px-4 md:px-16 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <h1 className="font-stalions text-4xl md:text-6xl lg:text-[135px] leading-tight mb-8 md:mb-12" style={{ color: '#621FE9' }}>
            Contact Us
          </h1>

          {/* Content Container */}
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-20">
            {/* Left Side - Image and Email */}
            <div className="flex flex-col items-start gap-16 md:gap-28 w-full lg:w-auto">
              {/* Pointing Hand Image */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ca25f71eb2899ea078da3692b7c84845f1fcdc6f?width=1127"
                alt="Pointing hand"
                className="w-full max-w-[564px] h-auto object-contain"
              />

              {/* Contact Email */}
              <div className="flex flex-col gap-0">
                <p className="font-bold text-2xl md:text-3xl lg:text-[35px] leading-tight underline" style={{ color: '#621FE9' }}>
                  Mail for more
                </p>
                <p className="font-medium text-2xl md:text-3xl lg:text-[35px] leading-tight" style={{ color: '#621FE9' }}>
                  designfourpixels@gmail.com
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex flex-col gap-6 w-full lg:w-[720px]">
              {/* Name Field */}
              <div className="flex flex-col gap-5">
                <label
                  htmlFor="name"
                  className="font-bold text-2xl md:text-3xl lg:text-[39px] leading-tight"
                  style={{ color: '#621FE9' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="h-[90px] md:h-[114px] px-8 md:px-10 py-6 md:py-8 rounded-[36px] border-2 bg-white opacity-80 font-medium text-xl md:text-2xl lg:text-[31px] placeholder:opacity-50 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#621FE9', color: '#621FE9' }}
                  onFocus={(e) => e.target.style.outlineColor = '#621FE9'}
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-5">
                <label
                  htmlFor="email"
                  className="font-bold text-2xl md:text-3xl lg:text-[39px] leading-tight"
                  style={{ color: '#621FE9' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  className="h-[90px] md:h-[114px] px-8 md:px-10 py-6 md:py-8 rounded-[36px] border-2 bg-white opacity-80 font-medium text-xl md:text-2xl lg:text-[31px] placeholder:opacity-50 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#621FE9', color: '#621FE9' }}
                  onFocus={(e) => e.target.style.outlineColor = '#621FE9'}
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-5">
                <label
                  htmlFor="phone"
                  className="font-bold text-2xl md:text-3xl lg:text-[39px] leading-tight"
                  style={{ color: '#621FE9' }}
                >
                  Phone No:
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="h-[90px] md:h-[114px] px-8 md:px-10 py-6 md:py-8 rounded-[36px] border-2 bg-white opacity-80 font-medium text-xl md:text-2xl lg:text-[31px] placeholder:opacity-50 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#621FE9', color: '#621FE9' }}
                  onFocus={(e) => e.target.style.outlineColor = '#621FE9'}
                />
              </div>

              {/* Description Field */}
              <div className="flex flex-col gap-5">
                <label
                  htmlFor="description"
                  className="font-bold text-2xl md:text-3xl lg:text-[39px] leading-tight"
                  style={{ color: '#621FE9' }}
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={6}
                  className="h-[250px] md:h-[330px] px-8 md:px-10 py-6 md:py-8 rounded-[36px] border-2 bg-white opacity-80 font-medium text-xl md:text-2xl lg:text-[31px] placeholder:opacity-50 focus:outline-none focus:ring-2 resize-none"
                  style={{ borderColor: '#621FE9', color: '#621FE9' }}
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
