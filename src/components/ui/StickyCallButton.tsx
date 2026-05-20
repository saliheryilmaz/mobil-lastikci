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
      className={`fixed bottom-0 left-0 right-0 z-40 p-3 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2">
        <a
          href="tel:+905394456052"
          className="flex items-center justify-center gap-2 bg-primary text-background-secondary flex-1 py-3.5 rounded-xl font-bold text-base shadow-[0_-5px_20px_rgba(255,184,0,0.3)] active:scale-[0.97] transition-transform"
        >
          <Phone size={20} />
          <span>Hemen Ara</span>
        </a>
        <a
          href="https://wa.me/905394456052"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white w-14 rounded-xl font-bold shadow-[0_-5px_20px_rgba(37,211,102,0.3)] active:scale-[0.97] transition-transform flex-shrink-0"
        >
          <MessageCircle size={22} />
        </a>
      </div>
    </div>
  );
}
