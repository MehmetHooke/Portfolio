export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Yanlış Defteri – Gizlilik Politikası</h1>

        <div className="mt-3 text-sm text-white/70 space-y-1">
          <p>
            <span className="font-semibold text-white">Son Güncelleme:</span>{" "}
            26.02.2026
          </p>
          <p>
            <span className="font-semibold text-white">Yürürlük Tarihi:</span>{" "}
            26.02.2026
          </p>
          <p>
            <span className="font-semibold text-white">Geliştirici:</span>{" "}
            Mehmet Hoke
          </p>
          <p>
            <span className="font-semibold text-white">İletişim:</span>{" "}
            <a
              className="underline underline-offset-4 hover:text-white"
              href="mailto:hoke628@gmail.com"
            >
              hoke628@gmail.com
            </a>
          </p>
        </div>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Toplanan Veriler</h2>
          <p className="text-white/80">
            Yanlış Defteri aşağıdaki kullanıcı verilerini işleyebilir:
          </p>
          <ul className="list-disc pl-5 text-white/80 space-y-2">
            <li>
              E-posta adresi ve kimlik bilgileri (Firebase Authentication
              aracılığıyla)
            </li>
            <li>
              Kullanıcı tarafından oluşturulan içerikler (soru metinleri,
              açıklamalar, ders/konu etiketleri)
            </li>
            <li>
              Fotoğraflar (kullanıcının seçerek veya kamera ile çekerek
              yüklediği görseller)
            </li>
            <li>
              Uygulama performans verileri (çökme raporları ve teknik hata
              kayıtları – kullanılması halinde)
            </li>
          </ul>
          <p className="text-white/80">
            Uygulama, kamera ve galeri erişimini yalnızca kullanıcının açık izni
            ile kullanır.
          </p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. Verilerin Kullanım Amaçları</h2>
          <p className="text-white/80">Toplanan veriler:</p>
          <ul className="list-disc pl-5 text-white/80 space-y-2">
            <li>Hesap oluşturma ve kimlik doğrulama</li>
            <li>Kullanıcı içeriklerini saklama ve senkronizasyon</li>
            <li>Uygulama özelliklerini sağlama</li>
            <li>Uygulama performansını iyileştirme</li>
          </ul>
          <p className="text-white/80">amacıyla işlenir.</p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. Veri Saklama ve Altyapı</h2>
          <p className="text-white/80">
            Yanlış Defteri, Google LLC tarafından sağlanan Firebase hizmetlerini
            kullanır:
          </p>
          <ul className="list-disc pl-5 text-white/80 space-y-2">
            <li>Firebase Authentication</li>
            <li>Cloud Firestore / Realtime Database</li>
            <li>Firebase Storage</li>
          </ul>
          <p className="text-white/80">
            Veriler güvenli bağlantılar (HTTPS) üzerinden iletilir ve Firebase
            altyapısında saklanır.
          </p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Veri Paylaşımı</h2>
          <p className="text-white/80">
            Kişisel veriler üçüncü taraflara satılmaz. Veriler yalnızca:
          </p>
          <ul className="list-disc pl-5 text-white/80 space-y-2">
            <li>
              Uygulamanın çalışması için gerekli hizmet sağlayıcılarla (örneğin
              Firebase)
            </li>
            <li>Yasal zorunluluk durumlarında resmi makamlarla</li>
          </ul>
          <p className="text-white/80">paylaşılabilir.</p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Veri Saklama Süresi ve Silme</h2>
          <p className="text-white/80">
            Veriler, kullanıcı hesabı aktif olduğu sürece saklanır. Kullanıcılar:
          </p>
          <ul className="list-disc pl-5 text-white/80 space-y-2">
            <li>
              <a
                className="underline underline-offset-4 hover:text-white"
                href="mailto:hoke628@gmail.com"
              >
                hoke628@gmail.com
              </a>{" "}
              adresine talep göndererek verilerinin silinmesini talep edebilir.
            </li>
          </ul>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Çocukların Gizliliği</h2>
          <p className="text-white/80">
            Yanlış Defteri 13 yaş altındaki çocuklara yönelik değildir. 13 yaş
            altındaki bir kullanıcının veri paylaştığı tespit edilirse veriler
            silinir.
          </p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. Kullanıcı Hakları</h2>
          <p className="text-white/80">Kullanıcılar:</p>
          <ul className="list-disc pl-5 text-white/80 space-y-2">
            <li>Verilerine erişme</li>
            <li>Düzeltme</li>
            <li>Silme talep etme</li>
            <li>Hesaplarını silme</li>
          </ul>
          <p className="text-white/80">haklarına sahiptir.</p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. Değişiklikler</h2>
          <p className="text-white/80">
            Bu politika zaman zaman güncellenebilir. Güncel sürüm web sitesinde
            yayınlanır.
          </p>
        </section>

        <div className="mt-12 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Mehmet Hoke — Yanlış Defteri
          </p>
        </div>
      </div>
    </main>
  )
}