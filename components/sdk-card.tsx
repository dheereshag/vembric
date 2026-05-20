import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SdkCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export function SdkCard({ name, description, icon }: SdkCardProps) {
  return (
    <Card className="hover:border-foreground/30 transition-all duration-300 group flex flex-col justify-between">
      <CardHeader>
        <div className="text-primary">{icon}</div>
        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="p-0 text-blue-500 dark:text-blue-400 gap-1 group/btn hover:no-underline">
          View SDK <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
