import Hero from './Hero';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import CTA from './CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Services />
      <WhyChooseUs />
      <CTA />
    </div>
  );
}
