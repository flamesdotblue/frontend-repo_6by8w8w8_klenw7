import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import Contact from './components/Contact';

function Header() {
  const navLinkClass = ({ isActive }) =>
    `rounded-full px-3 py-1.5 text-sm transition ${isActive ? 'bg-white/10 text-white' : 'text-slate-200/90 hover:text-white'}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-400 to-indigo-500" aria-hidden="true" />
        <span className="font-semibold tracking-tight">Code Tech Solutions</span>
      </Link>
      <nav className="hidden items-center gap-1 sm:flex">
        <NavLink to="/" className={navLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/services" className={navLinkClass}>
          Services
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </nav>
      <Link
        to="/contact"
        className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 sm:inline-block"
      >
        Get a proposal
      </Link>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-xs text-slate-400">© {new Date().getFullYear()} Code Tech Solutions. All rights reserved.</div>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
