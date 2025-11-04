import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { User, Award, BarChart3 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero with Spline and Auth modal */}
      <Hero />

      {/* About */}
      <section className="relative w-full bg-[#0a0a0a] py-16">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(0,255,136,0.06), transparent 40%)',
        }} />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built by traders, for traders
            </h2>
            <p className="mt-4 text-zinc-300">
              We blend institutional concepts with practical execution. Our approach is simple: protect downside, compound edge, and let data guide your decisions. Every lesson translates to rules you can deploy the next day.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[{icon: Award, label: '10+ Years', sub: 'Market Experience'}, {icon: BarChart3, label: 'Data-Driven', sub: 'Tested Strategies'}, {icon: User, label: 'Community', sub: 'Active Support'}].map((i) => (
                <div key={i.label} className="rounded-lg border border-emerald-500/20 bg-black/50 p-4">
                  <i.icon className="text-emerald-300" size={22} />
                  <div className="mt-2 text-sm font-medium text-white">{i.label}</div>
                  <div className="text-xs text-zinc-400">{i.sub}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Dashboard preview */}
          <div className="rounded-xl border border-emerald-500/20 bg-zinc-950/70 p-5 shadow-[0_0_40px_rgba(0,255,136,0.05)]">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-zinc-400">Dashboard Preview</div>
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-lg border border-emerald-500/20 bg-black/60 p-4">
                <div className="mb-2 text-sm text-zinc-400">PnL (Last 30 days)</div>
                <div className="h-28 w-full bg-gradient-to-tr from-emerald-600/30 via-emerald-400/20 to-transparent" />
              </div>
              <div className="rounded-lg border border-emerald-500/20 bg-black/60 p-4">
                <div className="mb-2 text-sm text-zinc-400">Win Rate</div>
                <div className="text-3xl font-semibold text-white">62%</div>
                <div className="text-xs text-emerald-300">+4% this month</div>
              </div>
              <div className="rounded-lg border border-emerald-500/20 bg-black/60 p-4">
                <div className="mb-2 text-sm text-zinc-400">Best Strategy</div>
                <div className="text-sm text-white">Breakout + VWAP</div>
                <div className="mt-2 h-1.5 w-3/4 rounded-full bg-emerald-700">
                  <div className="h-1.5 w-2/3 rounded-full bg-emerald-400" />
                </div>
              </div>
              <div className="col-span-2 rounded-lg border border-emerald-500/20 bg-black/60 p-4">
                <div className="mb-2 text-sm text-zinc-400">Trade Log</div>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center justify-between"><span>EURUSD • Long</span><span className="text-emerald-400">+1.2R</span></li>
                  <li className="flex items-center justify-between"><span>SPY • Short</span><span className="text-emerald-400">+0.8R</span></li>
                  <li className="flex items-center justify-between"><span>BTC • Long</span><span className="text-red-400">-0.4R</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <Courses />

      {/* Instructor */}
      <section className="relative w-full bg-black py-16">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">Lead Instructor</div>
              <h3 className="mt-4 text-3xl font-semibold">Ethan Ward</h3>
              <p className="mt-3 text-zinc-300">
                Former proprietary trader and quantitative strategist. Ethan has mentored thousands of traders, focusing on rule-based execution and robust risk frameworks.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: 'Years Trading', value: '12' },
                  { label: 'Students', value: '25k+' },
                  { label: 'Win Rate', value: '62%' },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg border border-emerald-500/20 bg-zinc-950/60 p-4 text-center">
                    <div className="text-xl font-semibold text-white">{s.value}</div>
                    <div className="text-xs text-zinc-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-tr from-emerald-600/10 to-emerald-400/10 p-1">
                <div className="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1280&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="relative w-full bg-[#0a0a0a] py-16">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-3xl font-semibold">Ready to level up your edge?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-300">
            Join thousands of disciplined traders building sustainable performance with a clear, rules-based approach.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#courses" className="rounded-md bg-emerald-500 px-6 py-3 font-medium text-black transition hover:bg-emerald-400">View Plans</a>
            <a href="#" className="rounded-md border border-emerald-500/40 px-6 py-3 text-emerald-300 transition hover:border-emerald-400">Subscribe for Updates</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
