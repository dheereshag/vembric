"use client";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { Separator } from '@/components/ui/separator';
import type { ApiActionDoc } from '@/constants/api-docs';
import { JsonIcon } from './icons';

type ResponseSectionProps = {
  response: ApiActionDoc['response'];
};

export function ResponseSection({ response }: ResponseSectionProps) {
  const formatted = JSON.stringify(response, null, 2);

  return (
    <>
      <Separator className="my-6" />
      <section>
        <Snippet defaultValue="json">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="json">
                <span>
                  <JsonIcon />
                </span>
                <span>response</span>
              </SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton
              value={formatted}
              onCopy={() => console.log(`Copied "${formatted}" to clipboard`)}
              onError={() =>
                console.error(`Failed to copy "${formatted}" to clipboard`)
              }
            />
          </SnippetHeader>
          <SnippetTabsContent value="json">
            <SyntaxHighlighter
              language="json"
              style={vscDarkPlus}
              wrapLongLines
              className="rounded-md text-sm"
            >
              {formatted}
            </SyntaxHighlighter>
          </SnippetTabsContent>
        </Snippet>
      </section>
    </>
  );
}

