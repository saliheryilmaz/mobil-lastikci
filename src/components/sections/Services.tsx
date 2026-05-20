"use client";

import { motion } from "framer-motion";
import { Wrench, BatteryCharging, Zap, Settings, Truck, Navigation } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Yerinde Lastik Değişimi",
    description: "Yolda veya evinizin önünde, lastik sökme, takma ve değişim işlemlerini profesyonel ekipmanlarla bulunduğunuz yerde yapıyoruz.",
    icon: <Wrench size={32} />,
  },
  {
    id: 2,
    title: "Patlak Lastik Tamiri",
    description: "Çivi batması veya küçük yırtıklar nedeniyle inen lastiklerinizi söküp garantili şekilde tamir ediyor, tekrar yola çıkmanızı sağlıyoruz.",
    icon: <Settings size={32} />,
  },
  {
    id: 3,
    title: "Akü Takviye & Değişim",
    description: "Akünüz mü bitti? Güçlü kablolarla akü takviyesi yapıyor, ömrü bitmiş akülerinizi sıfır garantili akülerle anında değiştiriyoruz.",
    icon: <BatteryCharging size={32} />,
  },
  {
    id: 4,
    title: "7/24 Acil Yol Yardım",
    description: "Gecenin bir yarısı ıssız bir yolda kalsanız bile, GPS destekli mobil ekiplerimiz en kısa sürede konumunuza ulaşıyor.",
    icon: <Truck size={32} />,
  },
  {
    id: 5,
    title: "Balans Ayarı",
    description: "Mobil aracımızdaki gelişmiş makineler ile lastik değişimi sonrası titremeyi önlemek için kusursuz balans ayarı yapıyoruz.",
    icon: <Zap size={32} />,
  },
  {
    id: 6,
    title: "Seyyar Jant Düzeltme",
    description: "Çukur veya kasise girerek yamulan jantlarınızı yerinde kontrol ediyor, sürüş güvenliğini tehlikeye atan durumlara müdahale ediyoruz.",
    icon: <Navigation size={32} />,
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-14 md:py-24 bg-background-secondary relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4 inline-block"
          >
            HİZMETLERİMİZ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6"
          >
            Tüm İhtiyaçlarınız İçin <br />
            <span className="text-white/70">Tek Mobil Servis</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground-muted text-lg"
          >
            Tam donanımlı mobil servis araçlarımızla, lastikçiye gitmenize gerek kalmadan tüm işlemleri aracınızın başında gerçekleştiriyoruz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-5 md:p-8 rounded-xl md:rounded-2xl hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-background-secondary transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-foreground-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
