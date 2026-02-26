export default function DeleteAccount() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">
          Yanlış Defteri – Hesap Silme Talebi
        </h1>

        <p className="text-white/80 mb-6">
          Yanlış Defteri kullanıcıları, hesaplarının ve ilişkili verilerinin
          silinmesini talep edebilir.
        </p>

        <h2 className="text-xl font-semibold mb-3">
          Hesabınızı Nasıl Silebilirsiniz?
        </h2>

        <p className="text-white/80 mb-4">
          Hesap silme talebinde bulunmak için aşağıdaki e-posta adresine
          kayıtlı e-posta adresiniz ile bir talep göndermeniz yeterlidir:
        </p>

        <a
          href="mailto:hoke628@gmail.com?subject=Yanlış%20Defteri%20Hesap%20Silme%20Talebi"
          className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition"
        >
          hoke628@gmail.com
        </a>

        <div className="mt-10 space-y-4 text-white/80">
          <p>
            Talebiniz doğrulandıktan sonra hesabınız ve ilişkili verileriniz
            makul süre içerisinde sistemden silinecektir.
          </p>

          <p>
            Silme işlemi aşağıdaki verileri kapsar:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Kullanıcı hesabı</li>
            <li>Soru kayıtları</li>
            <li>Yüklenen fotoğraflar</li>
            <li>İlişkili veritabanı kayıtları</li>
          </ul>

          <p className="text-white/60 text-sm">
            Not: Yasal yükümlülükler kapsamında saklanması gereken veriler
            hariç tutulabilir.
          </p>
        </div>

        <div className="mt-12 text-xs text-white/50">
          © {new Date().getFullYear()} Mehmet Hoke — Yanlış Defteri
        </div>
      </div>
    </main>
  )
}