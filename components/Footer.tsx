import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t border-white/10 bg-slate-950/60 py-10 backdrop-blur-xl dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </span>
        <span>Mubashir.AI</span>
      </div>
    </footer>
  );
}
