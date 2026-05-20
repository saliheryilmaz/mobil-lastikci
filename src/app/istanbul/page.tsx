import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Navigation } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { avrupaDistricts, anadoluDistricts } from "@/data/districts";

export const metadata: Metadata = {
  title: "İstanbul Mobil Lastikçi Hizmet Bölgeleri | 39 İlçede 7/24",
  description:
    "İstanbul'un 39 ilçesinde 7/24 mobil lastikçi hizmeti. Avrupa ve Anadolu yakasında yerinde lastik değişimi, tamiri ve yol yardım. Bulunduğunuz ilçeyi seçin, hemen arayın.",
};

export default function IstanbulPage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-background-secondary border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "İstanbul Hizmet Bölgeleri" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 inline-block">
              HİZMET BÖLGELERİMİZ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              İstanbul&apos;un{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                39 İlçesinde
              </span>{" "}
              Yanınızdayız
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
              Avrupa ve Anadolu yakasında tam donanımlı mobil servis
              araçlarımızla bulunduğunuz noktaya geliyoruz. İlçenizi seçerek
              detaylı bilgi alın.
            </p>
          </div>
        </div>
      </section>

      {/* Avrupa Yakası */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Navigation size={20} className="text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Avrupa Yakası
            </h2>
            <span className="text-sm text-foreground-muted glass px-3 py-1 rounded-full">
              {avrupaDistricts.length} ilçe
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {avrupaDistricts.map((d) => (
              <Link
                key={d.slug}
                href={`/istanbul/${d.slug}`}
                className="glass p-5 rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {d.name}
                  </h3>
                  {d.arrivalTime !== "—" && (
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                      ~{d.arrivalTime}
                    </span>
                  )}
                </div>
                <p className="text-sm text-foreground-muted line-clamp-2 leading-relaxed">
                  {d.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Anadolu Yakası */}
      <section className="py-16 bg-background-secondary border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Navigation size={20} className="text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Anadolu Yakası
            </h2>
            <span className="text-sm text-foreground-muted glass px-3 py-1 rounded-full">
              {anadoluDistricts.length} ilçe
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {anadoluDistricts.map((d) => (
              <Link
                key={d.slug}
                href={`/istanbul/${d.slug}`}
                className="glass p-5 rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {d.name}
                  </h3>
                  {d.arrivalTime !== "—" && (
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                      ~{d.arrivalTime}
                    </span>
                  )}
                </div>
                <p className="text-sm text-foreground-muted line-clamp-2 leading-relaxed">
                  {d.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <MapPin size={40} className="text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            İlçenizi bulamadınız mı?
          </h2>
          <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
            İstanbul&apos;un tüm bölgelerine hizmet veriyoruz. Bizi arayın, en
            yakın mobil ekibimiz konumunuza yönlendirilsin.
          </p>
          <a
            href="tel:+905555555555"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-background-secondary px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-[0_0_30px_rgba(255,184,0,0.3)]"
          >
            <Phone size={24} />
            <span>Hemen Ara: 0555 555 5555</span>
          </a>
        </div>
      </section>
    </main>
  );
}
