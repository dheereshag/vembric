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
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Model Schema</h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
            The schema definition of the attributes returned or used by this model.
          </p>
        </div>
        <SchemaTable items={model} nameHeader="Field" />
      </section>
    </>
  );
}
