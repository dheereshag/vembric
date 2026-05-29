import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SchemaItem {
  name: string;
  type: string;
  description: string;
}

interface SchemaTableProps {
  items: SchemaItem[];
  nameHeader?: string;
}

export function SchemaTable({ items, nameHeader = "Field" }: SchemaTableProps) {
  return (
    <Table className="border font-mono text-xs">
      <TableHeader>
        <TableRow className="bg-muted/50 uppercase tracking-widest text-muted-foreground hover:bg-muted/50">
          <TableHead className="py-2 text-xs">{nameHeader}</TableHead>
          <TableHead className="py-2 text-xs">Type</TableHead>
          <TableHead className="py-2 text-xs">Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.name}>
            <TableCell className="py-3 align-top">
              <code className="font-semibold">{item.name}</code>
            </TableCell>
            <TableCell className="py-3 align-top text-muted-foreground whitespace-nowrap">
              {item.type}
            </TableCell>
            <TableCell className="py-3 align-top text-muted-foreground whitespace-normal">
              {item.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
