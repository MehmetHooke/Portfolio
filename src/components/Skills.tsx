import GlassCard from "./GlassCard"
import Reveal from "./Reveal"

const SKILLS = {
  "Mobile Development": [
    "React Native",
    "Expo",
    "TypeScript",
    "JavaScript",
    "Kotlin",
  ],
  "Backend & Data": [
    "Firebase",
    "Cloud Firestore",
    "Firebase Auth",
    "REST APIs",
    "Backend Integration",
  ],
  "Quality & Testing": ["Jest", "React Testing Library", "Scalable App Structure"],
  Tools: ["Git", "GitHub", "Docker", "Postman", "Figma"],
} as const

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <p className="mt-4 text-white/65">
            A mobile-focused stack centered on React Native products, Firebase
            backends, and clean delivery workflows.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(SKILLS).map(([group, items], index) => (
          <Reveal key={group} delay={index * 90}>
            <div className="rounded-2xl">
              <GlassCard className="p-4 transition duration-500 ease-out hover:-translate-y-1 hover:bg-white/[0.06]">
                <h3 className="text-lg font-medium">{group}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 transition duration-300 hover:bg-white/14 hover:text-white"
                      style={{
                        transitionDelay: `${itemIndex * 28}ms`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
