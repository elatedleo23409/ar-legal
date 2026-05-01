import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string | null;
  layout?: "horizontal" | "stacked" | "mark";
}

const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  href = "/",
  layout = "horizontal",
}) => {
  const sizes = {
    sm: { mark: 36, title: "text-base", sub: "text-[10px]" },
    md: { mark: 48, title: "text-lg", sub: "text-[11px]" },
    lg: { mark: 72, title: "text-2xl", sub: "text-xs" },
    xl: { mark: 100, title: "text-3xl", sub: "text-sm" },
  };

  const inverted = variant === "light";
  const titleColor = inverted ? "text-paper-100" : "text-ink-900";
  const subColor = inverted ? "text-gold-300" : "text-gold-400";

  const padding = Math.max(2, Math.round(sizes[size].mark * 0.04));
  const innerSize = sizes[size].mark;
  const plateSize = innerSize + padding * 2;

  const markImage = (
    <Image
      src="/logo.png"
      alt=""
      width={innerSize}
      height={innerSize}
      priority
      className="block"
      style={{ height: innerSize, width: innerSize }}
    />
  );

  const mark = inverted ? (
    <div
      className="bg-paper-100 rounded-full flex items-center justify-center"
      style={{
        width: plateSize,
        height: plateSize,
        padding,
      }}
    >
      {markImage}
    </div>
  ) : (
    markImage
  );

  const wordmark = (
    <div className="flex flex-col leading-none">
      <span
        className={`font-serif font-semibold tracking-tight ${sizes[size].title} ${titleColor}`}
      >
        A R Legal Associates
      </span>
      <span className={`font-eyebrow mt-1.5 ${sizes[size].sub} ${subColor}`}>
        Advocates &middot; Estd. 2000
      </span>
    </div>
  );

  let content: React.ReactNode;
  if (layout === "mark") {
    content = mark;
  } else if (layout === "stacked") {
    content = (
      <div className="flex flex-col items-center gap-3">
        {mark}
        {wordmark}
      </div>
    );
  } else {
    content = (
      <div className="flex items-center gap-3">
        {mark}
        {wordmark}
      </div>
    );
  }

  if (!href) {
    return (
      <span
        aria-label="A R Legal Associates"
        className="inline-flex items-center"
      >
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-label="A R Legal Associates — home"
      className="inline-flex items-center"
    >
      {content}
    </Link>
  );
};

export default Logo;
