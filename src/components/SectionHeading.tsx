import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) => {
  const alignment = align === "center" ? "text-center" : "text-left";
  const ruleAlignment = align === "center" ? "mx-auto" : "";

  return (
    <div className={`${alignment} mb-16`}>
      {eyebrow && (
        <p className={`font-eyebrow text-gold-400 mb-5 ${align === "center" ? "text-center" : "text-left"}`}>{eyebrow}</p>
      )}
      <h2 className="text-4xl md:text-5xl font-serif font-medium text-ink-900 tracking-tight leading-[1.1]">
        {title}
      </h2>
      <div className={`mt-6 h-px w-12 bg-gold-400 ${ruleAlignment}`}></div>
      {subtitle && (
        <p className={`mt-6 text-ink-600 max-w-2xl mx-auto text-lg leading-relaxed font-serif ${align === "center" ? "text-center" : "text-left"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
