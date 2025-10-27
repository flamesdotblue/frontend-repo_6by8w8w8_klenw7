import { motion } from 'framer-motion';
import {
  Code2,
  Search,
  ShoppingCart,
  Megaphone,
  Palette,
  ShieldCheck,
  Gauge,
  BarChart3,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Website Design & Development',
    desc: 'Custom, responsive sites built with modern stacks. Fast, secure, and optimized for conversions.'
  },
  {
    icon: Search,
    title: 'SEO & Content Optimization',
    desc: 'Technical SEO, on‑page optimization, and content strategy to rank higher and drive organic growth.'
  },
  {
    icon: ShoppingCart,
    title: 'E‑commerce Store Setup',
    desc: 'Shopify, WooCommerce, and headless builds with streamlined checkouts and product experiences.'
  },
  {
    icon: Megaphone,
    title: 'Performance Marketing',
    desc: 'Google & Meta Ads with data‑driven creatives, robust tracking, and continuous optimization.'
  },
  {
    icon: Palette,
    title: 'Branding & UI/UX Design',
    desc: 'Identity systems, design systems, and prototyping to create delightful, consistent experiences.'
  },
  {
    icon: ShieldCheck,
    title: 'Analytics, Speed & Security',
    desc: 'Core Web Vitals, dashboards, tag management, and best‑practice security hardening.'
  },
];

const highlights = [
  { icon: Gauge, label: '90+ Lighthouse', note: 'Performance first' },
  { icon: BarChart3, label: 'Data‑driven', note: 'Measure what matters' },
  { icon: ShieldCheck, label: 'Secure by design', note: 'Hardened setups' },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900/40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium text-cyan-300">
            What We Do
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            End‑to‑end execution for growth
          </h2>
          <p className="mt-3 text-slate-300">
            Strategy, design, code, and growth — shipped as one streamlined team.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 shadow-sm backdrop-blur hover:border-cyan-400/30 hover:shadow-cyan-500/10"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/10 p-3 ring-1 ring-cyan-400/30">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-base font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300/90">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, label, note }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <Icon className="h-5 w-5 text-cyan-300" />
              <div className="text-sm">
                <div className="font-medium text-white/90">{label}</div>
                <div className="text-slate-400">{note}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
