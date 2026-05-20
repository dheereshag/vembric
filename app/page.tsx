import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Terminal, Code2, ArrowRight, Play, Compass, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Hero Section */}
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

      {/* Quick Navigation Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="hover:border-foreground/30 transition-all duration-300 group flex flex-col justify-between">
          <CardHeader>
            <div className="p-2 w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3 flex items-center justify-center">
              <BookOpen className="size-5" />
            </div>
            <CardTitle className="group-hover:text-primary transition-colors">Quick Start</CardTitle>
            <CardDescription>
              Get up and running with Vembric in under 5 minutes.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary gap-1 group/btn">
              <Link href="#">
                Read Guide <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:border-foreground/30 transition-all duration-300 group flex flex-col justify-between">
          <CardHeader>
            <div className="p-2 w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3 flex items-center justify-center">
              <Terminal className="size-5" />
            </div>
            <CardTitle className="group-hover:text-primary transition-colors">API Reference</CardTitle>
            <CardDescription>
              Browse endpoints, query parameters, and interactive request samples.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary gap-1 group/btn">
              <Link href="/games/list-all-games">
                Explore Endpoints <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:border-foreground/30 transition-all duration-300 group flex flex-col justify-between">
          <CardHeader>
            <div className="p-2 w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3 flex items-center justify-center">
              <Code2 className="size-5" />
            </div>
            <CardTitle className="group-hover:text-primary transition-colors">Client SDKs</CardTitle>
            <CardDescription>
              Integrate with official SDKs for Node.js, Python, Go, and more.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary gap-1 group/btn">
              <Link href="/sdks">
                Download SDKs <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Feature Grid */}
      <div className="mt-4 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Template Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex gap-4 p-4 border rounded-2xl bg-card/50">
            <div className="p-2 rounded-lg bg-primary/5 text-primary h-fit">
              <Play className="size-4" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-sm">Interactive Playground</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Test API requests right from your browser and view syntax-highlighted responses.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 border rounded-2xl bg-card/50">
            <div className="p-2 rounded-lg bg-primary/5 text-primary h-fit">
              <Compass className="size-4" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-sm">Intuitive Navigation</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Easily browse resources and actions with our collapsible sidebar structure.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 border rounded-2xl bg-card/50">
            <div className="p-2 rounded-lg bg-primary/5 text-primary h-fit">
              <ExternalLink className="size-4" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-sm">Production Ready</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Fully responsive design built on Next.js 16 with Turbopack for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
