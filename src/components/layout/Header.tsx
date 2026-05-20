"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Wrench } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import NoScrollOnMobileMenu from "@/components/ui/NoScrollOnMobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hizmetler", href: "#hizmetler" },
    { name: "Bölgeler", href: "/istanbul" },
    { name: "Lastik Rehberi", href: "/lastik-rehberi" },
    { name: "Neden Biz?", href: "#neden-biz" },
    { name: "SSS", href: "#sss" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 z-50 min-w-0">
            <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden">
              <Image src="/gallery/logo1.jpg" alt="Mobil Lastikçi Logosu" fill className="object-cover" priority />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-none whitespace-nowrap">
                Mobil Lastikçi
              </h1>
              <p className="text-xs text-primary font-semibold mt-1 whitespace-nowrap">7/24 YOL YARDIM</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-foreground-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="tel:+905394456052"
              className="group flex items-center gap-2 bg-primary hover:bg-primary-hover text-background-secondary px-5 py-2.5 rounded-full font-bold transition-all transform hover:scale-105"
            >
              <Phone size={18} className="group-hover:animate-bounce" />
              <span>Hemen Ara</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <NoScrollOnMobileMenu enabled={isMobileMenuOpen} />
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background-secondary pt-24 px-4 pb-6 flex flex-col"
          >
            <ul className="flex flex-col gap-6 items-center mt-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto mb-10 flex flex-col gap-4">
              <a
                href="tel:+905394456052"
                className="flex items-center justify-center gap-3 bg-primary text-background-secondary px-6 py-4 rounded-xl font-bold text-lg"
              >
                <Phone size={24} />
                <span>Acil Lastikçi Çağır</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
