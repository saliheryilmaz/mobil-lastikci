"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import Image from "next/image";

// Placeholder gallery items - replace src with your actual images in /public/gallery/
const galleryItems = [
  {
    id: 1,
    src: "/gallery/nevzat1.jpeg",
    alt: "Yerinde lastik değişimi",
    caption: "Hızlı ve güvenilir yerinde lastik değişimi",
  },
  {
    id: 2,
    src: "/gallery/nevzat2.jpeg",
    alt: "Mobil lastik tamiri",
    caption: "7/24 Kesintisiz mobil lastik tamiri",
  },
  {
    id: 3,
    src: "/gallery/nevzat3.jpeg",
    alt: "Akü takviye hizmeti",
    caption: "Akü takviye ve değişim hizmetimiz",
  },
  {
    id: 4,
    src: "/gallery/nevzat4.jpeg",
    alt: "Mobil servis aracı",
    caption: "Tam donanımlı yol yardım aracımız",
  },
  {
    id: 5,
    src: "/gallery/nevzat5.jpeg",
    alt: "Balans ayarı yapılıyor",
    caption: "Mobil aracımızda seyyar balans ayarı",
  },
  {
    id: 6,
    src: "/gallery/araba.png",
    alt: "Müşteri memnuniyeti",
    caption: "Garantili işçilik ve %100 müşteri memnuniyeti",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length);
    }
  };
  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryItems.length) % galleryItems.length
      );
    }
  };

  const handleImageError = (id: number) => {
    setImageErrors((prev) => new Set(prev).add(id));
  };

  return (
    <section id="galeri" className="py-16 md:py-24 bg-background-secondary border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4 inline-block"
          >
            REFERANS GALERİSİ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6"
          >
            İşlerimizden Kareler
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground-muted text-base md:text-lg"
          >
            Sahada gerçekleştirdiğimiz lastik değişimi, tamiri ve yol yardım
            hizmetlerinden fotoğraflar.
          </motion.p>
        </div>

        {/* Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              {imageErrors.has(item.id) ? (
                /* Placeholder when image not found */
                <div className="absolute inset-0 bg-background flex flex-col items-center justify-center gap-2 border border-white/10 rounded-xl md:rounded-2xl">
                  <Camera size={32} className="text-primary/50" />
                  <span className="text-xs text-foreground-muted text-center px-2">
                    {item.caption}
                  </span>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  onError={() => handleImageError(item.id)}
                />
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-medium">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white bg-white/10 rounded-full z-10"
            >
              <X size={24} />
            </button>

            {/* Nav Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white bg-white/10 rounded-full z-10"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Nav Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white bg-white/10 rounded-full z-10"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image */}
            <div
              className="relative w-full max-w-4xl aspect-[4/3] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {imageErrors.has(galleryItems[selectedIndex].id) ? (
                <div className="absolute inset-0 bg-background-secondary flex flex-col items-center justify-center gap-3">
                  <Camera size={48} className="text-primary/50" />
                  <span className="text-foreground-muted">
                    Fotoğraf henüz eklenmedi
                  </span>
                </div>
              ) : (
                <Image
                  src={galleryItems[selectedIndex].src}
                  alt={galleryItems[selectedIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  onError={() =>
                    handleImageError(galleryItems[selectedIndex].id)
                  }
                />
              )}
            </div>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-medium text-sm md:text-base">
                {galleryItems[selectedIndex].caption}
              </p>
              <p className="text-white/50 text-xs mt-1">
                {selectedIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
