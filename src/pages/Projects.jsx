import { PROJECTS, OWNER } from "../data/portfolioData";

// A page component that displays a list of projects built by the owner. Each project includes a title, description, technologies used, and links to the GitHub repository and live demo.
export default function Projects() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="min-h-screen pt-24 sm:pt-28 pb-20 px-5 sm:px-8"
    >
      <div className="max-w-5xl mx-auto animate-fadeUp">
        <p className="text-xs font-semibold tracking-[4px] uppercase text-violet-400 mb-2">
          03 / Projects
        </p>
        <h1
          id="projects-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          Things I've Built
        </h1>
        <p className="text-gray-600 mb-10 sm:mb-16 max-w-xl text-sm">
          Real projects, live on the internet, with real code on GitHub. Each
          one was a learning experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Each project is displayed as a card with a title, description, technologies used, and links to the GitHub repository and live demo. The card has a hover effect that changes the background color and border for interactivity. The technologies are displayed as badges below the description, and the links are styled as buttons at the bottom of the card. */}
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl bg-[#13131F] border border-[#1E1E30] border-t-2 hover:bg-[#16162A] hover:border-white/8 transition-all duration-300 overflow-hidden"
              style={{ borderTopColor: project.accent }}
            >
              <div className="p-5 sm:p-6 pb-4 flex-1">
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-4"
                  style={{ background: `${project.accent}10` }}
                  aria-hidden="true"
                >
                  {project.emoji}
                </div>
                <h2
                  className="text-sm sm:text-base font-bold mb-2"
                  style={{ color: project.accent }}
                >
                  {project.title}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech */}
              <div className="px-5 sm:px-6 pb-4">
                <ul
                  className="flex flex-wrap gap-1.5 sm:gap-2"
                  aria-label={`Technologies used in ${project.title}`}
                >
                  {/*Each technology used in the project is displayed as a badge with a background color that matches the project's accent color. This visually ties the technologies to the project and makes it easy for users to see at a glance what tools and technologies were used in each project. The badges are styled with padding, rounded corners, and a border for a clean and modern look.*/}
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-medium rounded-md text-gray-500 border border-[#1E1E30]"
                      style={{ background: `${project.accent}06` }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 flex gap-2 sm:gap-3 border-t border-[#1E1E30]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub source`}
                  className="flex-1 text-center py-2 sm:py-2.5 rounded-lg text-xs font-semibold text-gray-500 border border-[#1E1E30] hover:text-white hover:border-white/15 hover:bg-white/5 transition-all duration-200"
                >
                  GitHub 🐙
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="flex-1 text-center py-2 sm:py-2.5 rounded-lg text-xs font-bold transition-all duration-200 hover:opacity-80"
                  style={{
                    background: `${project.accent}12`,
                    color: project.accent,
                    border: `1px solid ${project.accent}22`,
                  }}
                >
                  Live Demo 🌐
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <a
            href={OWNER.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-violet-400 transition-colors duration-200"
          >
            More on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
