import { motion } from 'framer-motion';
import { CheckCircle2, Users, Clock, Award } from 'lucide-react';

const points = [
  'Senior‑led team with startup speed and enterprise standards.',
  'Transparent sprints, measurable outcomes, zero fluff.',
  'Conversion‑first design backed by analytics and testing.',
  'Battle‑tested security, performance, and SEO foundations.',
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-slate-950 py-20 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-[11px] font-medium text-indigo-300">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Smart, confident, and friendly delivery
            </h2>
            <p className="mt-3 text-slate-300">
              Your growth partner — not just another vendor. We blend clean engineering, engaging creative, and performance marketing to move the metrics that matter.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <Stat icon={Users} value="120+" label="Projects shipped" />
              <Stat icon={Clock} value="3–8 wks" label="Typical timeline" />
              <Stat icon={Award} value="NPS 72" label="Client satisfaction" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl"
          >
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-2xl" />
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {['Discovery & Strategy', 'Design & Prototype', 'Build & QA', 'Launch & Growth'].map((step, i) => (
                  <div key={step} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs text-slate-400">Step {i + 1}</div>
                    <div className="mt-1 text-sm font-semibold">{step}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-300/90">
                A clear, collaborative process that keeps you in the loop — from kickoff to launch and beyond.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5">
      <div className="flex items-center justify-center gap-2">
        <Icon className="h-4 w-4 text-cyan-300" />
        <div className="text-lg font-semibold">{value}</div>
      </div>
      <div className="mt-1 text-xs text-slate-400">{label}</div>
    </div>
  );
}
