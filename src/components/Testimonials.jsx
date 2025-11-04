import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava K.',
    role: 'Swing Trader',
    quote:
      'The risk-first approach changed how I see the market. I finally have a system I trust.',
    rating: 5,
  },
  {
    name: 'Liam R.',
    role: 'Day Trader',
    quote:
      'Clear, actionable strategies. The live breakdowns and journaling templates are gold.',
    rating: 5,
  },
  {
    name: 'Noah M.',
    role: 'Crypto/FX',
    quote:
      'Loved the structure. I stopped overtrading and my PnL stabilized. Worth every dollar.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 -z-0 opacity-60" style={{
        background:
          'radial-gradient(600px 200px at 10% 30%, rgba(0,255,136,0.12), transparent 60%), radial-gradient(600px 200px at 90% 70%, rgba(0,102,68,0.12), transparent 60%)',
      }} />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What our students say</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
            Real results from traders who committed to a rules-based approach.
          </p>
        </div>

        <div className="relative rounded-2xl border border-emerald-500/20 bg-zinc-950/60 p-8 backdrop-blur">
          <div className="mb-4 flex items-center gap-1 text-emerald-300">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <p className="text-lg text-zinc-100">“{t.quote}”</p>
          <div className="mt-6 text-sm text-zinc-400">{t.name} • {t.role}</div>

          <button
            aria-label="Previous testimonial"
            onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-emerald-400/30 bg-black/50 p-2 text-emerald-300 transition hover:bg-black/70"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => setIndex((index + 1) % testimonials.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-emerald-400/30 bg-black/50 p-2 text-emerald-300 transition hover:bg-black/70"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-emerald-400' : 'w-2 bg-emerald-700'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
