import GlassCard from "./GlassCard"

const EMAIL = "hoke628@gmail.com" // değiştir: kendi mailin neyse
const LOCATION = "Ankara, Turkey"

const LINKS = [
  { label: "GitHub", href: "https://github.com/MehmetHooke" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mehmethoke/" },
] as const

export default function Contact() {
  function copyEmail() {
    navigator.clipboard?.writeText(EMAIL)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <GlassCard className="p-6">
      <h2 className="mb-12 text-3xl font-semibold">Contact</h2>
      

      <div className="grid gap-8 md:grid-cols-2">
        {/* Left: info */}
        <div className="rounded-2xl border border-white/10 bg-white/5  p-6">
          <p className="text-white/70">
            Want to reach out about a role, a project, or collaboration? I&apos;m happy
            to chat.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-widest text-white/50">
                Email
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm font-medium text-white underline-offset-4 hover:underline"
                >
                  {EMAIL}
                </a>
                <button
                  onClick={copyEmail}
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 transition hover:bg-white/10"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-widest text-white/50">
                Location
              </div>
              <div className="mt-1 text-sm text-white/80">{LOCATION}</div>
            </div>

            <div className="flex flex-wrap gap-3">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: message card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-medium">Send a quick message</div>
          <p className="mt-2 text-sm text-white/60">
            This opens your email client with a pre-filled subject and message.
          </p>

          <a
            href={`mailto:${EMAIL}?subject=Hello%20Mehmet&body=Hi%20Mehmet%2C%0A%0AI'd%20like%20to%20talk%20about...%0A%0AThanks%2C`}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Email Mehmet
          </a>

          <div className="mt-4 text-xs text-white/50">
            Tip: If you prefer, you can also DM me on LinkedIn.
          </div>
        </div>
      </div>
      </GlassCard>
    </section>
  )
}
