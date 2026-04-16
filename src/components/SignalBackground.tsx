import { useEffect, useRef } from "react"

type NodePoint = {
  x: number
  y: number
  baseX: number
  baseY: number
  radius: number
  phase: number
  speed: number
  amplitude: number
}

type Edge = {
  from: number
  to: number
  pulseOffset: number
  pulseSpeed: number
}

const MAX_DPR = 1.5

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export default function SignalBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const state = {
      width: 0,
      height: 0,
      dpr: 1,
      nodes: [] as NodePoint[],
      edges: [] as Edge[],
      reducedMotion: mediaQuery.matches,
    }

    let rafId = 0

    const createScene = () => {
      state.width = window.innerWidth
      state.height = window.innerHeight
      state.dpr = clamp(window.devicePixelRatio || 1, 1, MAX_DPR)

      canvas.width = Math.floor(state.width * state.dpr)
      canvas.height = Math.floor(state.height * state.dpr)
      canvas.style.width = `${state.width}px`
      canvas.style.height = `${state.height}px`
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0)

      const area = state.width * state.height
      const mobile = state.width < 768
      const nodeCount = clamp(Math.round(area / (mobile ? 42000 : 36000)), 16, mobile ? 24 : 34)
      const margin = mobile ? 28 : 40

      state.nodes = Array.from({ length: nodeCount }, (_, index) => {
        const columnCount = mobile ? 4 : 6
        const row = Math.floor(index / columnCount)
        const col = index % columnCount
        const rows = Math.ceil(nodeCount / columnCount)
        const cellWidth = (state.width - margin * 2) / Math.max(columnCount - 1, 1)
        const cellHeight = (state.height - margin * 2) / Math.max(rows - 1, 1)

        const jitterX = (Math.random() - 0.5) * cellWidth * 0.5
        const jitterY = (Math.random() - 0.5) * cellHeight * 0.45
        const baseX = margin + col * cellWidth + jitterX
        const baseY = margin + row * cellHeight + jitterY

        return {
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          radius: Math.random() * 1.2 + 1.1,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.35 + 0.12,
          amplitude: Math.random() * 8 + 4,
        }
      })

      const edges: Edge[] = []
      const maxDistance = mobile ? 180 : 220

      state.nodes.forEach((node, from) => {
        const neighbors = state.nodes
          .map((candidate, to) => {
            const dx = node.baseX - candidate.baseX
            const dy = node.baseY - candidate.baseY
            return { to, distance: Math.hypot(dx, dy) }
          })
          .filter(({ to, distance }) => to !== from && distance < maxDistance)
          .sort((a, b) => a.distance - b.distance)
          .slice(0, mobile ? 2 : 3)

        neighbors.forEach(({ to }) => {
          if (from < to) {
            edges.push({
              from,
              to,
              pulseOffset: Math.random(),
              pulseSpeed: Math.random() * 0.06 + 0.025,
            })
          }
        })
      })

      state.edges = edges.slice(0, mobile ? 18 : 30)
    }

    const draw = (time: number) => {
      const t = time * 0.00035
      ctx.clearRect(0, 0, state.width, state.height)

      state.nodes.forEach((node, index) => {
        const drift = state.reducedMotion ? 0 : node.amplitude
        const secondary = state.reducedMotion ? 0 : node.amplitude * 0.45

        node.x = node.baseX + Math.sin(t * node.speed + node.phase + index * 0.13) * drift
        node.y = node.baseY + Math.cos(t * (node.speed * 0.92) + node.phase * 0.85) * secondary
      })

      for (const edge of state.edges) {
        const from = state.nodes[edge.from]
        const to = state.nodes[edge.to]
        const dx = to.x - from.x
        const dy = to.y - from.y
        const distance = Math.hypot(dx, dy)
        const alpha = clamp(1 - distance / 240, 0.05, 0.16)

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`
        ctx.lineWidth = 0.7
        ctx.stroke()

        if (!state.reducedMotion) {
          const pulse = (t * edge.pulseSpeed + edge.pulseOffset) % 1
          const px = from.x + dx * pulse
          const py = from.y + dy * pulse
          const glow = ctx.createRadialGradient(px, py, 0, px, py, 18)
          glow.addColorStop(0, "rgba(226, 232, 240, 0.28)")
          glow.addColorStop(0.35, "rgba(148, 163, 184, 0.12)")
          glow.addColorStop(1, "rgba(148, 163, 184, 0)")

          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(px, py, 18, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      for (const node of state.nodes) {
        ctx.beginPath()
        ctx.fillStyle = "rgba(226, 232, 240, 0.32)"
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      rafId = window.requestAnimationFrame(draw)
    }

    const handleResize = () => {
      createScene()
    }

    const handleMotionChange = (event: MediaQueryListEvent) => {
      state.reducedMotion = event.matches
    }

    createScene()
    rafId = window.requestAnimationFrame(draw)
    window.addEventListener("resize", handleResize)
    mediaQuery.addEventListener("change", handleMotionChange)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener("resize", handleResize)
      mediaQuery.removeEventListener("change", handleMotionChange)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="signal-background absolute inset-0 h-full w-full opacity-60"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_32%),linear-gradient(to_bottom,rgba(10,10,10,0.08),rgba(10,10,10,0.24))]" />
    </div>
  )
}
