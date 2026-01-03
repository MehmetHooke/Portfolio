import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  glow?: boolean
}

export default function GlassCard({ children, className = "", glow = true }: Props) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl",
        "border border-white/10 bg-white/5 backdrop-blur",
        className,
      ].join(" ")}
      onMouseMove={(e) => {
        if (!glow) return
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        e.currentTarget.style.setProperty("--mx", `${x}px`)
        e.currentTarget.style.setProperty("--my", `${y}px`)
      }}
    >
      {/* 1) Border/ring highlight (ışığın değdiği yerde kenar parlar) */}
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            // Mask: sadece kenarlarda görünür (ring gibi)
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
            background:
              "radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.45), transparent 70%)",
          }}
        />
      )}

      {/* 2) Backlight (camın arkasındaki ışık) */}
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(700px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.12), transparent 55%)",
          }}
        />
      )}

      {/* Content always on top */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
