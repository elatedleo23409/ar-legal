import React from "react";
import Link from "next/link";

interface PracticeAreaProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}

const PracticeArea: React.FC<PracticeAreaProps> = ({
  slug,
  title,
  description,
  icon,
  index,
}) => {
  return (
    <Link
      href={`/practice-areas/${slug}`}
      className="block bg-paper-50 border border-ink-200 hover:border-gold-400 transition-all duration-500 group relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-0 left-0 h-px w-0 bg-gold-400 group-hover:w-full transition-all duration-500"
      ></div>
      <div className="p-10">
        <div className="flex items-baseline justify-between mb-8">
          <span className="material-symbols-outlined text-4xl text-ink-900 group-hover:text-gold-400 transition-colors duration-300">
            {icon}
          </span>
          <span className="font-eyebrow text-ink-400">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-2xl font-serif font-medium mb-4 text-ink-900 tracking-tight">
          {title}
        </h3>
        <div className="h-px w-8 bg-gold-400 mb-5"></div>
        <p className="text-ink-600 mb-8 leading-relaxed font-serif">
          {description}
        </p>
        <span className="inline-flex items-center text-ink-900 font-serif text-sm tracking-wide">
          Read More
          <span className="material-symbols-outlined ml-1 text-base group-hover:translate-x-1 transition-transform duration-300">
            arrow_forward
          </span>
        </span>
      </div>
    </Link>
  );
};

export default PracticeArea;
