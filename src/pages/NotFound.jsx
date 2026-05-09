// src/pages/NotFound.jsx
import { useNavigate } from "react-router-dom";
// NotFound.jsx - A simple 404 page component for the portfolio website
// It displays a message indicating that the page was not found and includes a button to navigate back to the homepage.
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-8 animate-fadeUp">
      <p
        className="text-7xl sm:text-8xl font-black text-white/5 mb-4"
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        404
      </p>
      <h1
        className="text-2xl sm:text-3xl font-black text-white mb-3"
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-8 text-sm">
        This page doesn't exist. Let's get you back.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm hover:opacity-90 active:scale-95 transition-all"
      >
        ← Back to Home
      </button>
    </div>
  );
}
