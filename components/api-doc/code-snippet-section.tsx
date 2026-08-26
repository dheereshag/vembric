"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SchemaTable } from "./schema-table";
import { CodeBlock } from "@/components/code-block";
import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import type { ApiActionDoc } from "@/constants/api-docs";
import { getRequestTypeColorClass } from "@/lib/request-type";
import { CurlIcon, JavaScriptIcon } from "./icons";

type CodeSnippetSectionProps = {
  method: ApiActionDoc["method"];
  endpoint: ApiActionDoc["endpoint"];
  description: ApiActionDoc["description"];
  optionalAttributes: ApiActionDoc["optionalAttributes"];
  curl: ApiActionDoc["curl"];
  js: ApiActionDoc["js"];
};

export function CodeSnippetSection({
  method,
  endpoint,
  description,
  optionalAttributes,
  curl,
  js,
}: CodeSnippetSectionProps) {
  const commands = [
    { label: "curl", icon: CurlIcon, code: curl },
    { label: "javascript", icon: JavaScriptIcon, code: js },
  ];

  const [value, setValue] = useState(commands[0].label);
  const activeCommand = commands.find((command) => command.label === value);

  return (
    <>
      <Separator className="my-6" />
      <section>
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="outline" className={`rounded ${getRequestTypeColorClass(method)}`}>
            {method}
          </Badge>
          <code className="text-sm font-mono bg-muted px-2 py-1">{endpoint}</code>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>

        {optionalAttributes && optionalAttributes.length > 0 && (
          <div className="mb-6 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              optional attributes
            </h4>
            <SchemaTable items={optionalAttributes} nameHeader="Attribute" />
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
            {activeCommand && <SnippetCopyButton value={activeCommand.code} />}
          </SnippetHeader>
          {commands.map((command) => (
            <SnippetTabsContent key={command.label} value={command.label}>
              <CodeBlock
                language={command.label === "curl" ? "bash" : "javascript"}
                code={command.code}
              />
            </SnippetTabsContent>
          ))}
        </Snippet>
      </section>
    </>
  );
}
