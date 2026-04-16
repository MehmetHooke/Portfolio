import GlassCard from "./GlassCard"
import ProjectCard from "./ProjectCard"
import Reveal from "./Reveal"

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <GlassCard className="p-6">
          <div className="mb-8 flex flex-col gap-3">
            <h2 className="text-3xl font-semibold">Featured Projects</h2>
            <p className="max-w-3xl text-white/65">
              Two shipped mobile products that reflect how I approach product
              thinking, Firebase-backed architecture, and mobile UX in
              production.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Reveal delay={60}>
              <ProjectCard
                title="Yanlis Defteri"
                badge="Live Product"
                description="A mobile learning app for students who want to archive questions they got wrong and revisit them through structured, repeatable study flows."
                features={[
                  "Designed the core lesson > topic > question hierarchy so users can save, edit, and manage study material in a way that stays usable as their archive grows.",
                  "Built personalized review modes for weak areas, mixed repetition, retention checks, and mini multiple-choice quizzes to turn stored mistakes into repeatable practice.",
                  "Used Firebase Auth, Cloud Firestore, and Firebase Storage as the product data backbone, including session persistence and cloud-backed question records.",
                  "Implemented local daily reminder notifications with Expo Notifications and shipped the app to Google Play, where it is used by real users.",
                ]}
                tech={[
                  "React Native",
                  "Expo",
                  "TypeScript",
                  "Firebase Auth",
                  "Cloud Firestore",
                  "Firebase Storage",
                  "Expo Notifications",
                ]}
                links={[
                  {
                    label: "Google Play",
                    href: "https://play.google.com/store/apps/details?id=com.mehmethooke.yanlisdefteri",
                  },
                  {
                    label: "GitHub",
                    href: "https://github.com/MehmetHooke/yanlis-defteri",
                  },
                  {
                    label: "Privacy Policy",
                    href: "/privacy",
                  },
                ]}
              />
            </Reveal>

            <Reveal delay={150}>
              <ProjectCard
                title="QuickCV"
                badge="Shipped App"
                description="A mobile CV builder that helps users create professional resumes step by step, preview them on-device, and export polished PDFs from a consistent backend render pipeline."
                features={[
                  "Built the end-to-end mobile flow for collecting personal information, education, experience, skills, languages, certifications, and summary content in a guided React Native experience.",
                  "Stored reusable CV records in Firestore so users can revisit and update previously created resumes instead of starting from scratch each time.",
                  "Integrated a backend render service that receives CV data plus the selected theme, returns PDF binary output, and gives the app a more reliable cross-platform export flow than on-device PDF generation.",
                  "Added local caching and share flows with expo-file-system and expo-sharing, alongside theme-based premium and usage-limit logic for a product-ready feature set.",
                ]}
                tech={[
                  "React Native",
                  "Expo",
                  "TypeScript",
                  "Firebase / Firestore",
                  "Backend Render Service",
                  "expo-file-system",
                  "expo-sharing",
                ]}
                links={[
                  {
                    label: "Google Play",
                    href: "https://play.google.com/store/apps/details?id=com.anonymous.quicklycv",
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
            </Reveal>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  )
}
