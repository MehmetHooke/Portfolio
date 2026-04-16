import GlassCard from "./GlassCard"
import Reveal from "./Reveal"

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <GlassCard className="p-8">
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-widest text-white/60">
              About
            </p>

            <div className="mt-6 max-w-4xl">
              <h2 className="text-3xl font-semibold">Mehmet Hoke</h2>

              <p className="mt-6 text-white/70">
                I build mobile applications with React Native and Firebase,
                focusing on real user problems, scalable app structure, backend
                integration, and user experience. My recent work centers on
                shipped products that help users study more effectively and
                create professional CVs directly from mobile.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/MehmetHooke"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/mehmethoke/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  LinkedIn
                </a>

                <a
                  href="#contact"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  )
}
