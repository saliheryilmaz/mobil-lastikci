import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <FAQ />
    </main>
  );
}
