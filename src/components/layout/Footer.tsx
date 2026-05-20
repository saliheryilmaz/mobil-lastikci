import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary pt-16 pb-24 md:pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image src="/gallery/logo1.jpg" alt="Mobil Lastikçi Logo" fill className="object-cover" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Mobil Lastikçi</h2>
            </div>
            <p className="text-foreground-muted mb-6">
              İstanbul'un her noktasına 7/24 kesintisiz mobil lastikçi ve yol yardım hizmeti sunuyoruz. Yolda kalmayın, bize ulaşın.
            </p>
            <div className="flex items-center gap-3 text-primary font-bold text-xl">
              <Phone size={24} />
              <a href="tel:+905394456052">0539 445 60 52</a>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6 border-b border-white/10 pb-2 inline-block">
              Hizmetlerimiz
            </h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-foreground-muted hover:text-primary transition-colors">Yerinde Lastik Değişimi</Link></li>
              <li><Link href="#" className="text-foreground-muted hover:text-primary transition-colors">Patlak Lastik Tamiri</Link></li>
              <li><Link href="#" className="text-foreground-muted hover:text-primary transition-colors">Akü Takviye & Değişim</Link></li>
              <li><Link href="#" className="text-foreground-muted hover:text-primary transition-colors">7/24 Yol Yardım</Link></li>
              <li><Link href="#" className="text-foreground-muted hover:text-primary transition-colors">Balans Ayarı</Link></li>
            </ul>
          </div>

          {/* Hizmet Bölgeleri (SEO) */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6 border-b border-white/10 pb-2 inline-block">
              Hizmet Bölgeleri
            </h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/istanbul/besiktas" className="text-foreground-muted hover:text-primary transition-colors">Beşiktaş Lastikçi</Link></li>
              <li><Link href="/istanbul/sisli" className="text-foreground-muted hover:text-primary transition-colors">Şişli Lastikçi</Link></li>
              <li><Link href="/istanbul/kadikoy" className="text-foreground-muted hover:text-primary transition-colors">Kadıköy Lastikçi</Link></li>
              <li><Link href="/istanbul/atasehir" className="text-foreground-muted hover:text-primary transition-colors">Ataşehir Lastikçi</Link></li>
              <li><Link href="/istanbul" className="text-primary hover:underline text-sm font-semibold mt-2 flex items-center gap-1">Tüm Bölgeleri Gör &rarr;</Link></li>
            </ul>
          </div>

          {/* Lastik Rehberi */}
          <div className="lg:hidden xl:block">
            <h3 className="text-lg font-bold text-foreground mb-6 border-b border-white/10 pb-2 inline-block">
              Lastik Rehberi
            </h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/lastik-rehberi/lastik-ebat-okuma" className="text-foreground-muted hover:text-primary transition-colors">Lastik Ebat Okuma</Link></li>
              <li><Link href="/lastik-rehberi/yazlik-kislik-lastik-farklari" className="text-foreground-muted hover:text-primary transition-colors">Yazlık vs Kışlık Lastik</Link></li>
              <li><Link href="/lastik-rehberi/lastik-hava-basinci" className="text-foreground-muted hover:text-primary transition-colors">Hava Basıncı Rehberi</Link></li>
              <li><Link href="/lastik-rehberi" className="text-primary hover:underline text-sm font-semibold mt-2 flex items-center gap-1">Tüm Rehberleri Gör &rarr;</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6 border-b border-white/10 pb-2 inline-block">
              İletişim
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <span className="text-foreground-muted"> İstanbul (Mobil Ekiplerimiz Tüm İstanbul'dadır)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:info@mobillastikci.com" className="text-foreground-muted hover:text-primary transition-colors">info@mobillastikci.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-primary shrink-0" />
                <span className="text-foreground-muted">7 Gün 24 Saat Açık</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground-muted text-sm text-center md:text-left">
            &copy; {currentYear} Mobil Lastikçi. Tüm Hakları Saklıdır. | Profesyonel Yol Yardım Platformu
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-foreground-muted hover:text-primary">Gizlilik Politikası</Link>
            <Link href="#" className="text-foreground-muted hover:text-primary">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
