import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";

export interface TestimonialItem {
  name: string;
  designation: string;
  testimonial: string;
  avatarUrl?: string;
}

const AUTO_INTERVAL = 3000; // 3 seconds

export default function TestimonialsCarousel({
  items,
}: {
  items: TestimonialItem[];
}) {
  const [index, setIndex] = useState(0);

  const len = items.length;
  const prev = useMemo(() => (index - 1 + len) % len, [index, len]);
  const next = useMemo(() => (index + 1) % len, [index, len]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % len), AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [len]);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Track: previous | current | next */}
      <div className="w-full flex items-center justify-center gap-6 overflow-hidden px-2">
        {/* Previous (left, blurred) */}
        <motion.div
          key={`prev-${prev}`}
          initial={{ opacity: 0, x: -40, scale: 0.92 }}
          animate={{ opacity: 0.7, x: 0, scale: 0.95 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="hidden md:block flex-shrink-0"
          style={{ filter: "blur(4px)" }}
        >
          <div className="max-w-[750px]">
            <TestimonialCard
              name={items[prev].name}
              designation={items[prev].designation}
              testimonial={items[prev].testimonial}
            />
          </div>
        </motion.div>

        {/* Current (center, featured) */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`current-${index}`}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex-shrink-0"
          >
            <div className="mx-auto max-w-[900px]">
              <TestimonialCard
                featured
                name={items[index].name}
                designation={items[index].designation}
                testimonial={items[index].testimonial}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Next (right, blurred) */}
        <motion.div
          key={`next-${next}`}
          initial={{ opacity: 0, x: 40, scale: 0.92 }}
          animate={{ opacity: 0.7, x: 0, scale: 0.95 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="hidden md:block flex-shrink-0"
          style={{ filter: "blur(4px)" }}
        >
          <div className="max-w-[750px]">
            <TestimonialCard
              name={items[next].name}
              designation={items[next].designation}
              testimonial={items[next].testimonial}
            />
          </div>
        </motion.div>
      </div>

      {/* Indicators (progress + dots) */}
      <div className="flex items-center gap-3">
        <div className="relative w-[120px] h-[18px] rounded-full border-2" style={{ borderColor: "#621FE9" }}>
          <motion.div
            key={index}
            initial={{ width: 0 }}
            animate={{ width: "45%" }}
            transition={{ duration: AUTO_INTERVAL / 1000 - 0.3, ease: "linear" }}
            className="absolute left-0 top-0 bottom-0 rounded-full"
            style={{ backgroundColor: "#C9C9C9" }}
          />
        </div>
        {Array.from({ length: len }).map((_, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full border-2"
            style={{ borderColor: "#621FE9", backgroundColor: i === index ? "#621FE9" : "transparent" }}
          />
        ))}
      </div>
    </div>
  );
}
