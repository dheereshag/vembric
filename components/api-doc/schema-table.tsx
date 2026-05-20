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
    <div className="border divide-y font-mono text-sm">
      <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
        <span className="col-span-4">{nameHeader}</span>
        <span className="col-span-3">Type</span>
        <span className="col-span-5">Description</span>
      </div>
      {items.map((item) => (
        <div key={item.name} className="grid grid-cols-12 px-4 py-3 items-start">
          <code className="col-span-4 text-xs font-semibold">{item.name}</code>
          <span className="col-span-3 text-xs text-muted-foreground">{item.type}</span>
          <span className="col-span-5 text-xs text-muted-foreground">{item.description}</span>
        </div>
      ))}
    </div>
  );
}
