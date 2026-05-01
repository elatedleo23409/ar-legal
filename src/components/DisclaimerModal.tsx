"use client";

import React, { useEffect, useState } from "react";

const STORAGE_KEY = "ar-legal-disclaimer-accepted";

const DisclaimerModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const accepted = sessionStorage.getItem(STORAGE_KEY);
    if (!accepted) setOpen(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted || !open) return null;

  const handleAgree = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  const handleDisagree = () => {
    window.close();
    setTimeout(() => {
      if (window.history.length > 1) window.history.back();
      else window.location.href = "about:blank";
    }, 100);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div className="absolute inset-0 bg-ink-900/85 backdrop-blur-md"></div>
      <div className="relative bg-paper-50 max-w-2xl w-full shadow-2xl">
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-1 bg-gold-400"
        ></div>
        <div className="p-10 md:p-14 max-h-[90vh] overflow-y-auto">
          <p className="font-eyebrow text-gold-400 mb-6">Notice</p>
          <h2
            id="disclaimer-title"
            className="text-3xl md:text-4xl font-serif font-medium mb-8 text-ink-900 tracking-tight leading-[1.1]"
          >
            Please read before proceeding.
          </h2>
          <div className="h-px w-12 bg-gold-400 mb-8"></div>
          <div className="prose-justify text-ink-700 leading-relaxed space-y-5 mb-10 font-serif text-[17px]">
            <p>
              The Bar Council of India does not permit advertisement or
              solicitation by advocates in any form or manner. By accessing
              this website, you acknowledge and confirm that you are seeking
              information relating to A R Legal Associates of your own accord
              and that there has been no form of solicitation, advertisement,
              or inducement by A R Legal Associates or its members.
            </p>
            <p>
              The information provided on this website is solely for
              informational purposes and should not be interpreted as
              soliciting or advertisement. The firm is not liable for any
              consequence of any action taken by the user relying on material
              or information provided on this website. In cases where the user
              has any legal issues, the user must seek independent legal
              advice.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-ink-200">
            <button
              type="button"
              onClick={handleDisagree}
              className="px-8 py-3 font-serif text-[15px] tracking-wide border border-ink-300 text-ink-700 hover:border-ink-900 hover:text-ink-900 transition-colors duration-200"
            >
              I Disagree
            </button>
            <button
              type="button"
              onClick={handleAgree}
              className="px-8 py-3 font-serif text-[15px] tracking-wide bg-ink-900 text-paper-100 border border-ink-900 hover:bg-ink-800 transition-colors duration-200"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
