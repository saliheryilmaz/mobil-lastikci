import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ShieldCheck,
  Wrench,
  BatteryCharging,
  Zap,
  Settings,
  Truck,
  Navigation,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { districts } from "@/data/districts";

interface PageProps {
  params: Promise<{ district: string }>;
}

export async function generateStaticParams() {
  return districts.map((d) => ({ district: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { district: slug } = await params;
  const district = districts.find((d) => d.slug === slug);
  if (!district) return {};
  return {
    title: `${district.name} Mobil Lastikçi | 7/24 Yerinde Lastik Değişimi`,
    description: `${district.name} bölgesinde 7/24 mobil lastikçi hizmeti. Yerinde lastik değişimi, tamiri ve akü takviyesi. ${district.arrivalTime !== "—" ? `Ortalama ${district.arrivalTime} varış süresi.` : ""} Hemen arayın!`,
  };
}

const services = [
  { title: "Yerinde Lastik Değişimi", icon: <Wrench size={24} /> },
  { title: "Patlak Lastik Tamiri", icon: <Settings size={24} /> },
  { title: "Akü Takviye & Değişim", icon: <BatteryCharging size={24} /> },
  { title: "7/24 Acil Yol Yardım", icon: <Truck size={24} /> },
  { title: "Balans Ayarı", icon: <Zap size={24} /> },
  { title: "Seyyar Jant Düzeltme", icon: <Navigation size={24} /> },
];

export default async function DistrictPage({ params }: PageProps) {
  const { district: slug } = await params;
  const district = districts.find((d) => d.slug === slug);
  if (!district) notFound();

  const nearbyDistricts = districts
    .filter((d) => d.side === district.side && d.slug !== district.slug)
    .slice(0, 6);

  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-background-secondary border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "İstanbul", href: "/istanbul" },
              { label: `${district.name} Lastikçi` },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 border-primary/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">
                {district.name} bölgesinde aktif ekip mevcut
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              {district.name}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                Mobil Lastikçi
              </span>
            </h1>

            <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed mb-10">
              {district.description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:+905394456052"
                className="group flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-background-secondary px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-[0_0_30px_rgba(255,184,0,0.3)]"
              >
                <Phone size={24} className="group-hover:animate-bounce" />
                <span>Hemen Ara: 0539 445 60 52</span>
              </a>
              <a
                href="https://wa.me/905394456052"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 glass hover:bg-white/10 text-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                <MessageCircle size={24} className="text-[#25D366]" />
                <span>WhatsApp&apos;tan Konum At</span>
              </a>
            </div>

            {/* Trust */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <Clock size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">7/24</span>
                  <span className="text-xs text-foreground-muted">Kesintisiz Hizmet</span>
                </div>
              </div>
              {district.arrivalTime !== "—" && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">{district.arrivalTime}</span>
                    <span className="text-xs text-foreground-muted">Ortalama Varış</span>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <ShieldCheck size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">Garantili</span>
                  <span className="text-xs text-foreground-muted">Profesyonel İşlem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 inline-block">
            {district.name} HİZMETLERİMİZ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            {district.name} Bölgesinde Sunduğumuz Hizmetler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-background-secondary transition-all">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Districts */}
      {nearbyDistricts.length > 0 && (
        <section className="py-16 bg-background-secondary border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Yakın Bölgeler
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {nearbyDistricts.map((nd) => (
                <Link
                  key={nd.slug}
                  href={`/istanbul/${nd.slug}`}
                  className="glass p-4 rounded-xl text-center hover:border-primary/50 transition-all group"
                >
                  <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    {nd.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/istanbul"
                className="text-primary hover:underline font-semibold"
              >
                Tüm Bölgeleri Gör →
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
