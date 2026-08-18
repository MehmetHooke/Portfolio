import { Link } from "react-router-dom"

const highlights = [
  {
    title: "Performans Kaydı",
    description:
      "Öğrenci, seçtiği piyano parçasını dinleyebilir, metronom ile hazırlanabilir ve kendi performansını kaydedebilir.",
  },
  {
    title: "Nota ve Zamanlama Analizi",
    description:
      "Kaydedilen performans referans kayıtla karşılaştırılır; nota doğruluğu, zamanlama ve nota bazlı geri bildirimler sunulur.",
  },
  {
    title: "Gelişim Takibi",
    description:
      "Analiz sonuçları geçmiş çalışmalarla birlikte görüntülenebilir ve öğrencinin ilerlemesini takip etmesine yardımcı olur.",
  },
  {
    title: "Öğretmen ve Veli Deneyimi",
    description:
      "Bağlantılı öğretmen ve veli hesapları, öğrencinin çalışma sürecini ve performans özetlerini takip etmek için tasarlanmıştır.",
  },
]

const technologies = [
  "React Native",
  "Expo",
  "TypeScript",
  "Firebase Auth",
  "Cloud Firestore",
  "Firebase Storage",
  "Firebase Functions",
  "Google Cloud Run",
  "Python",
  "FastAPI",
  "FFmpeg",
]

export default function PiyanomlaBasBasa() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Link
          to="/"
          className="inline-flex text-sm text-white/60 transition hover:text-white"
        >
          ← Portfolyoya dön
        </Link>

        <section className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-indigo-300">
              Mobile · Music Education · Audio Analysis
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Piyanomla Baş Başa
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Piyanomla Baş Başa, piyano öğrencilerinin çalışmalarını kaydedip
              analiz sonuçlarını anlaşılır geri bildirimlerle takip etmelerine
              yardımcı olan bir mobil çalışma platformudur.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-white/60">
              Uygulama; öğrencinin performansını referans kayıtla karşılaştırır,
              nota doğruluğu ve temel zamanlama değerlendirmesi sunar. Öğretmen
              ve veli rolleri ise öğrencinin çalışma sürecini takip etmeyi
              kolaylaştıracak şekilde tasarlanmıştır.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 leading-7 text-white/65">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Teknoloji</h2>
          <p className="mt-3 max-w-3xl leading-7 text-white/65">
            Mobil uygulama Firebase tabanlı servislerle çalışır. Ses analizi için
            Firebase Functions üzerinden güvenli şekilde tetiklenen Google Cloud
            Run servisi kullanılır.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm text-white/75"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section
          id="support"
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <h2 className="text-2xl font-semibold">Destek ve İletişim</h2>
          <p className="mt-3 max-w-3xl leading-7 text-white/65">
            Piyanomla Baş Başa ile ilgili teknik destek, gizlilik veya hesap
            işlemleri için e-posta üzerinden iletişime geçebilirsiniz.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="mailto:hoke628@gmail.com"
              className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-white/90"
            >
              hoke628@gmail.com
            </a>
            <Link
              to="/piyanomla-bas-basa/privacy"
              className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
            >
              Gizlilik Politikası
            </Link>
          </div>
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-white/45">
          © {new Date().getFullYear()} Mehmet Hoke — Piyanomla Baş Başa
        </footer>
      </div>
    </main>
  )
}
