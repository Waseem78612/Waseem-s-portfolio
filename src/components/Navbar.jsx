// Navbar.jsx - A responsive navigation bar component for the portfolio website
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS, OWNER } from "../data/portfolioData";
// The Navbar component is a functional React component that renders the navigation bar at the top of the website. It includes the owner's logo/name and links to different sections of the site. The navbar is responsive, showing a hamburger menu on smaller screens.
export default function Navbar() {
  // State to track if the mobile menu is open and if the user has scrolled down the page
  const [menuOpen, setMenuOpen] = useState(false);
  // State to track if the user has scrolled down the page to apply a background and shadow to the navbar
  const [scrolled, setScrolled] = useState(false);
  // useEffect hook to add a scroll event listener that updates the 'scrolled' state based on the window's scroll position. If the user scrolls more than 40 pixels, 'scrolled' becomes true, which triggers a style change in the navbar. The event listener is cleaned up when the component unmounts to prevent memory leaks.
  useEffect(() => {
    // Handler to check scroll position and update 'scrolled' state
    const onScroll = () => setScrolled(window.scrollY > 40);
    // Add scroll event listener with passive option for better performance
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Function to close the mobile menu, used when a navigation link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    // The header element serves as the container for the navigation bar, with a role of "banner" for accessibility. The nav element contains the logo and navigation links, and its styling changes based on the 'scrolled' state to provide visual feedback when the user scrolls down the page. The mobile menu is conditionally rendered based on the 'menuOpen' state, providing a responsive design that works well on both desktop and mobile devices.
    <header role="banner">
      <nav
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-12 h-16 transition-all duration-300
          ${scrolled ? "bg-[#080810]/90 backdrop-blur-xl border-b border-[#1E1E30] shadow-xl shadow-black/50" : "bg-transparent"}`}
      >
        {/* Logo — NavLink navigates to / on click, always works */}
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          aria-label="Go to homepage"
          className="flex items-center gap-2.5 group rounded-lg p-1"
        >
          {/* If the owner has a photo, display it as a circular image.
          Otherwise, show a fallback with the owner's initials styled with a
          gradient background. This provides a personalized touch to the navbar
          while ensuring it looks good even if no photo is available.*/}
          {OWNER.photo ? (
            <img
              src={OWNER.photo}
              alt={`${OWNER.name} profile`}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-violet-500"
            />
          ) : (
            <div
              aria-hidden="true"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow duration-300 select-none"
            >
              {OWNER.initials}
            </div>
          )}
          {/* The owner's name is displayed next to the logo, with a gradient
          effect on the first name for visual interest. The name is hidden on
          smaller screens to save space, showing only the logo. */}
          <span
            className="font-black text-base sm:text-lg tracking-tight text-white hidden sm:block"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            {OWNER.name.split(" ")[0]}
            <span className="text-violet-400">.</span>
          </span>
        </NavLink>

        {/* Desktop navigation links, hidden on smaller screens and shown on medium and larger screens. Each link uses NavLink to automatically apply an active style when the current route matches the link's path.*/}
        <div className="hidden md:flex items-center gap-0.5" role="menubar">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              role="menuitem"
              end={path === "/"}
              className={({ isActive }) =>
                `relative px-3 lg:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                ${isActive ? "text-violet-400" : "text-gray-500 hover:text-white hover:bg-white/5"}`
              }
            >
              {/* The label of the navigation link is displayed, and if the link
              is active (i.e., the current route matches the link's path), a
              small violet dot is shown below the label to indicate that it's
              the active page. This provides a clear visual cue to users about
              which section of the site they are currently viewing. */}
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-400"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button, shown on smaller screens and hidden on medium and larger screens. It toggles the 'menuOpen' state when clicked, which controls the visibility of the mobile menu.*/}
        <button
          className="md:hidden p-2 text-gray-500 hover:text-white rounded-lg transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="menu"
          className="fixed inset-x-0 top-16 z-40 bg-[#080810]/98 backdrop-blur-xl border-b border-[#1E1E30] md:hidden animate-fadeUp"
        >
          <div className="flex flex-col p-3 gap-1">
            {NAV_LINKS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                role="menuitem"
                end={path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200
                  ${isActive ? "bg-violet-500/10 text-violet-400" : "text-gray-500 hover:text-white hover:bg-white/5"}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
