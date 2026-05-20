"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Ortalama geliş süreniz nedir?",
    answer: "Trafiğin durumuna ve bulunduğunuz konuma bağlı olarak, mobil ekiplerimiz ortalama 20-30 dakika içerisinde yanınızda olmaktadır.",
  },
  {
    question: "Sadece lastik değişimi mi yapıyorsunuz?",
    answer: "Hayır. Mobil servis araçlarımızda yerinde lastik tamiri, sıfır veya çıkma lastik satışı, akü takviyesi, akü değişimi ve seyyar balans ayarı gibi geniş çaplı hizmetler veriyoruz.",
  },
  {
    question: "Fiyatlarınız nasıl belirleniyor?",
    answer: "Fiyatlarımız standart olup, bulunduğunuz mesafe ve yapılacak işlemin niteliğine göre telefonda net bir şekilde tarafınıza iletilir. Sürpriz ücret çıkmaz.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer: "İstanbul'un hem Avrupa hem de Anadolu yakasındaki tüm ilçelerine 7/24 hizmet vermekteyiz.",
  },
  {
    question: "Yeni lastik satışı yapıyor musunuz?",
    answer: "Evet. İstediğiniz ebat ve markaya ait sıfır ve garantili lastikleri mobil servis aracımızla bulunduğunuz yere getirip montajını yapıyoruz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4 inline-block"
          >
            SIKÇA SORULAN SORULAR
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6"
          >
            Aklınıza Takılanlar
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex items-center justify-between p-4 md:p-6 text-left rounded-xl md:rounded-2xl transition-all ${
                  openIndex === index 
                    ? "bg-primary text-background-secondary" 
                    : "glass hover:border-primary/50 text-foreground"
                }`}
              >
                <span className="font-bold text-base md:text-lg pr-6">{faq.question}</span>
                <ChevronDown 
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                  size={24} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-foreground-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
