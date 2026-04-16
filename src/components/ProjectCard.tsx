type ProjectCardProps = {
  title: string
  badge?: string
  description: string
  features: string[]
  tech: string[]
  links: { label: string; href: string }[]
}

function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

export default function ProjectCard({
  title,
  badge,
  description,
  features,
  tech,
  links,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5 transition duration-500 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.065]">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-2xl font-medium">{title}</h3>
        {badge ? (
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-200">
            {badge}
          </span>
        ) : null}
      </div>

      <p className="mt-3 text-white/70">{description}</p>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-white/70">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={isExternalLink(link.href) ? "_blank" : undefined}
            rel={isExternalLink(link.href) ? "noreferrer" : undefined}
            className="text-sm font-medium text-white underline-offset-4 transition hover:text-white/80 hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
