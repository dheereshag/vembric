import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface SdkCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export function SdkCard({ name, description, icon }: SdkCardProps) {
  return (
    <Card className="hover:border-foreground/30 transition-all duration-300 group flex flex-row items-start gap-4 p-6 bg-card text-card-foreground shadow-sm">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-semibold tracking-tight text-foreground leading-none">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground/80 leading-relaxed">
          {description}
        </p>
        <div className="pt-2">
          <button
            className="inline-flex items-center gap-1 text-emerald-500 dark:text-emerald-400 hover:text-emerald-400 dark:hover:text-emerald-300 font-semibold text-sm transition-colors group/btn cursor-pointer bg-transparent border-0 p-0 outline-none"
          >
            Read more <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </Card>
  );
}
