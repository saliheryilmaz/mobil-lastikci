"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex">
        {/* Hemen Ara — siyah arka plan, sarı ikon ve yazı */}
        <a
          href="tel:+905394456052"
          className="flex items-center justify-center gap-2 bg-black text-primary flex-1 py-4 font-bold text-base active:opacity-80 transition-opacity border-r border-white/10"
        >
          <Phone size={20} />
          <span>Hemen Ara</span>
        </a>

        {/* WhatsApp — yeşil arka plan, beyaz ikon ve yazı */}
        <a
          href="https://wa.me/905394456052"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white flex-1 py-4 font-bold text-base active:opacity-80 transition-opacity"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
