import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, CalendarDays, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`New project inquiry from ${form.name || 'Website'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    return `mailto:hello@codetechsolutions.com?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <main className="bg-slate-950 text-white">
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Let’s build something great
          </motion.h1>
          <p className="mt-3 text-slate-300">Share a bit about your goals. We’ll respond within one business day.</p>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="space-y-4 text-sm">
                <a href="mailto:hello@codetechsolutions.com" className="flex items-center gap-3 hover:text-white">
                  <Mail className="h-4 w-4 text-cyan-300" /> hello@codetechsolutions.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-white">
                  <Phone className="h-4 w-4 text-cyan-300" /> +1 (234) 567-890
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-white">
                  <CalendarDays className="h-4 w-4 text-cyan-300" /> Book a discovery call
                </a>
                <div className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" /> We’ll never share your info.
                </div>
              </div>
            </div>

            <form
              className="lg:col-span-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                window.location.href = mailtoHref;
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" id="name">
                  <input id="name" name="name" required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-cyan-400/40" placeholder="Jane Doe" />
                </Field>
                <Field label="Email" id="email">
                  <input id="email" name="email" type="email" required value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-cyan-400/40" placeholder="jane@company.com" />
                </Field>
              </div>
              <Field label="Message" id="message" className="mt-4">
                <textarea id="message" name="message" required value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} rows={6} className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-cyan-400/40" placeholder="Tell us about your project, budget, and timeline." />
              </Field>

              <div className="mt-5 flex items-center gap-3">
                <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">Send message</button>
                {sent && <span className="text-xs text-slate-400">Opening your email app…</span>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, id, children, className = '' }) {
  return (
    <label htmlFor={id} className={`block ${className}`}>
      <div className="mb-1 text-xs font-medium text-slate-300">{label}</div>
      {children}
    </label>
  );
}
