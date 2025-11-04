import { Mail, Twitter, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-emerald-500/20 bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xl font-semibold text-white">GreenPulse Trading</div>
          <p className="mt-1 text-sm text-zinc-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="text-sm text-zinc-400">
            <a href="#" className="hover:text-emerald-300">Terms</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-emerald-300">Privacy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-emerald-300">Contact</a>
          </div>
          <div className="flex items-center gap-3 text-zinc-300">
            <a href="#" aria-label="Twitter" className="rounded p-2 transition hover:bg-zinc-900 hover:text-emerald-300"><Twitter size={18} /></a>
            <a href="#" aria-label="YouTube" className="rounded p-2 transition hover:bg-zinc-900 hover:text-emerald-300"><Youtube size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="rounded p-2 transition hover:bg-zinc-900 hover:text-emerald-300"><Linkedin size={18} /></a>
            <a href="#" aria-label="Email" className="rounded p-2 transition hover:bg-zinc-900 hover:text-emerald-300"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
