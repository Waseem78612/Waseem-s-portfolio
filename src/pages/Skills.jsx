import { SKILLS } from "../data/portfolioData";

function levelLabel(level) {
  if (level >= 85) return "Proficient";
  if (level >= 75) return "Experienced";
  if (level >= 60) return "Comfortable";
  return "Familiar";
}

export default function Skills() {
  return (
    <section
      aria-labelledby="skills-heading"
      className="min-h-screen pt-24 pb-20 px-5 sm:px-8"
    >
      <div className="max-w-5xl mx-auto animate-fadeUp">
        <p className="text-xs font-semibold tracking-[4px] uppercase text-violet-400 mb-2">
          02 / Skills
        </p>
        <h1
          id="skills-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
          style={{ fontFamily: "'Clash Display',sans-serif" }}
        >
          My Tech Stack
        </h1>
        <p className="text-gray-600 mb-12 max-w-xl text-sm">
          1 year of building full stack applications with the MERN Stack. These
          are the tools I use daily to ship complete, production-ready web apps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Each skill is displayed as a card with the skill name, an icon, a percentage badge indicating proficiency level, and a brief description.*/}
          {SKILLS.map((skill) => (
            <article
              key={skill.id}
              aria-label={`${skill.name} — ${skill.level}% proficiency`}
              className="group relative p-5 sm:p-6 rounded-2xl bg-[#111116] border border-[#222230] hover:border-violet-500/20 transition-all duration-300 overflow-hidden"
            >
              {/* Faint background glow on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${skill.color}08, transparent 70%)`,
                }}
              />

              {/* Top row: icon + name + % badge */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${skill.color}14` }}
                  aria-hidden="true"
                >
                  {skill.icon}
                </span>

                <h2 className="text-white font-bold text-sm sm:text-base flex-1">
                  {skill.name}
                </h2>

                {/* Percentage badge — clean, no bar */}
                <div
                  className="flex flex-col items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 border"
                  style={{
                    background: `${skill.color}10`,
                    borderColor: `${skill.color}25`,
                  }}
                >
                  <span
                    className="text-base font-black leading-none"
                    style={{ color: skill.color }}
                  >
                    {skill.level}
                  </span>
                  <span
                    className="text-[9px] font-semibold leading-none mt-0.5"
                    style={{ color: `${skill.color}99` }}
                  >
                    %
                  </span>
                </div>
              </div>

              {/* Level label pill */}
              <div className="mb-3">
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase"
                  style={{
                    background: `${skill.color}10`,
                    color: `${skill.color}CC`,
                    border: `1px solid ${skill.color}20`,
                  }}
                >
                  {levelLabel(skill.level)}
                </span>
              </div>

              {/* Honest description */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {skill.tag}
              </p>
            </article>
          ))}
        </div>

        {/* Full Stack note */}
        <div className="mt-10 p-5 rounded-2xl bg-[#111116] border border-[#222230] text-center">
          <p className="text-gray-500 text-sm leading-relaxed">
            After 1 year of full stack development, I bring{" "}
            <span className="text-violet-400 font-semibold">
              end-to-end ownership
            </span>{" "}
            — from designing{" "}
            <span className="text-violet-400 font-semibold">
              MongoDB schemas
            </span>{" "}
            to shipping{" "}
            <span className="text-violet-400 font-semibold">
              polished React UIs
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
