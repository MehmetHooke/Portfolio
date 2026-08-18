import { Link } from "react-router-dom"

export default function PiyanomlaBasBasaPrivacy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/piyanomla-bas-basa"
          className="inline-flex text-sm text-white/60 transition hover:text-white"
        >
          ← Piyanomla Baş Başa sayfasına dön
        </Link>

        <h1 className="mt-8 text-3xl font-bold">
          Piyanomla Baş Başa – Gizlilik Politikası
        </h1>

        <div className="mt-3 space-y-1 text-sm text-white/70">
          <p>
            <span className="font-semibold text-white">Son Güncelleme:</span>{" "}
            18.08.2026
          </p>
          <p>
            <span className="font-semibold text-white">Yürürlük Tarihi:</span>{" "}
            18.08.2026
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
          <h2 className="text-xl font-semibold">1. Bu Politikanın Kapsamı</h2>
          <p className="text-white/80">
            Bu Gizlilik Politikası, Piyanomla Baş Başa mobil uygulamasında
            işlenen kullanıcı verilerini, bu verilerin hangi amaçlarla
            kullanıldığını ve kullanıcıların bu veriler üzerindeki haklarını
            açıklar.
          </p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. İşlenebilen Veriler</h2>
          <p className="text-white/80">
            Uygulamanın kullanılan özelliklerine bağlı olarak aşağıdaki veri
            türleri işlenebilir:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-white/80">
            <li>Ad ve soyad gibi hesap bilgileri</li>
            <li>E-posta adresi ve hesap kimlik bilgileri</li>
            <li>Kullanıcı rolü ve hesap ilişkileri (öğrenci, öğretmen, veli)</li>
            <li>Kullanıcının uygulama üzerinden oluşturduğu piyano ses kayıtları</li>
            <li>
              Performans ve analiz sonuçları; örneğin genel skor, nota
              doğruluğu, zamanlama ve nota bazlı geri bildirimler
            </li>
            <li>
              Uygulamanın çalışması için gerekli teknik kayıtlar ve hata
              bilgileri, bu tür kayıtlar kullanılıyorsa
            </li>
          </ul>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. Mikrofon ve Ses Kayıtları</h2>
          <p className="text-white/80">
            Piyanomla Baş Başa, kullanıcının piyano performansını kaydedebilmesi
            için cihaz mikrofonuna yalnızca kullanıcının verdiği izin sonrasında
            erişir.
          </p>
          <p className="text-white/80">
            Oluşturulan ses kayıtları, performansın referans kayıtla
            karşılaştırılması ve analiz sonucunun oluşturulması amacıyla
            işlenebilir ve uygulamanın altyapısında saklanabilir.
          </p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Verilerin Kullanım Amaçları</h2>
          <p className="text-white/80">İşlenen veriler şu amaçlarla kullanılabilir:</p>
          <ul className="list-disc space-y-2 pl-5 text-white/80">
            <li>Hesap oluşturma ve kimlik doğrulama</li>
            <li>Uygulamadaki kullanıcı rolünü ve yetkileri yönetme</li>
            <li>Piyano performans kayıtlarını yükleme ve saklama</li>
            <li>Nota ve zamanlama analizi üretme</li>
            <li>Geçmiş performans sonuçlarını kullanıcıya gösterme</li>
            <li>
              İzin verilen öğrenci, öğretmen ve veli ilişkilerinde ilgili
              performans bilgilerini gösterebilme
            </li>
            <li>Uygulama güvenliğini ve teknik çalışmasını sürdürme</li>
          </ul>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Kullanılan Altyapı ve Hizmetler</h2>
          <p className="text-white/80">
            Uygulama, temel işlevlerini sağlamak için Google tarafından sunulan
            Firebase ve Google Cloud hizmetlerinden yararlanır. Kullanılan
            hizmetler uygulamanın sürümüne ve aktif özelliklerine göre şunları
            içerebilir:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-white/80">
            <li>Firebase Authentication</li>
            <li>Cloud Firestore</li>
            <li>Firebase Storage</li>
            <li>Firebase Functions</li>
            <li>Google Cloud Run</li>
          </ul>
          <p className="text-white/80">
            Ses kayıtları, analiz işleminin gerçekleştirilebilmesi için bu
            altyapı üzerinden güvenli bağlantılar kullanılarak aktarılabilir ve
            işlenebilir.
          </p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Veri Paylaşımı</h2>
          <p className="text-white/80">
            Kişisel veriler reklam amacıyla satılmaz. Veriler yalnızca uygulama
            hizmetlerinin sunulması için gerekli altyapı sağlayıcılarıyla veya
            yürürlükteki mevzuatın zorunlu kıldığı durumlarda yetkili makamlarla
            paylaşılabilir.
          </p>
          <p className="text-white/80">
            Öğrenci performans bilgilerinin öğretmen veya veli hesaplarında
            görüntülenmesi, uygulamadaki yetkilendirme ve bağlantı kuralları
            kapsamında gerçekleştirilir.
          </p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. Çocukların Gizliliği</h2>
          <p className="text-white/80">
            Piyanomla Baş Başa çocukların da kullanabileceği bir eğitim
            uygulamasıdır. Çocuk kullanıcıların verilerinin işlenmesinde,
            uygulamanın sunduğu öğrenci, öğretmen ve veli hesap yapıları ile
            yürürlükteki uygulanabilir gizlilik kuralları dikkate alınır.
          </p>
          <p className="text-white/80">
            Çocuk kullanıcılarla ilgili veriler yalnızca uygulamanın eğitim ve
            performans takibi işlevlerini sağlamak amacıyla kullanılmalıdır.
            Uygulama, bu verileri davranışsal reklam amacıyla satmaz.
          </p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. Veri Saklama ve Silme</h2>
          <p className="text-white/80">
            Veriler, ilgili uygulama işlevlerini sağlamak ve kullanıcının hesabını
            sürdürmek için gerekli olduğu sürece saklanabilir. Kullanıcılar hesap
            ve veri silme talepleri için aşağıdaki e-posta adresinden iletişime
            geçebilir:
          </p>
          <p>
            <a
              className="underline underline-offset-4 hover:text-white"
              href="mailto:hoke628@gmail.com"
            >
              hoke628@gmail.com
            </a>
          </p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">9. Kullanıcı Hakları</h2>
          <p className="text-white/80">
            Uygulanabilir mevzuat kapsamında kullanıcılar kendileriyle ilgili
            kişisel verilere erişme, yanlış verilerin düzeltilmesini isteme,
            verilerin silinmesini talep etme ve hesaplarının silinmesini isteme
            haklarına sahip olabilir.
          </p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">10. Politika Değişiklikleri</h2>
          <p className="text-white/80">
            Bu politika uygulamadaki özellikler veya veri işleme süreçleri
            değiştiğinde güncellenebilir. Güncel sürüm bu web adresinde
            yayınlanır ve sayfanın üst kısmındaki son güncelleme tarihi yenilenir.
          </p>
        </section>

        <hr className="my-8 border-white/10" />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">11. İletişim</h2>
          <p className="text-white/80">
            Bu Gizlilik Politikası veya Piyanomla Baş Başa uygulamasındaki veri
            işleme uygulamaları hakkında sorularınız için:
          </p>
          <a
            className="underline underline-offset-4 hover:text-white"
            href="mailto:hoke628@gmail.com"
          >
            hoke628@gmail.com
          </a>
        </section>

        <div className="mt-12 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Mehmet Hoke — Piyanomla Baş Başa</p>
        </div>
      </div>
    </main>
  )
}
