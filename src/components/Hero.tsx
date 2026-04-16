import profileImage from "../assets/profile.jpeg"
import Reveal from "./Reveal"

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_260px] md:gap-16">
        <Reveal className="max-w-3xl" delay={40}>
          <p className="mb-4 text-sm uppercase tracking-widest text-white/60">
            Portfolio
          </p>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Mobile Developer (React Native)
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70">
            I build real-world mobile products with React Native, Firebase, and
            a product-focused approach to app structure, backend integration,
            and user experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
            >
              View Featured Work
            </a>

            <a
              href="/MehmetHoke-CV-EN.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Open CV
            </a>
          </div>
        </Reveal>

        <Reveal
          className="mx-auto w-full max-w-[240px] md:mx-0 md:justify-self-end"
          delay={160}
        >
          <div className="relative rounded-[2rem] border border-white/12 bg-white/[0.04] p-3">
            <div className="absolute inset-x-5 top-0 h-px bg-white/15" />
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
              <img
                src={profileImage}
                alt="Portrait of Mehmet Hoke"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
