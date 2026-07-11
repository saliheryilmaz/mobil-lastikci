"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  { src: "/gallery/anafoto1.png", alt: "Mobil lastik değişimi" },
  { src: "/gallery/anafoto2.png", alt: "Yerinde lastik tamiri" },
  { src: "/gallery/nevzat6.jpg", alt: "7/24 yol yardım" },
  { src: "/gallery/nevzat1.jpeg", alt: "Profesyonel ekipman" },
];

const stats = [
  { value: "7/24", label: "HİZMET" },
  { value: "20 DK", label: "ORTALAMA VARIŞ" },
  { value: "5K+", label: "MEMNUNİYET" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Mobil arka plan slideshow */}
      <div className="lg:hidden absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Koyu overlay — yazılar okunabilsin */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      </div>

      {/* Desktop arka plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0d0d0d] z-0 hidden lg:block" />
      <div className="absolute inset-0 opacity-[0.03] z-0 hidden lg:block"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 min-h-screen py-24 lg:py-0">

          {/* ── LEFT: Text Content ── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 mb-6 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                İstanbul&apos;un 7/24 Mobil Lastik Servisi
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.95] tracking-tighter text-white uppercase mb-6"
            >
              YOLDA MI
              <br />
              <span className="text-primary">KALDINIZ?</span>
              <br />
              <span className="text-[clamp(1.5rem,4vw,3.5rem)]">7/24 MOBİL LASTİKÇİ</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-foreground-muted text-base md:text-lg max-w-md mb-10 leading-relaxed"
            >
              İstanbul&apos;un her noktasına <strong className="text-white">ortalama 20 dakikada</strong> ulaşıyoruz. Yerinde lastik değişimi, tamiri ve akü takviyesi ile yola güvenle devam edin.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="tel:+905394456052"
                className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-black px-7 py-4 font-black text-base uppercase tracking-wider transition-all active:scale-[0.97] shadow-[0_0_30px_rgba(255,184,0,0.25)]"
              >
                <Phone size={18} className="group-hover:animate-bounce" />
                HEMEN ARA →
              </a>
              <a
                href="https://wa.me/905394456052"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-7 py-4 font-bold text-base uppercase tracking-wider transition-all active:scale-[0.97] hover:bg-white/5"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                WHATSAPP KONUM GÖNDER
              </a>
            </motion.div>
          </div>

            {/* Mobil slide indikatörleri */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="lg:hidden flex gap-2 mt-8"
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </motion.div>
          <div className="hidden lg:flex w-full lg:w-1/2 relative items-center justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full aspect-[3/2]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[current].src}
                    alt={slides[current].alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0a0a]/70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-primary" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>

              {/* Stats — bottom right, sadece desktop */}
              <div className="absolute right-0 bottom-12 flex flex-col gap-0 z-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="bg-black/80 backdrop-blur-sm border-l-2 border-primary px-5 py-3 text-right min-w-[110px]"
                  >
                    <p className="text-2xl font-black text-white leading-none">{stat.value}</p>
                    <p className="text-[10px] font-semibold text-foreground-muted tracking-widest mt-0.5">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
