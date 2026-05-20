import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-muted/50 to-muted/20 px-6 py-12 md:px-12 md:py-20">
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center gap-1.5 rounded-full border bg-background px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Beta v0.1.0
        </span>
      </div>
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Welcome to Vembric
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Create stunning, developer-friendly API documentation with this modern Next.js template.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild size="lg" className="gap-2">
            <Link href="/games/list-all-games">
              Explore APIs <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/sdks">
              View SDKs <Code2 className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
