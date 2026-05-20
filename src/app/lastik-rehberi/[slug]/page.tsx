import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, Clock, BookOpen, ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { tireGuides } from "@/data/tire-guides";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tireGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = tireGuides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | Mobil Lastikçi Rehber`,
    description: guide.shortDescription,
  };
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = tireGuides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const relatedGuides = tireGuides
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3);

  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Hero */}
      <section className="relative pt-28 pb-12 bg-background-secondary border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Lastik Rehberi", href: "/lastik-rehberi" },
              { label: guide.title },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                {guide.categoryLabel}
              </span>
              <span className="flex items-center gap-1 text-sm text-foreground-muted">
                <Clock size={14} />
                {guide.readTime} okuma
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              {guide.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article */}
            <article className="flex-1 max-w-3xl">
              {/* TOC */}
              <div className="glass p-6 rounded-2xl mb-10">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-primary" />
                  İçindekiler
                </h2>
                <ol className="space-y-2">
                  {guide.content.map((section, i) => (
                    <li key={i}>
                      <a
                        href={`#section-${i}`}
                        className="text-foreground-muted hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <span className="text-primary font-bold text-sm">
                          {i + 1}.
                        </span>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Sections */}
              {guide.content.map((section, i) => (
                <div key={i} id={`section-${i}`} className="mb-10 scroll-mt-28">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {section.heading}
                  </h2>
                  <p className="text-foreground-muted leading-relaxed text-lg">
                    {section.body}
                  </p>
                </div>
              ))}

              {/* CTA */}
              <div className="glass p-8 rounded-2xl border-l-4 border-l-primary mt-12">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Lastik değişimi veya tamiri mi gerekiyor?
                </h3>
                <p className="text-foreground-muted mb-6">
                  7/24 mobil lastikçi hizmetimizle bulunduğunuz yere gelip
                  profesyonel işlem yapıyoruz. Hemen arayın!
                </p>
                <a
                  href="tel:+905555555555"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-background-secondary px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-[1.02]"
                >
                  <Phone size={20} />
                  <span>0555 555 5555</span>
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <h3 className="text-lg font-bold text-foreground mb-6">
                  Diğer Rehberler
                </h3>
                <div className="space-y-4">
                  {relatedGuides.map((rg) => (
                    <Link
                      key={rg.slug}
                      href={`/lastik-rehberi/${rg.slug}`}
                      className="glass p-4 rounded-xl block hover:border-primary/50 transition-all group"
                    >
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {rg.categoryLabel}
                      </span>
                      <h4 className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">
                        {rg.title}
                      </h4>
                      <div className="mt-2 flex items-center gap-1 text-primary text-sm font-medium">
                        Oku
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
