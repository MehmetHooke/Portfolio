import profile from "../assets/profile.jpeg"
import GlassCard from "./GlassCard"

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <GlassCard className="p-8">




        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-white/60">
            About
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_220px] md:items-center">
            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-semibold">Mehmet Höke</h2>

              <p className="mt-6 max-w-3xl text-white/70">
                Junior Full-stack developer focused on building clean, user-centric web
                and mobile products. Comfortable with React, APIs, and Firebase. I enjoy
                turning ideas into working products and continuously improving my skills.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/MehmetHooke"
                  target="_blank"
                  className="
                    rounded-xl border border-white/20
                    px-4 py-2 text-sm font-medium text-white
                    transition hover:bg-white/10
                  "
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/mehmethoke/"
                  target="_blank"
                  className="
                    rounded-xl border border-white/20
                    px-4 py-2 text-sm font-medium text-white
                    transition hover:bg-white/10
                  "
                >
                  LinkedIn
                </a>

                <a
                  href="#contact"
                  className="
                    rounded-xl bg-white
                    px-4 py-2 text-sm font-medium text-black
                    transition hover:bg-white/90
                  "
                >
                  Contact
                </a>
              </div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="flex justify-center md:justify-end">
              <div
                className="
                  h-48 w-48 overflow-hidden rounded-2xl
                  border border-white/10
                "
              >
                <img
                  src={profile}
                  alt="Mehmet Höke"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </section >
  )
}
