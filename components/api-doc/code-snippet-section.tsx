'use client';

import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from '@/components/kibo-ui/snippet';
import type { ApiActionDoc } from '@/constants/api-docs';
import { getRequestTypeColorClass } from '@/lib/request-type';
import { CurlIcon, JavaScriptIcon } from './icons';

type CodeSnippetSectionProps = {
  method: ApiActionDoc['method'];
  endpoint: ApiActionDoc['endpoint'];
  description: ApiActionDoc['description'];
  optionalAttributes: ApiActionDoc['optionalAttributes'];
  curl: ApiActionDoc['curl'];
  js: ApiActionDoc['js'];
};

export function CodeSnippetSection({
  method,
  endpoint,
  description,
  optionalAttributes,
  curl,
  js,
}: CodeSnippetSectionProps) {
  const commands = useMemo(
    () => [
      { label: 'curl', icon: CurlIcon, code: curl },
      { label: 'javascript', icon: JavaScriptIcon, code: js },
    ],
    [curl, js],
  );

  const [value, setValue] = useState(commands[0].label);
  const activeCommand = commands.find((command) => command.label === value);

  return (
    <>
      <Separator className="my-6" />
      <section>
        <div className="flex items-center gap-3 mb-2">
          <Badge
            variant="outline"
            className={`rounded ${getRequestTypeColorClass(method)}`}
          >
            {method}
          </Badge>
          <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
            {endpoint}
          </code>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>

        {optionalAttributes && optionalAttributes.length > 0 && (
          <div className="mb-6 space-y-3">
            <h4 className="font-semibold text-lg tracking-tight">Optional Attributes</h4>
            <div className="border rounded-lg overflow-hidden bg-card">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[180px] font-semibold">Attribute</TableHead>
                    <TableHead className="w-[120px] font-semibold">Type</TableHead>
                    <TableHead className="font-semibold">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {optionalAttributes.map((attribute) => (
                    <TableRow key={attribute.name} className="hover:bg-muted/30">
                      <TableCell className="font-mono font-semibold text-sm">
                        {attribute.name}
                      </TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">
                        {attribute.type}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground whitespace-normal">
                        {attribute.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        <Snippet onValueChange={setValue} value={value}>
          <SnippetHeader>
            <SnippetTabsList>
              {commands.map((command) => (
                <SnippetTabsTrigger key={command.label} value={command.label}>
                  <span>
                    <command.icon />
                  </span>
                  <span>{command.label}</span>
                </SnippetTabsTrigger>
              ))}
            </SnippetTabsList>
            {activeCommand && (
              <SnippetCopyButton
                onCopy={() =>
                  console.log(`Copied "${activeCommand.code}" to clipboard`)
                }
                onError={() =>
                  console.error(
                    `Failed to copy "${activeCommand.code}" to clipboard`,
                  )
                }
                value={activeCommand.code}
              />
            )}
          </SnippetHeader>
          {commands.map((command) => (
            <SnippetTabsContent key={command.label} value={command.label}>
              <SyntaxHighlighter
                language={command.label === "curl" ? "bash" : "javascript"}
                style={vscDarkPlus}
                wrapLongLines
                className="rounded-md text-sm"
              >
                {command.code}
              </SyntaxHighlighter>
            </SnippetTabsContent>
          ))}
        </Snippet>
      </section>
    </>
  );
}
