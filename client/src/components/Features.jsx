import React from "react";
import { FaPenFancy, FaHeading, FaFileExport } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaPenFancy className="text-indigo-400 text-5xl mb-4" />,
      title: "AI Creative Generator",
      text: "Generate stunning ad creatives instantly without any design skills.",
    },
    {
      icon: <FaHeading className="text-indigo-400 text-5xl mb-4" />,
      title: "Headline Optimizer",
      text: "Maximize click-through rates with AI-powered, high-converting headlines.",
    },
    {
      icon: <FaFileExport className="text-indigo-400 text-5xl mb-4" />,
      title: "Export Ad Formats",
      text: "Export ads for all major platforms in one click, ready to publish.",
    },
  ];

  return (
    <section className="section bg-gray-50 dark:bg-gray-900 py-12">
      <h2 className="section-title text-center mb-12 text-3xl font-bold text-gray-900 dark:text-gray-100">
        Key Features
      </h2>
      <div className="grid gap-8 md:grid-cols-3 px-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300
                       transform hover:scale-105 hover:-translate-y-2
                       opacity-0 animate-fadeIn animation-delay-[calc(150ms*var(--i))]"
            style={{ "--i": i }}
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
