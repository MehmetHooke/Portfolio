import GlassCard from "./GlassCard"
import ProjectCard from "./ProjectCard"

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <GlassCard className="p-6">

        <h2 className="mb-5 text-3xl font-semibold">Featured Projects</h2>
        <div className="mb-5">
          <p>You can check my GitHub for more projects</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* QuickCV */}
          <ProjectCard
            title="QuickCV — Mobile CV Builder"
            description="A mobile-first CV builder designed with a real product mindset."
            features={[
              "Multi-step CV creation flow",
              "Firebase Auth & Firestore data model",
              "Scalable architecture for premium features",
              "Clean, print-ready PDF outputs",
            ]}
            tech={[
              "React Native",
              "Expo",
              "TypeScript",
              "Firebase",
            ]}
            links={[
              {
                label:"Play Store",
                href:"https://play.google.com/store/apps/details?id=com.anonymous.quicklycv"
              },
              {
                label: "GitHub",
                href: "https://github.com/MehmetHooke/quick-cv",
              },
              {
                label: "Demo Video",
                href: "https://www.linkedin.com/posts/mehmethoke_reactnative-expo-firebase-activity-7397329037620297729-EFii",
              },
            ]}
          />

          {/* Yanlış Defteri */}
          <ProjectCard
            title="Yanlış Defteri — Study Mistake Tracker"
            description="A focused productivity app for students to track and categorize their incorrectly solved questions."
            features={[
              "Capture or upload question photos",
              "Categorize by lesson & topic",
              "Firebase Auth & cloud storage",
              "Clean minimal UI for focused study",
            ]}
            tech={[
              "React Native",
              "Expo",
              "TypeScript",
              "Firebase",
            ]}
            links={[
              {
                label: "GitHub",
                href: "https://github.com/MehmetHooke/yanlis-defteri",
              },
              {
                label: "Privacy Policy",
                href: "/privacy",
              },
             
              {
                label: "Play Store",
                href: "https://play.google.com/store/apps/details?id=com.mehmethooke.yanlisdefteri",
              },
            ]}
          />

          {/* Barber Dashboard */}
          <ProjectCard
            title="Barber Dashboard — Appointment Management System"
            description="A modern role-based appointment system for barbers and customers, built around real-world booking and daily operations."
            features={[
              "Customer flow for service selection, time booking, cancellation, and appointment tracking",
              "Barber dashboard for daily queue management and status updates",
              "JWT auth with /auth/me validation, 401 handling, and automatic logout",
              "Responsive mobile-first UI with light/dark theme support",
            ]}
            tech={[
              "React",
              "TypeScript",
              "Vite",
              "Node.js",
              "Express",
              "Prisma",
              "PostgreSQL",
              "Tailwind",
              "shadcn/ui",
            ]}
            links={[
              {
                label: "GitHub",
                href: "https://github.com/MehmetHooke/Barber-DashBoard",
              },
            ]}
          />

        </div>
      </GlassCard>
    </section>
  )
}
