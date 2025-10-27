import { motion } from 'framer-motion';
import { Code2, Search, ShoppingCart, Megaphone, Palette, ShieldCheck, Gauge, Layers, Cpu } from 'lucide-react';

const offerings = [
  { icon: Code2, title: 'Web Apps & Sites', points: ['React, Next.js, Remix', 'Headless CMS', 'Accessibility AA+'] },
  { icon: Search, title: 'SEO & Content', points: ['Technical audits', 'On‑page optimization', 'Content strategy'] },
  { icon: ShoppingCart, title: 'E‑commerce', points: ['Shopify & Woo', 'Custom PDP/PLP', 'Checkout optimization'] },
  { icon: Megaphone, title: 'Performance Ads', points: ['Google & Meta', 'Creative testing', 'Attribution & LTV'] },
  { icon: Palette, title: 'Brand & UX', points: ['Design systems', 'Rapid prototyping', 'User testing'] },
  { icon: ShieldCheck, title: 'Analytics & Security', points: ['GA4 & dashboards', 'Core Web Vitals', 'Security hardening'] },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="relative overflow-hidden py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Services crafted for growth
          </motion.h1>
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.05}} className="mt-3 max-w-3xl text-slate-300">
            A modular menu you can mix‑and‑match. Start lean, scale intentionally, and keep your stack future‑proof.
          </motion.p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {offerings.map(({icon:Icon,title,points}) => (
              <motion.div key={title} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.25}} transition={{duration:0.5}} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-500/10 p-3 ring-1 ring-cyan-400/30"><Icon className="h-5 w-5 text-cyan-300" /></div>
                  <h3 className="text-base font-semibold">{title}</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300/80"></span>{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {[{title:'Launch',price:'$5k–$12k',desc:'Single page or small multi‑page sites. Perfect for validation.'},{title:'Scale',price:'$12k–$35k',desc:'Multi‑page sites, e‑commerce, integrations, analytics.'},{title:'Partner',price:'$3k+/mo',desc:'Ongoing sprints covering design, dev, and growth.'}].map(({title,price,desc}) => (
              <motion.div key={title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.4}} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-sm text-slate-300">{title}</div>
                <div className="mt-1 text-2xl font-semibold">{price}</div>
                <p className="mt-2 text-sm text-slate-300">{desc}</p>
                <a href="/contact" className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">Request proposal</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-600/10 via-indigo-600/10 to-purple-600/10 p-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[{icon:Layers,title:'Composable stack',desc:'Pick best‑in‑class tools with clean integrations.'},{icon:Gauge,title:'Performance first',desc:'Lighthouse 90+ and Core Web Vitals by default.'},{icon:Cpu,title:'Future‑proof',desc:'Modern approaches that stand the test of time.'}].map(({icon:Icon,title,desc}) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <Icon className="h-5 w-5 text-cyan-300" />
                  <div className="mt-3 text-sm font-semibold">{title}</div>
                  <p className="mt-1 text-sm text-slate-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
