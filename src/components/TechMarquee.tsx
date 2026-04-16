import { useEffect, useMemo, useRef, useState } from "react"

import firebaseLogo from "../assets/logos/firebase.png"
import gitLogo from "../assets/logos/git.png"
import jsLogo from "../assets/logos/javascript.png"
import reactLogo from "../assets/logos/react.png"
import tsLogo from "../assets/logos/typescript.png"
import GlassCard from "./GlassCard"

type Tech = {
  name: string
  abbr: string
  logo?: string
}

const TECHS: Tech[] = [
  { name: "React Native", abbr: "RN", logo: reactLogo },
  { name: "Expo", abbr: "EX" },
  { name: "TypeScript", abbr: "TS", logo: tsLogo },
  { name: "JavaScript", abbr: "JS", logo: jsLogo },
  { name: "Firebase", abbr: "FB", logo: firebaseLogo },
  { name: "REST APIs", abbr: "API" },
  { name: "Cloud Firestore", abbr: "DB" },
  { name: "Jest", abbr: "JT" },
  { name: "Kotlin", abbr: "KT" },
  { name: "Git", abbr: "G", logo: gitLogo },
]

function TechPill({ tech }: { tech: Tech }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/30">
        {tech.logo ? (
          <img
            src={tech.logo}
            alt={tech.name}
            className="h-5 w-5 object-contain opacity-90"
            loading="lazy"
          />
        ) : (
          <span className="text-xs font-semibold text-white/80">{tech.abbr}</span>
        )}
      </div>

      <div className="text-sm font-medium text-white/85">{tech.name}</div>
    </div>
  )
}

export default function TechMarquee() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const dragState = useRef({ startX: 0, startScrollLeft: 0 })
  const items = useMemo(() => [...TECHS, ...TECHS], [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    let raf = 0
    const speed = 0.6

    const loop = () => {
      if (!isPaused && !isDragging) {
        el.scrollLeft += speed
        const half = el.scrollWidth / 2
        if (el.scrollLeft >= half) el.scrollLeft -= half
      }
      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [isPaused, isDragging])

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = scrollerRef.current
    if (!el) return
    setIsDragging(true)
    setIsPaused(true)
    el.setPointerCapture(e.pointerId)

    dragState.current.startX = e.clientX
    dragState.current.startScrollLeft = el.scrollLeft
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging) return
    const el = scrollerRef.current
    if (!el) return

    const dx = e.clientX - dragState.current.startX
    el.scrollLeft = dragState.current.startScrollLeft - dx
  }

  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const el = scrollerRef.current
    if (!el) return
    setIsDragging(false)
    setIsPaused(false)
    try {
      el.releasePointerCapture(e.pointerId)
    } catch {
      // ignore
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-6">
      <GlassCard className="p-2">
        <div className="overflow-hidden rounded-3xl p-4">
          <div className="mb-3 flex items-center justify-between gap-4 px-2">
            <div className="text-sm font-medium text-white/80">
              Mobile stack
            </div>
            <div className="text-xs text-white/50">Drag to explore</div>
          </div>

          <div
            ref={scrollerRef}
            className={[
              "no-scrollbar overflow-x-auto",
              "cursor-grab select-none",
              isDragging ? "cursor-grabbing" : "",
            ].join(" ")}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div className="flex w-max gap-3 px-2 py-2">
              {items.map((tech, index) => (
                <TechPill key={`${tech.name}-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  )
}
