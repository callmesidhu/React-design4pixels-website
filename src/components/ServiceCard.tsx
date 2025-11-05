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
    <div className="flex flex-col justify-between w-full md:w-[314px] h-[363px] p-4 md:p-6 border-2 border-design-purple/60 rounded-3xl bg-white hover:shadow-lg transition-shadow">
      <div className="flex flex-col gap-2">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-design-purple font-extrabold text-2xl md:text-[32px] leading-tight max-w-[150px]">
            {title}
          </h3>
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-design-purple flex-shrink-0">
            <ArrowUpRight className="w-8 h-8 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-design-purple opacity-50"></div>

        {/* Description */}
        <p className="text-design-purple text-sm font-medium leading-relaxed text-justify">
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
