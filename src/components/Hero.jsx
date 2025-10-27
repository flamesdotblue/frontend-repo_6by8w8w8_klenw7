import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-cyan-300" />
          Code Tech Solutions — Next‑Gen Web & Growth Agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Build. Rank. Convert.
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Full‑stack digital execution for startups & small business.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 max-w-2xl text-pretty text-slate-200/90"
        >
          We design, build, and grow high‑performance websites and stores —
          with SEO, analytics, and ads that turn clicks into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-indigo-500"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            Start a Project
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 grid grid-cols-2 gap-6 text-left text-xs text-slate-300 sm:grid-cols-4"
        >
          {[
            'Web Development',
            'SEO & Content',
            'E‑commerce',
            'Performance Marketing',
          ].map((label) => (
            <div key={label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
