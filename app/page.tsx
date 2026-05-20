import { HeroSection } from "@/components/dashboard/hero-section";
import { NavCard } from "@/components/dashboard/nav-card";
import { FeaturesGrid } from "@/components/dashboard/features-grid";
import { BookOpen, Terminal, Code2 } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Navigation Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <NavCard
          title="Quick Start"
          description="Get up and running with Vembric in under 5 minutes."
          icon={BookOpen}
          actionText="Read Guide"
          actionHref="#"
        />
        <NavCard
          title="API Reference"
          description="Browse endpoints, query parameters, and interactive request samples."
          icon={Terminal}
          actionText="Explore Endpoints"
          actionHref="/games/list-all-games"
        />
        <NavCard
          title="Client SDKs"
          description="Integrate with official SDKs for Node.js, Python, Go, and more."
          icon={Code2}
          actionText="Download SDKs"
          actionHref="/sdks"
        />
      </div>

      {/* Feature Grid */}
      <FeaturesGrid />
    </div>
  );
}
