

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      

        <p className="mb-4 text-sm uppercase tracking-widest text-white/60">
          Portfolio
        </p>

        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
          Junior Full-stack Developer
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Building product-focused web & mobile applications with React, APIs, and Firebase.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View Projects
          </a>

          <a
            href="/Mehmet_HOKE_CV_EN.pdf"
            target="_blank"
            className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Download CV
          </a>
        </div>

    </section>
  )
}
