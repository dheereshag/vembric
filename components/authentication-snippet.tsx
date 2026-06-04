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
import { CurlIcon, JavaScriptIcon } from "@/components/api-doc/icons";

import { useApiVersionStore } from "@/hooks/use-api-version-store";

interface AuthenticationSnippetProps {
  examples: AuthSnippetExample[];
}

const authSnippetIcons: Record<string, ReactNode> = {
  curl: <CurlIcon />,
  node: <JavaScriptIcon />,
};

export function AuthenticationSnippet({ examples }: AuthenticationSnippetProps) {
  const version = useApiVersionStore((state) => state.version);
  const [activeValue, setActiveValue] = useState(examples[0].value);
  const activeExample = examples.find((e) => e.value === activeValue) ?? examples[0];

  const getCode = (code: string) => {
    return code.replaceAll("/v1", `/${version}`);
  };

  return (
    <Snippet value={activeValue} onValueChange={setActiveValue}>
      <SnippetHeader>
        <SnippetTabsList>
          {examples.map((example) => (
            <SnippetTabsTrigger key={example.value} value={example.value}>
              {authSnippetIcons[example.value]}
              <span>{example.label}</span>
            </SnippetTabsTrigger>
          ))}
        </SnippetTabsList>
        <SnippetCopyButton value={getCode(activeExample.code)} />
      </SnippetHeader>
      {examples.map((example) => (
        <SnippetTabsContent key={example.value} value={example.value}>
          <CodeBlock language={example.language} code={getCode(example.code)} />
        </SnippetTabsContent>
      ))}
    </Snippet>
  );
}
