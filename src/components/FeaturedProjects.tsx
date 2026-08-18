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
              Mobile and web products that reflect how I approach product
              thinking, Firebase-backed architecture, and production-focused UX.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Reveal delay={60}>
              <ProjectCard
                title="Piyanomla Baş Başa"
                badge="In Release"
                description="A piano practice platform that records student performances, compares them with reference audio, and turns note accuracy and timing results into clear feedback."
                features={[
                  "Built the React Native practice flow for selecting a song, listening to reference audio, preparing with a metronome, recording a performance, and reviewing the result.",
                  "Implemented a Firebase-backed analysis job pipeline using Auth, Firestore, Storage, and Functions, with heavy audio processing handled by a Python/FastAPI service on Google Cloud Run.",
                  "Designed note-level feedback for correct, wrong, missed, extra, early, and late notes alongside overall, pitch, and timing scores.",
                  "Extended the product around student, teacher, and parent roles so practice history and performance summaries can support longer-term progress tracking.",
                ]}
                tech={[
                  "React Native",
                  "Expo",
                  "TypeScript",
                  "Firebase",
                  "Google Cloud Run",
                  "Python",
                  "FastAPI",
                  "FFmpeg",
                ]}
                links={[
                  {
                    label: "Project Page",
                    href: "/piyanomla-bas-basa",
                  },
                  {
                    label: "Privacy Policy",
                    href: "/piyanomla-bas-basa/privacy",
                  },
                ]}
              />
            </Reveal>

            <Reveal delay={90}>
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
                badge="Live Product"
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

            <Reveal delay={150}>
              <ProjectCard
                title="Barber Appointment System"
                badge="Developed"
                description="An appointment website that allows users to book appointments with barbers. I also developed dedicated areas where barbers can view their appointments and earnings."
                features={[
                  "I developed a React-based appointment management interface.",
                  "I managed appointments, queues, and user data through RESTful APIs.",
                  "Integrated a backend render service that receives CV data plus the selected theme, returns PDF binary output, and gives the app a more reliable cross-platform export flow than on-device PDF generation.",
                  "I handled async data flow, loading, and error states withI developed a React-based appointment manageructures.",
                ]}
                tech={[
                  "React",
                  "Express",
                  "Node JS",
                  "Rest-API",
                  "TailwindCSS",
                  "Prisma",
                  "TypeScript",
                ]}
                links={[
                  {
                    label: "Github Repo",
                    href: "https://github.com/MehmetHooke/Barber-DashBoard",
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
