import Link from "next/link";
import { heroContent } from "@/constants/page-content";

export function HeroSection() {
  return (
    <section aria-label="hero" className="border p-8 md:p-12">
      <div className="flex items-center justify-between mb-6">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          {heroContent.tagline}
        </p>
        <span className="font-mono text-xs border px-2 py-0.5 flex items-center gap-1.5">
          <span
            className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"
            aria-hidden="true"
          />
          {heroContent.version}
        </span>
      </div>
      <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {heroContent.heading}
      </h1>
      <p className="text-muted-foreground leading-relaxed max-w-xl mb-8">{heroContent.body}</p>
      <div className="flex flex-wrap gap-6 font-mono text-sm">
        {heroContent.links.map((link) => (
          <Link key={link.href} href={link.href} className="underline underline-offset-4">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
