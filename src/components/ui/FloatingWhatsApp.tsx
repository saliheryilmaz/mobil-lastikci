"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle, Quote } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-20 right-4 md:bottom-10 md:right-10 z-50"
    >
      <a
        href="https://wa.me/905394456052"
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform group"
      >
        {/* Ping Animation Background */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-50"></div>
        
        <MessageCircle size={32} />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-background-secondary text-foreground text-sm font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          WhatsApp'tan Konum Atın
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-background-secondary rotate-45 border-r border-t border-white/10"></div>
        </div>
      </a>
    </motion.div>
  );
}
