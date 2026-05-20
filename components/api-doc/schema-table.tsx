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
    <div className="overflow-x-auto bg-transparent">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-none">
            <TableHead className="w-[180px] font-semibold pl-0">{nameHeader}</TableHead>
            <TableHead className="w-[120px] font-semibold">Type</TableHead>
            <TableHead className="font-semibold">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name} className="hover:bg-muted/30 border-none">
              <TableCell className="font-mono font-semibold text-sm text-primary pl-0">
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
  );
}
