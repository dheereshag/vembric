import { Separator } from '@/components/ui/separator';
import type { ApiActionDoc } from '@/constants/api-docs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <div className="border rounded-lg overflow-hidden bg-card">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[180px] font-semibold">Field</TableHead>
                <TableHead className="w-[120px] font-semibold">Type</TableHead>
                <TableHead className="font-semibold">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {model.map((item) => (
                <TableRow key={item.name} className="hover:bg-muted/30">
                  <TableCell className="font-mono font-semibold text-sm text-primary">
                    {item.name}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {item.type}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground whitespace-normal">
                    {item.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}
