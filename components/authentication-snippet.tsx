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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
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
          <SyntaxHighlighter
            language={example.language}
            style={vscDarkPlus}
            wrapLongLines
            className="rounded-md text-sm"
            customStyle={{ fontFamily: "var(--font-snippet)" }}
            codeTagProps={{ style: { fontFamily: "var(--font-snippet)" } }}
          >
            {example.code}
          </SyntaxHighlighter>
        </SnippetTabsContent>
      ))}
    </Snippet>
  );
}
