"use client";

import { useState } from "react";
import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { CodeBlock } from "@/components/code-block";
import type { ReactNode } from "react";
import type { AuthSnippetExample } from "@/constants/code-snippets";

interface AuthenticationSnippetProps {
  examples: AuthSnippetExample[];
  icons: Record<string, ReactNode>;
}

export function AuthenticationSnippet({ examples, icons }: AuthenticationSnippetProps) {
  const [activeValue, setActiveValue] = useState(examples[0].value);
  const activeExample = examples.find((e) => e.value === activeValue) ?? examples[0];

  return (
    <Snippet value={activeValue} onValueChange={setActiveValue}>
      <SnippetHeader>
        <SnippetTabsList>
          {examples.map((example) => (
            <SnippetTabsTrigger key={example.value} value={example.value}>
              {icons[example.value]}
              <span>{example.label}</span>
            </SnippetTabsTrigger>
          ))}
        </SnippetTabsList>
        <SnippetCopyButton value={activeExample.code} />
      </SnippetHeader>
      {examples.map((example) => (
        <SnippetTabsContent key={example.value} value={example.value}>
          <CodeBlock language={example.language} code={example.code} />
        </SnippetTabsContent>
      ))}
    </Snippet>
  );
}
