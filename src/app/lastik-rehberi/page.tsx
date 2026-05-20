import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { tireGuides, guideCategories } from "@/data/tire-guides";

export const metadata: Metadata = {
  title: "Lastik Rehberi | Lastik Bakımı, Ebat ve Mevsim Bilgileri",
  description:
    "Lastik ebat okuma, yazlık-kışlık lastik farkları, hava basıncı, diş derinliği ve daha fazlası. Güvenli sürüş için bilmeniz gereken her şey bu rehberde.",
};

export default function TireGuidePage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-background-secondary border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Lastik Rehberi" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 inline-block">
              LASTİK REHBERİ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Güvenli Sürüş İçin{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                Lastik Bilgileri
              </span>
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
              Lastik ebatı nasıl okunur, ne zaman değiştirilmeli, doğru basınç
              nedir? Tüm sorularınızın cevabı bu rehberde.
            </p>
          </div>
        </div>
      </section>

      {/* Articles by Category */}
      {guideCategories.map((cat) => {
        const articles = tireGuides.filter((g) => g.category === cat.key);
        if (articles.length === 0) return null;
        return (
          <section
            key={cat.key}
            className="py-16 bg-background border-b border-white/5 last:border-b-0"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen size={20} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {cat.label}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/lastik-rehberi/${article.slug}`}
                    className="glass p-6 rounded-2xl hover:border-primary/50 transition-all group flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                        {article.categoryLabel}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-foreground-muted">
                        <Clock size={12} />
                        {article.readTime} okuma
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-foreground-muted text-sm leading-relaxed flex-1">
                      {article.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-primary font-semibold text-sm">
                      Devamını Oku
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
