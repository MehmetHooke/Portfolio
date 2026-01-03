import GlassCard from "./GlassCard"

const SKILLS = {
  Frontend: ["React", "TypeScript", "HTML", "CSS", "Tailwind"],
  "Backend & Data": ["Node.js (basic)", "Express.js(basic)", "RESTful APIs", "Firebase Auth", "Firestore"],
  Tools: ["Git & GitHub", "Vercel", "Postman"],
  "Currently Improving": ["Unit & integration testing","Express.js with SQLite", "Backend depth with Node.js"],
} as const

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">

      <h2 className="mb-12 text-3xl font-semibold">Skills</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div
            key={group}
            className="rounded-2xl "
          >
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium">{group}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  )
}
