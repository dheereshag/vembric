import { Separator } from '@/components/ui/separator';
import type { ApiActionDoc } from '@/constants/api-docs';
import { SchemaTable } from './schema-table';

type ModelSectionProps = {
  model: ApiActionDoc['model'];
};

export function ModelSection({ model }: ModelSectionProps) {
  return (
    <>
      <Separator className="my-6" />
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          model schema
        </h2>
        <SchemaTable items={model} nameHeader="Field" />
      </section>
    </>
  );
}
