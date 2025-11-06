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
    <div className="flex flex-col justify-between w-full md:w-[314px] h-[363px] p-4 md:p-6 border-2 rounded-3xl bg-white hover:shadow-lg" style={{ borderColor: '#621FE9', transition: 'box-shadow 0.3s ease-in-out' }}>
      <div className="flex flex-col gap-2">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-extrabold text-2xl md:text-[32px] leading-tight max-w-[150px]" style={{ color: '#621FE9' }}>
            {title}
          </h3>
          <div className="flex items-center justify-center w-16 h-16 rounded-full flex-shrink-0" style={{ backgroundColor: '#621FE9' }}>
            <ArrowUpRight className="w-8 h-8 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px opacity-50" style={{ backgroundColor: '#621FE9' }}></div>

        {/* Description */}
        <p className="text-sm font-medium leading-relaxed text-justify" style={{ color: '#621FE9' }}>
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="flex items-center justify-center mt-4 rounded-lg overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
