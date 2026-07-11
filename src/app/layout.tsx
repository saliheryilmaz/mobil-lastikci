import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCallButton from "@/components/ui/StickyCallButton";
import JsonLd from "@/components/seo/JsonLd";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "7/24 Mobil Lastikçi | Acil Yol Yardım ve Yerinde Lastik Değişimi",
  description: "Yolda mı kaldınız? 7/24 mobil lastikçi hizmetimizle bulunduğunuz yere gelip lastik değişimi ve tamiri yapıyoruz. Hemen arayın, ortalama 20 dakikada yanınızdayız.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <GoogleTagManager gtmId="GTM-K62XC75B" />
      <head>
        <JsonLd />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        {children}
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
