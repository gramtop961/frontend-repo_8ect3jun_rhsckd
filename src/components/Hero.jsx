import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ShieldCheck, TrendingUp } from 'lucide-react';

const palette = {
  green: '#00ff88',
  darkGreen: '#006644',
};

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-[80vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage:
          'radial-gradient(circle at 20% 10%, rgba(0,255,136,0.08), transparent 40%), radial-gradient(circle at 80% 20%, rgba(0,102,68,0.08), transparent 35%), radial-gradient(circle at 50% 80%, rgba(0,255,136,0.06), transparent 45%)',
      }} />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center md:py-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300">
          <ShieldCheck size={14} />
          Trusted by 25k+ traders
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Master the Market. <span className="text-emerald-400">Trade with Confidence.</span>
        </h1>
        <p className="mt-5 max-w-3xl text-base text-zinc-300 sm:text-lg">
          A practical, data-driven curriculum that turns complex strategies into repeatable systems. Learn risk management, technical setups, and execution with clarity.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={() => setOpen(true)}
            className="group relative inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-black transition [text-shadow:none] hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
            style={{ boxShadow: `0 0 0.75rem ${palette.green}55, inset 0 0 0 1px ${palette.darkGreen}` }}
            aria-label="Start Learning Now"
          >
            <Rocket className="transition-transform group-hover:-translate-y-0.5" size={18} />
            Start Learning Now
          </button>
          <a
            href="#courses"
            className="inline-flex items-center gap-2 rounded-md border border-emerald-500/40 bg-black/40 px-6 py-3 text-emerald-300 transition hover:border-emerald-400 hover:bg-black/60"
          >
            <TrendingUp size={18} /> Explore Courses
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { label: 'Avg. Student Win Rate', value: '62%' },
            { label: 'Community Members', value: '25,000+' },
            { label: 'Strategies Included', value: '14+' },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-emerald-500/20 bg-black/40 p-4 backdrop-blur">
              <p className="text-2xl font-semibold text-white">{item.value}</p>
              <p className="mt-1 text-sm text-zinc-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Authentication Modal"
        >
          <div className="w-full max-w-md rounded-xl border border-emerald-500/20 bg-zinc-900 p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Create your account</h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded p-1 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-emerald-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Password</label>
                <input
                  type="password"
                  required
                  className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-emerald-500"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full rounded-md bg-emerald-500 py-2 font-medium text-black transition hover:bg-emerald-400"
                style={{ boxShadow: `0 0 0.75rem ${palette.green}55` }}
              >
                Continue
              </button>
              <p className="text-center text-xs text-zinc-500">
                By continuing you agree to our Terms & Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
