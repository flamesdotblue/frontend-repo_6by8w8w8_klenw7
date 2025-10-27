import { motion } from 'framer-motion';
import { Sparkles, Target, Handshake, ShieldCheck, Users, Rocket } from 'lucide-react';

export default function About() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_20%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(800px_circle_at_80%_30%,rgba(99,102,241,0.12),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <motion.span initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <Sparkles className="h-4 w-4 text-cyan-300" /> Our Story
          </motion.span>
          <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.05}} className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Building digital experiences that convert and endure
          </motion.h1>
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.1}} className="mt-4 max-w-3xl text-lg text-slate-300">
            We’re a senior-led studio blending engineering, design, and growth. From strategy to launch, we partner with ambitious teams to ship fast, measure what matters, and iterate with purpose.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {icon: Target, title: 'Outcomes over output', desc: 'We focus on KPIs and customer value — not vanity metrics.'},
              {icon: Handshake, title: 'Collaborative by default', desc: 'Tight feedback loops, transparent sprints, friendly comms.'},
              {icon: ShieldCheck, title: 'Quality and reliability', desc: 'Accessible, performant, and secure foundations every time.'},
            ].map(({icon:Icon,title,desc}) => (
              <motion.div key={title} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.5}} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-500/10 p-3 ring-1 ring-cyan-400/30"><Icon className="h-5 w-5 text-cyan-300" /></div>
                  <h3 className="text-base font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {label:'Projects shipped', value:'120+'},
                {label:'Avg. timeline', value:'3–8 weeks'},
                {label:'Client NPS', value:'72'},
                {label:'Team members', value:'10+'},
              ].map(({label,value}) => (
                <motion.div key={label} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.4}} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <div className="text-2xl font-semibold">{value}</div>
                  <div className="mt-1 text-xs text-slate-400">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <motion.div initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.6}}>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How we work</h2>
              <p className="mt-3 text-slate-300">A lightweight, outcome‑driven process that reduces risk and accelerates value.</p>
              <ol className="mt-6 space-y-4">
                {['Discovery & goals','Experience design','Build, test, refine','Launch & growth'].map((step,i)=> (
                  <li key={step} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-400/30">{i+1}</div>
                    <div className="text-slate-200">{step}</div>
                  </li>
                ))}
              </ol>
            </motion.div>
            <motion.div initial={{opacity:0,x:16}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.6}} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-600/10 via-indigo-600/10 to-purple-600/10 p-6">
              <div className="pointer-events-none absolute -inset-1 bg-[radial-gradient(600px_circle_at_70%_30%,rgba(99,102,241,0.18),transparent_40%)]" />
              <div className="relative flex items-center gap-4">
                <div className="rounded-xl bg-white text-slate-900 ring-1 ring-white/20">
                  <Rocket className="m-4 h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold">From idea to impact</div>
                  <p className="mt-1 text-sm text-slate-300">We prioritize the smallest shippable scope that moves the metric you care about.</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10"><Users className="h-5 w-5 text-cyan-300" /></div>
                <div>
                  <div className="text-sm font-semibold">Lean, senior team</div>
                  <p className="mt-1 text-sm text-slate-300">Direct access to the people doing the work. No layers, no friction.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
