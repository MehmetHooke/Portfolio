export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6">
      <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-center">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Mehmet Höke
        </p>

        <p className="text-xs text-white/40">
          Built with React, TypeScript & Tailwind • Deployed on Vercel
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/MehmetHooke"
            target="_blank"
            className="text-xs text-white/60 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mehmethoke/"
            target="_blank"
            className="text-xs text-white/60 transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
