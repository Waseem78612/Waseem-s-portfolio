// Footer.jsx - A simple footer component for the portfolio website
// It displays the owner's name and location, along with the current year.
// The owner's name is styled with a gradient for a nice visual effect.
import { OWNER } from "../data/portfolioData";
// The Footer component is a functional React component that returns JSX for the footer section of the website.
export default function Footer() {
  return (
    <footer
      className="border-t border-[#1E1E30] py-8 px-5 sm:px-8 text-center"
      role="contentinfo"
    >
      <p className="text-gray-600 text-sm">
        Built by{" "}
        <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
          // Using the owner's name from the centralized data file, styled with
          a gradient
          {OWNER.name}
        </span>{" "}
        · Pakistan 🇵🇰
      </p>
      <p className="text-gray-800 text-xs mt-1">© {new Date().getFullYear()}</p>
    </footer>
  );
}
