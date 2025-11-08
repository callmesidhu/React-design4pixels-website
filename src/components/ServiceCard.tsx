import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-between w-full sm:w-[280px] md:w-[300px] lg:w-[314px] h-[320px] sm:h-[340px] md:h-[363px] p-4 sm:p-5 md:p-6 border-2 rounded-2xl sm:rounded-3xl bg-white hover:shadow-lg" style={{ borderColor: '#621FE9', transition: 'box-shadow 0.3s ease-in-out' }}>
      <div className="flex flex-col gap-2">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-extrabold text-xl sm:text-2xl md:text-[28px] lg:text-[32px] leading-tight max-w-[130px] sm:max-w-[150px]" style={{ color: '#621FE9' }}>
            {title}
          </h3>
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex-shrink-0" style={{ backgroundColor: '#621FE9' }}>
            <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px opacity-50" style={{ backgroundColor: '#621FE9' }}></div>

        {/* Description */}
        <p className="text-xs sm:text-sm font-medium leading-relaxed text-justify" style={{ color: '#621FE9' }}>
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="flex items-center justify-center mt-3 sm:mt-4 rounded-lg overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
