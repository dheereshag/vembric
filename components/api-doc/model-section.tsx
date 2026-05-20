import { Separator } from '@/components/ui/separator';
import type { ApiActionDoc } from '@/constants/api-docs';
import { DocSection } from '@/components/doc/doc-section';
import { SchemaTable } from './schema-table';

type ModelSectionProps = {
  model: ApiActionDoc['model'];
};

export function ModelSection({ model }: ModelSectionProps) {
  return (
    <>
      <Separator className="my-6" />
      <DocSection title="model schema" className="mb-0 space-y-4">
        <SchemaTable items={model} nameHeader="Field" />
      </DocSection>
    </>
  );
}
