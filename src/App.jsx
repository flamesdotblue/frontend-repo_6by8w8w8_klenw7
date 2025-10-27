import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-400 to-indigo-500" />
          <span className="font-semibold tracking-tight">Code Tech Solutions</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-200/90 sm:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#cta" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#cta"
          className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 sm:inline-block"
        >
          Get a proposal
        </a>
      </header>

      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <CTA />
      </main>
    </div>
  );
}

export default App;
