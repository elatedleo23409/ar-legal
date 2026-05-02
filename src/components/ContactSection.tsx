"use client";

import React, { useState } from "react";
import { practiceAreas } from "../lib/practiceAreas";

interface ContactInfoItemProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <div className="flex items-start">
      <span className="material-symbols-outlined text-gold-400 mr-4 mt-0.5">
        {icon}
      </span>
      <div>
        <p className="font-eyebrow text-ink-500 mb-1">{title}</p>
        <div className="text-ink-800 font-serif">{children}</div>
      </div>
    </div>
  );
};

const inputClass =
  "w-full px-0 py-3 bg-transparent border-0 border-b border-ink-300 focus:border-ink-900 focus:outline-none focus:ring-0 transition-colors duration-200 font-serif text-lg text-ink-900 placeholder:text-ink-400";

const labelClass = "block font-eyebrow text-ink-500 mb-2";

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Form is not configured. Please email us directly at office.cochin@arlegal.co.in."
      );
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "New Enquiry from A R Legal Associates Website");
    formData.append("from_name", "A R Legal Associates Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
            "Something went wrong. Please email us at office.cochin@arlegal.co.in."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Could not send your enquiry. Please email us at office.cochin@arlegal.co.in."
      );
    }
  };

  return (
    <section
      id="contact"
      className="bg-paper-50 py-28 border-t border-ink-200"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
          <div className="lg:col-span-7">
            <p className="font-eyebrow text-gold-400 mb-5">Correspondence</p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-ink-900 tracking-tight leading-[1.1]">
              Get in touch.
            </h2>
            <div className="h-px w-12 bg-gold-400 mb-8"></div>
            <p className="text-ink-600 mb-12 leading-relaxed text-lg font-serif italic max-w-xl">
              Reach out to discuss your matter. We will respond within one
              business day.
            </p>
            <form className="space-y-8" onSubmit={handleSubmit} noValidate>
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="service" className={labelClass}>
                    Practice Area
                  </label>
                  <select
                    id="service"
                    name="practice_area"
                    className={inputClass}
                    defaultValue=""
                  >
                    <option value="">Select a Practice Area</option>
                    {practiceAreas.map((area) => (
                      <option key={area.slug} value={area.title}>
                        {area.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center bg-ink-900 text-paper-100 px-10 py-4 font-serif text-[15px] tracking-wide border border-ink-900 hover:bg-ink-800 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed self-start"
                >
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                  <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </button>
                {status === "success" && (
                  <p
                    role="status"
                    className="font-serif text-ink-700 border-l-2 border-gold-400 pl-4 py-2"
                  >
                    Thank you. Your enquiry has been received, we will respond
                    within three business days.
                  </p>
                )}
                {status === "error" && (
                  <p
                    role="alert"
                    className="font-serif text-ink-700 border-l-2 border-ink-900 pl-4 py-2"
                  >
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-ink-900 text-paper-100 p-10 lg:p-12 h-full relative">
              <div
                aria-hidden
                className="absolute top-6 left-6 right-6 h-px bg-gold-400/40"
              ></div>
              <p className="font-eyebrow text-gold-300 mb-5 mt-4">Visit</p>
              <h3 className="text-3xl font-serif font-medium mb-6 text-paper-100 tracking-tight">
                Our Office
              </h3>
              <div className="h-px w-12 bg-gold-400 mb-8"></div>
              <div className="overflow-hidden h-56 mb-10 border border-ink-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31434.59494792838!2d76.24698407431642!3d9.990042000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d9a5f038a0d%3A0x7022a26ee9ca3f70!2sAR%20Legal%20Associates!5e0!3m2!1sen!2sin!4v1777626816159!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
              <div className="space-y-6">
                <ContactInfoItem icon="location_on" title="Address">
                  <p className="text-paper-200">
                  Nurul Huda Masjid Building,
                  <br />
                  opposite Specialist Hospital,
                  <br />
                  Near North Railway Station,
                  <br />
                  Ernakulam North, Kochi, Kerala 682018
                  </p>
                </ContactInfoItem>
                <ContactInfoItem icon="call" title="Phone">
                  <p className="text-paper-200">+91 9495701999</p>
                  <p className="text-paper-200">+91 9895701999</p>
                </ContactInfoItem>
                <ContactInfoItem icon="email" title="Email">
                  <p className="text-paper-200">office.cochin@arlegal.co.in</p>
                </ContactInfoItem>
                <ContactInfoItem icon="schedule" title="Office Hours">
                  <p className="text-paper-200">
                    Monday &ndash; Friday &middot; 9:00 &ndash; 18:00
                    <br />
                    Saturday &middot; 9:00 &ndash; 13:00
                  </p>
                </ContactInfoItem>
              </div>
              <div className="mt-10 pt-8 border-t border-ink-700">
                <p className="font-eyebrow text-ink-400 mb-4">Connect</p>
                <div className="flex space-x-3">
                  {[
                    { icon: "linkedin-in", label: "LinkedIn", href: "https://www.linkedin.com/company/a-r-legal-associates/" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 border border-ink-700 text-paper-200 flex items-center justify-center hover:border-gold-400 hover:text-gold-300 transition-colors duration-300"
                    >
                      <i className={`fa-brands fa-${s.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
