export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6">
      <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-center">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Mehmet Hoke
        </p>

        <p className="text-xs text-white/40">
          Product-focused mobile portfolio built with React, TypeScript, and
          Tailwind
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/MehmetHooke"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-white/60 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mehmethoke/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-white/60 transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
