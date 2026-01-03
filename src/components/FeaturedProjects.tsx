import GlassCard from "./GlassCard"
import ProjectCard from "./ProjectCard"

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <GlassCard className="p-6">

      
      <h2 className="mb-5 text-3xl font-semibold">Featured Projects</h2>
      <div className="mb-5">
      <p>You can check my GitHub to further projects</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
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
              label: "GitHub",
              href: "https://github.com/MehmetHooke/quick-cv",
            },
            {
              label: "Demo Video",
              href: "https://www.linkedin.com/posts/mehmethoke_reactnative-expo-firebase-activity-7397329037620297729-EFii",
            },
          ]}
        />

        <ProjectCard
          title="MovieShelf — Movie Discovery App"
          description="A movie discovery app with authentication and favorites."
          features={[
            "Firebase Auth & protected routes",
            "Favorites CRUD with Firestore",
            "External movie API integration",
            "Responsive UI with modern layout",
          ]}
          tech={[
            "React",
            "TypeScript",
            "Tailwind",
            "Firebase",
            "REST API",
          ]}
          links={[
            {
              label: "Live Demo",
              href: "https://movieshelf-one.vercel.app/",
            },
            {
              label: "GitHub",
              href: "https://github.com/MehmetHooke/movieshelf",
            },
          ]}
        />
      </div>
      </GlassCard>
    </section>
  )
}
