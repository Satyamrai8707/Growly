import React from "react";

export default function Hero() {
  return (
    <section
      className="
        bg-gradient-to-r from-purple-500 to-indigo-600 
        dark:from-purple-900 dark:to-indigo-900 
        text-white py-20 px-6 text-center
        opacity-0 animate-fadeIn animation-delay-150
      "
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn animation-delay-300">
        Create High-Converting Ads in Seconds — Powered by AI
      </h1>
      <p className="text-lg md:text-2xl mb-6 animate-fadeIn animation-delay-450">
        No design or copywriting needed. Just enter your product and let Growly
        do the rest.
      </p>
      <a
        href="#lead-form"
        className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow 
        hover:bg-gray-100 hover:scale-105 transform transition duration-300 animate-fadeIn animation-delay-600"
      >
        Book Free Demo
      </a>
    </section>
  );
}
