import { HeroSection } from "@/components/dashboard/hero-section";
import { NavCard } from "@/components/dashboard/nav-card";
import { FeaturesGrid } from "@/components/dashboard/features-grid";
import { navCards } from "@/constants/nav-cards";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Navigation Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {navCards.map((card) => (
          <NavCard key={card.title} {...card} />
        ))}
      </div>

      {/* Feature Grid */}
      <FeaturesGrid />
    </div>
  );
}
