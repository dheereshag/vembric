'use client';

import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
          <div className="mb-6">
            <h4 className="font-medium text-base mb-2">Optional Attributes</h4>
            <ul className="list-disc list-inside space-y-1">
              {optionalAttributes.map((attribute) => (
                <li key={attribute.name}>
                  <span className="font-medium">{attribute.name}</span>{" "}
                  <code className="text-sm text-muted-foreground">
                    ({attribute.type})
                  </code>
                  : {attribute.description}
                </li>
              ))}
            </ul>
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
