"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ahmet Y.",
    date: "1 hafta önce",
    text: "E-5'te gece yarısı lastiğim patladı. Aradıktan tam 18 dakika sonra geldiler. Fiyatlar gayet makul, ustalar çok saygılıydı. Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mehmet K.",
    date: "3 hafta önce",
    text: "Pazar sabahı ailemle yoldayken akümüz bitti. Şişli civarındaydık, hemen gelip akü takviyesi yaptılar ve yeni akü taktılar. Hızlı ve güvenilir.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ayşe T.",
    date: "1 ay önce",
    text: "Aracımın lastiği yarıldı, stepne takmayı bilmiyordum. Telefonda konum attım, çok hızlı bir şekilde gelip sıfır lastik taktılar. Teşekkürler Mobil Lastikçi.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="yorumlar" className="py-14 md:py-24 bg-background-secondary relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4 inline-block"
          >
            MÜŞTERİ YORUMLARI
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6"
          >
            Bizi Müşterilerimizden Dinleyin
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground-muted text-lg"
          >
            Google Haritalar üzerinden aldığımız %100 gerçek müşteri yorumları ile güven inşa ediyoruz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-5 md:p-8 rounded-xl md:rounded-2xl flex flex-col h-full hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold">{review.name}</h4>
                    <p className="text-foreground-muted text-xs">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-primary">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-foreground-muted leading-relaxed flex-grow italic">
                "{review.text}"
              </p>
              
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-foreground-muted">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#4285F4] fill-current">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google Yorumu
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
