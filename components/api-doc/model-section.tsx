import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { ApiActionDoc } from '@/constants/api-docs';

type ModelSectionProps = {
  model: ApiActionDoc['model'];
};

export function ModelSection({ model }: ModelSectionProps) {
  return (
    <>
      <Separator className="my-6" />
      <section>
        <h2 className="text-xl font-semibold mb-4">Model</h2>
        <p className="text-muted-foreground mb-4 max-w-3xl">
          The model defines the core attributes for this endpoint and their expected types.
        </p>
        <div className="space-y-4">
          {model.map((item) => (
            <div key={item.name}>
              <div className="flex items-center gap-2 font-mono font-medium">
                <Badge variant="outline" className="rounded-sm">
                  {item.name}
                </Badge>
                <code className="text-xs text-muted-foreground">{item.type}</code>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
