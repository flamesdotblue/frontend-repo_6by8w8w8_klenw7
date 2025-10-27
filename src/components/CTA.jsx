import { motion } from 'framer-motion';
import { Mail, CalendarDays } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative bg-slate-950 py-20 text-white">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-600/10 via-indigo-600/10 to-purple-600/10 p-8 shadow-2xl">
        <div className="pointer-events-none absolute -inset-2 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(56,189,248,0.12),transparent_40%)]" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative grid gap-8 lg:grid-cols-3"
        >
          <div className="lg:col-span-2">
            <h3 className="text-balance text-2xl font-semibold sm:text-3xl">
              Ready to launch something great?
            </h3>
            <p className="mt-2 text-slate-300">
              Tell us about your goals and we’ll propose a pragmatic plan with clear deliverables, timeline, and budget.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="mailto:hello@codetechsolutions.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              <Mail className="h-4 w-4" />
              hello@codetechsolutions.com
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
            >
              <CalendarDays className="h-4 w-4" />
              Book a discovery call
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Code Tech Solutions. All rights reserved.
      </div>
    </section>
  );
}
