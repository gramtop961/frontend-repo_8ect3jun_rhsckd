import { Check, Star } from 'lucide-react';

const plans = [
  {
    title: 'Beginner',
    price: '$89',
    period: 'one-time',
    highlight: 'Build strong fundamentals',
    features: [
      'Market structure + order types',
      'Risk management 101',
      'Psychology & discipline',
      '2 starter strategies',
    ],
    popular: false,
  },
  {
    title: 'Advanced',
    price: '$199',
    period: 'one-time',
    highlight: 'Turn insights into systems',
    features: [
      'Multi-timeframe confluence',
      'Advanced risk models',
      'Backtesting templates',
      'Live trade breakdowns',
    ],
    popular: true,
  },
  {
    title: 'Strategy Mastery',
    price: '$299',
    period: 'one-time',
    highlight: 'Institutional-grade playbook',
    features: [
      'Liquidity + order flow',
      'Automation-ready rules',
      'Portfolio & journaling',
      'Private strategy vault',
    ],
    popular: false,
  },
];

export default function Courses() {
  return (
    <section id="courses" className="relative w-full bg-[#0a0a0a] py-20 text-white">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'linear-gradient(rgba(0,102,68,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,68,0.06) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Courses designed for real-world trading
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
            Progress from core principles to advanced execution with a structured, no-fluff curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.title}
              className={`group relative rounded-2xl border bg-zinc-950/60 p-6 transition hover:shadow-emerald-500/20 backdrop-blur ${
                p.popular ? 'border-emerald-500/50 shadow-[0_0_40px_rgba(0,255,136,0.08)]' : 'border-emerald-500/20'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                  <Star size={14} className="text-emerald-300" /> Popular
                </div>
              )}
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-emerald-300">{p.highlight}</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-4xl font-bold text-white">{p.price}</span>
                <span className="mb-1 text-sm text-zinc-400">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="grid h-5 w-5 place-items-center rounded-full border border-emerald-400/40 bg-emerald-500/10">
                      <Check size={14} className="text-emerald-300" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className="mt-8 w-full rounded-md bg-emerald-500 py-2 font-medium text-black transition hover:bg-emerald-400"
              >
                Enroll now
              </button>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100" style={{
                boxShadow: 'inset 0 0 24px rgba(0,255,136,0.15)',
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
