// importing necessary data from the centralized portfolioData file, which includes owner information, stats, about tags, and a favorite quote to be displayed on the About page.
import {
  OWNER,
  STATS,
  ABOUT_TAGS,
  FAVORITE_QUOTE,
} from "../data/portfolioData";
//
export default function About() {
  return (
    // The main section of the About page, with an aria-label for accessibility and padding for spacing. It contains a heading, a grid layout for the content, and a styled blockquote for the favorite quote.
    <section
      aria-labelledby="about-heading"
      className="min-h-screen pt-24 pb-20 px-5 sm:px-8"
    >
      <div className="max-w-5xl mx-auto animate-fadeUp">
        <p className="text-xs font-semibold tracking-[4px] uppercase text-violet-400 mb-2">
          01 / About
        </p>
        <h1
          id="about-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12"
          style={{ fontFamily: "'Clash Display',sans-serif" }}
        >
          Who I Am
        </h1>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col items-center gap-7">
            {/* The owner's photo is displayed in a rounded, bordered container with a shadow. If the owner has not provided a photo, a placeholder with their initials and a message prompting them to add a photo is shown instead. */}
            <div className="relative">
              {OWNER.photo ? (
                <img
                  src={OWNER.photo}
                  alt={OWNER.name}
                  className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl object-cover border border-[#222230] shadow-2xl"
                />
              ) : (
                <div
                  aria-label="Avatar placeholder"
                  className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-[#111116] border border-[#222230] flex flex-col items-center justify-center gap-3 shadow-2xl select-none"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center text-xl font-black text-white">
                    {OWNER.initials}
                  </div>
                  <p className="text-gray-700 text-[11px] text-center px-4 leading-relaxed">
                    Add photo in
                    <br />
                    <code className="text-violet-500/70 text-[10px]">
                      portfolioData.js
                    </code>
                  </p>
                </div>
              )}
              <div
                aria-hidden="true"
                className="absolute -bottom-2.5 -right-2.5 w-full h-full rounded-2xl border border-violet-500/10 -z-10"
              />
            </div>
            {/* A grid layout to display key stats about the owner, such as years
            of experience, number of live projects, and tech skills. Each stat
            is styled with a background, border, and hover effect for
            interactivity. */}
            <div className="grid grid-cols-3 gap-3 w-full" role="list">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  role="listitem"
                  className="text-center p-3 sm:p-4 rounded-xl bg-[#111116] border border-[#222230] hover:border-violet-500/20 transition-colors duration-300"
                >
                  <p className="text-xl sm:text-2xl font-black text-violet-400">
                    {value}
                  </p>
                  <p className="text-[11px] text-gray-600 mt-1 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - A series of paragraphs describing the owner's background, skills, and contact information. The text includes strong tags to highlight important details and a list of tags that summarize key attributes. Contact info includes email, location, and GitHub link, all styled for clarity and interactivity. */}
          <div className="flex flex-col gap-5">
            <p className="text-gray-400 text-sm sm:text-base leading-8">
              Hi, I'm{" "}
              <strong className="text-white font-semibold">{OWNER.name}</strong>{" "}
              — a Full Stack Web Developer from {OWNER.location} with{" "}
              <strong className="text-violet-400">
                1 year of hands-on experience
              </strong>{" "}
              building complete web applications. I work across the entire stack
              using the <strong className="text-orange-400">MERN Stack</strong>{" "}
              — MongoDB, Express.js, React, and Node.js.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-8">
              I build responsive, dynamic frontends with{" "}
              <strong className="text-yellow-400">React</strong> and scalable
              backend APIs with{" "}
              <strong className="text-green-400">Node.js & Express</strong>,
              backed by <strong className="text-emerald-400">MongoDB</strong>{" "}
              databases. I care deeply about clean code, real-world
              functionality, and delivering polished products end-to-end.
            </p>
            {/* A list of tags summarizing the owner's key attributes and skills. Each tag is styled with a background, border, and hover effect for interactivity. */}
            <div className="flex flex-wrap gap-2 mt-1" role="list">
              {ABOUT_TAGS.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-[#111116] border border-[#222230] text-gray-400 hover:border-violet-500/25 hover:text-gray-200 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/*Contact information with icons for email, location, and GitHub. Each piece of contact info is interactive, allowing users to click on the email to open their mail client or click on the GitHub link to visit the profile. The contact info is styled for clarity and visual appeal. */}
            <div className="flex flex-col gap-2 mt-2 text-sm text-gray-600">
              <span>
                📧{" "}
                <a
                  href={`mailto:${OWNER.email}`}
                  className="hover:text-violet-400 transition-colors"
                >
                  {OWNER.email}
                </a>
              </span>
              <span>📍 {OWNER.location}</span>
              <span>
                🐙{" "}
                <a
                  href={OWNER.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition-colors"
                >
                  github.com/Waseem78612
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 p-7 sm:p-8 rounded-2xl bg-[#111116] border border-[#222230] relative overflow-hidden">
          <span
            aria-hidden="true"
            className="absolute top-4 left-5 text-6xl text-violet-500/10 font-serif leading-none select-none"
          >
            “
          </span>
          {/*A blockquote displaying the owner's favorite quote. */}
          <blockquote className="relative z-10 text-center">
            <p className="text-gray-300 text-base sm:text-lg italic leading-relaxed">
              "{FAVORITE_QUOTE.text}"
            </p>
            <footer className="text-gray-600 text-sm mt-3">
              — {FAVORITE_QUOTE.author}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
