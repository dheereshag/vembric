import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionText: string;
  actionHref: string;
}

export function NavCard({ title, description, icon: Icon, actionText, actionHref }: NavCardProps) {
  return (
    <Card className="hover:border-foreground/30 transition-all duration-300 group flex flex-col justify-between">
      <CardHeader>
        <div className="p-2 w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3 flex items-center justify-center">
          <Icon className="size-5" />
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary gap-1 group/btn">
          <Link href={actionHref}>
            {actionText} <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
