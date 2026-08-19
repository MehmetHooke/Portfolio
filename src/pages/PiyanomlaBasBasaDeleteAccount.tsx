import { Link } from "react-router-dom"

const deletedData = [
  "Kullanıcı hesabı ve profil bilgileri",
  "Hesapla ilişkili ad, soyad ve e-posta bilgileri",
  "Kullanıcının yüklediği piyano performans kayıtları",
  "Analiz işleri, analiz sonuçları ve çalışma geçmişi",
  "Varsa öğrenci, öğretmen, veli ve sınıf bağlantılarıyla ilişkili hesap verileri",
]

export default function PiyanomlaBasBasaDeleteAccount() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Link
          to="/piyanomla-bas-basa"
          className="inline-flex text-sm text-white/60 transition hover:text-white"
        >
          ← Piyanomla Baş Başa sayfasına dön
        </Link>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-indigo-300">
            Piyanomla Baş Başa · Hesap ve Veri Silme
          </p>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Hesap Silme Talebi
          </h1>

          <p className="mt-6 leading-7 text-white/70">
            Piyanomla Baş Başa kullanıcıları, uygulama hesaplarının ve bu
            hesapla ilişkili kişisel verilerin silinmesini talep edebilir.
            Bu sayfa, uygulamaya erişiminiz olmasa bile silme talebi
            oluşturabilmeniz için hazırlanmıştır.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Nasıl talep oluşturulur?</h2>

          <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-white/70">
            <li>
              Piyanomla Baş Başa hesabınızda kullandığınız kayıtlı e-posta
              adresinden aşağıdaki iletişim adresine e-posta gönderin.
            </li>
            <li>
              E-posta konusu olarak “Piyanomla Baş Başa Hesap Silme Talebi”
              yazın.
            </li>
            <li>
              Mesajınızda hesabınızın ve ilişkili uygulama verilerinizin
              silinmesini istediğinizi belirtin.
            </li>
            <li>
              Hesabın size ait olduğunu doğrulamamız gerekirse yalnızca gerekli
              doğrulama bilgileri için sizinle iletişime geçilir.
            </li>
          </ol>

          <a
            href="mailto:hoke628@gmail.com?subject=Piyanomla%20Ba%C5%9F%20Ba%C5%9Fa%20Hesap%20Silme%20Talebi"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-white/90"
          >
            Hesap silme talebi gönder
          </a>

          <p className="mt-3 text-sm text-white/50">hoke628@gmail.com</p>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Silinecek veriler</h2>
          <p className="mt-3 leading-7 text-white/65">
            Talebiniz doğrulandıktan sonra hesabınız ve hesabınızla doğrudan
            ilişkili veriler silinir. Buna aşağıdaki veriler dahildir:
          </p>

          <ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-white/70">
            {deletedData.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Veri saklama</h2>
          <p className="mt-3 leading-7 text-white/65">
            Yasal yükümlülük, güvenlik, dolandırıcılığı önleme veya uyuşmazlık
            çözümü gibi meşru ve zorunlu nedenlerle belirli kayıtların sınırlı
            süreyle saklanması gerekebilir. Böyle bir durum varsa yalnızca
            gerekli veriler, gerekli olduğu süre boyunca tutulur.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Gizlilik</h2>
          <p className="mt-3 leading-7 text-white/65">
            Piyanomla Baş Başa’nın veri işleme uygulamaları hakkında daha fazla
            bilgi için gizlilik politikasını inceleyebilirsiniz.
          </p>
          <Link
            to="/piyanomla-bas-basa/privacy"
            className="mt-5 inline-flex rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
          >
            Gizlilik Politikasını Aç
          </Link>
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-white/45">
          © {new Date().getFullYear()} Mehmet Hoke — Piyanomla Baş Başa
        </footer>
      </div>
    </main>
  )
}
