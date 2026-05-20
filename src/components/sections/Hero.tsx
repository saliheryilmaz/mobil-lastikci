"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, MapPin, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-20 pb-12 md:pb-16 overflow-hidden">
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/arkaplan.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4 md:mb-6 border-primary/30"
          >
            <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-primary"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-primary">Şu an 5 mobil ekip sahada aktif</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-4 md:mb-6"
          >
            Yolda mı Kaldınız? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
              7/24 Mobil Lastikçi
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-xl text-foreground-muted mb-6 md:mb-10 max-w-2xl leading-relaxed"
          >
            İstanbul&apos;un her noktasına <strong className="text-foreground">ortalama 20 dakikada</strong> ulaşıyoruz. Yerinde lastik değişimi, tamiri ve akü takviyesi ile yola güvenle devam edin.
          </motion.p>

          {/* CTA Buttons - stacked on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3 mb-8 md:mb-12"
          >
            <a 
              href="tel:+905394456052" 
              className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-background-secondary px-6 py-4 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all transform active:scale-[0.98] md:hover:scale-[1.02] shadow-[0_0_30px_rgba(255,184,0,0.3)]"
            >
              <Phone size={22} className="md:group-hover:animate-bounce" />
              <span>Hemen Ara: 0539 445 60 52</span>
            </a>
            
            <a 
              href="https://wa.me/905394456052" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 glass hover:bg-white/10 text-foreground px-6 py-4 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all active:scale-[0.98]"
            >
              <MessageCircle size={22} className="text-[#25D366]" />
              <span>WhatsApp&apos;tan Konum At</span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                <Clock size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-foreground">7/24</span>
                <span className="text-[10px] md:text-xs text-foreground-muted">Kesintisiz</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-foreground">20 Dk</span>
                <span className="text-[10px] md:text-xs text-foreground-muted">Varış</span>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-foreground">Garantili</span>
                <span className="text-[10px] md:text-xs text-foreground-muted">İşlem</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
