"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    { title: "20 Dk'da Yanınızdayız", desc: "İstanbul genelinde yaygın mobil ağımız ile çağrınıza en hızlı şekilde yanıt verip ortalama 20 dakika içinde konumunuza geliyoruz." },
    { title: "Profesyonel Ekipman", desc: "Seyyar servis araçlarımızda sökme-takma ve balans makineleri dahil en son teknoloji havalı ve şarjlı ekipmanlar bulunur." },
    { title: "Garantili İşçilik", desc: "Yaptığımız tüm yamalar ve işlemler firmamız garantisi altındadır. Güvenle ve sorunsuz bir şekilde yola devam edersiniz." },
    { title: "Şeffaf Fiyatlandırma", desc: "İşlem öncesinde net fiyat verilir. Sürpriz maliyetlerle karşılaşmazsınız, bütçe dostu ve güvenilir hizmet alırsınız." },
  ];

  return (
    <section id="neden-biz" className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-wider uppercase text-sm mb-4 inline-block"
            >
              NEDEN BİZİ SEÇMELİSİNİZ?
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Yolunuza Güvenle Devam Etmeniz İçin Çalışıyoruz
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-foreground-muted text-lg mb-10"
            >
              Klasik çekici hizmetlerinin aksine, sizi servise çekmek yerine servisi ayağınıza getiriyoruz. Bu sayede hem zamandan hem de çekici maliyetinden tasarruf ediyorsunuz.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{reason.title}</h4>
                    <p className="text-foreground-muted text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image/Stats */}
          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] glass mx-4 lg:mx-0"
            >
              {/* We use a placeholder background color, but it should ideally be a Next/Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("gallery/nevzat6.jpg")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
              </div>
            </motion.div>

            {/* Floating Stat Badge 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 left-0 lg:-bottom-6 lg:-left-12 glass p-4 lg:p-6 rounded-2xl border-l-4 border-l-primary shadow-2xl bg-background/90"
            >
              <p className="text-3xl lg:text-4xl font-black text-foreground mb-1">+5000</p>
              <p className="text-sm font-medium text-foreground-muted">Mutlu Müşteri</p>
            </motion.div>

            {/* Floating Stat Badge 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -top-4 right-0 lg:-top-6 lg:-right-8 glass p-3 lg:p-4 rounded-xl shadow-2xl bg-background/90"
            >
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                 <p className="text-sm font-bold text-foreground">7/24 Aktif</p>
               </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
