interface PageHeaderProps {
  path: string;
  title: string;
  description: string;
}

export function PageHeader({ path, title, description }: PageHeaderProps) {
  return (
    <>
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          {path}
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>
      <div className="border-b mb-10" />
    </>
  );
}
