"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      wrapLongLines
      className="rounded-md text-sm"
      customStyle={{ fontFamily: "var(--font-snippet)" }}
      codeTagProps={{ style: { fontFamily: "var(--font-snippet)" } }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
