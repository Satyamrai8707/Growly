import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import LeadForm from "./components/LeadForm";
import AdminLeads from "./components/AdminLeads";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 text-gray-900 dark:text-gray-100">
        <header className="flex justify-end items-center p-4 bg-gray-100 dark:bg-gray-800">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:ring-2 hover:ring-indigo-500 transition"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </header>

        <main className="p-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <HowItWorks />
                  <Features />
                  <LeadForm />
                </>
              }
            />
            <Route path="/admin/leads" element={<AdminLeads />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
