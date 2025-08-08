import React from "react";
import { FaKeyboard, FaRobot, FaBullhorn } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaKeyboard className="text-indigo-400 text-4xl mb-2" />,
      title: "1. Input",
      text: "Enter your product details and target audience.",
      delayClass: "animation-delay-150",
    },
    {
      icon: <FaRobot className="text-indigo-400 text-4xl mb-2" />,
      title: "2. AI Magic",
      text: "Our AI generates ad copy, headlines, and creatives.",
      delayClass: "animation-delay-300",
    },
    {
      icon: <FaBullhorn className="text-indigo-400 text-4xl mb-2" />,
      title: "3. Output",
      text: "Get ready-to-use ads for Meta and Google in seconds.",
      delayClass: "animation-delay-450",
    },
  ];

  return (
    <section className="py-16 px-6 text-center bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-10 animate-fadeIn animation-delay-150 text-gray-900 dark:text-gray-100">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg opacity-0 animate-fadeIn ${step.delayClass}`}
          >
            <div className="flex justify-center mb-2">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
