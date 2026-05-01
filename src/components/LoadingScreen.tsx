import React from "react";
import Logo from "./Logo";

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-paper-100 px-4">
      <div className="flex flex-col items-center">
        <div className="mb-8 animate-pulse">
          <Logo size="lg" href={null} />
        </div>
        <div className="h-px w-12 bg-gold-400 mb-4"></div>
        <p className="font-eyebrow text-ink-500">Loading</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
