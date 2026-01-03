type ProjectCardProps = {
  title: string
  description: string
  features: string[]
  tech: string[]
  links: { label: string; href: string }[]
}

export default function ProjectCard({
  title,
  description,
  features,
  tech,
  links,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5">
      
      <h3 className="text-2xl font-medium">{title}</h3>

      <p className="mt-3 text-white/70">{description}</p>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/70">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            className="text-sm font-medium text-white underline-offset-4 hover:underline"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  )
}
