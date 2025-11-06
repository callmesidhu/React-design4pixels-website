import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  designation: string;
  testimonial: string;
  avatarUrl?: string;
  featured?: boolean;
}

export default function TestimonialCard({
  name,
  designation,
  testimonial,
  avatarUrl,
  featured = false,
}: TestimonialCardProps) {
  if (featured) {
    return (
      <div className="flex flex-col gap-8 p-8 md:p-12 border-3 rounded-[50px] bg-design-cream w-full max-w-[900px]" style={{ borderColor: '#621FE9' }}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6 md:gap-12">
            {avatarUrl && (
              <img
                src={avatarUrl}
                alt={name}
                className="w-20 h-20 md:w-[86px] md:h-[86px] rounded-full object-cover"
              />
            )}
            {!avatarUrl && (
              <div className="w-20 h-20 md:w-[86px] md:h-[86px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#621FE9' }}>
                <svg
                  viewBox="0 0 86 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <rect width="86" height="86" rx="43" fill="#621FE9" />
                  <path
                    d="M43.5894 90.2751C69.4764 90.2751 90.4619 69.2896 90.4619 43.4026C90.4619 17.5156 69.4764 -3.46997 43.5894 -3.46997C17.7024 -3.46997 -3.2832 17.5156 -3.2832 43.4026C-3.2832 69.2896 17.7024 90.2751 43.5894 90.2751Z"
                    fill="#96D7FF"
                  />
                </svg>
              </div>
            )}
            <div>
              <h4 className="font-bold text-3xl md:text-[46px] leading-tight" style={{ color: '#621FE9' }}>
                {name}
              </h4>
              <p className="font-medium text-xl md:text-[33px] leading-tight" style={{ color: '#621FE9' }}>
                {designation}
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-8 h-8 md:w-10 md:h-10 fill-[#E0C113] text-[#E0C113]"
              />
            ))}
          </div>
        </div>
        <p className="text-lg md:text-2xl leading-relaxed text-justify" style={{ color: '#621FE9' }}>
          {testimonial}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-8 md:p-12 border-2 rounded-[41px] bg-design-cream blur-[4px] opacity-70 w-full max-w-[750px]" style={{ borderColor: '#621FE9' }}>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-8">
          <div className="w-[71px] h-[71px] rounded-full" style={{ backgroundColor: '#621FE9' }}></div>
          <div>
            <h4 className="font-bold text-3xl md:text-[38px] leading-tight" style={{ color: '#621FE9' }}>
              {name}
            </h4>
            <p className="font-medium text-xl md:text-[27px] leading-tight" style={{ color: '#621FE9' }}>
              {designation}
            </p>
          </div>
        </div>
      </div>
      <p className="text-base md:text-xl leading-relaxed text-justify" style={{ color: '#621FE9' }}>
        {testimonial}
      </p>
    </div>
  );
}
