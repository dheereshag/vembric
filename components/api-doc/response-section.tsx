"use client";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SnippetCopyButton } from '@/components/kibo-ui/snippet';
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
        <div className="group w-full gap-0 overflow-hidden rounded-md border">
          <div className="flex flex-row items-center justify-between border-b bg-secondary p-1">
            <h4 className="text-base font-medium flex items-center gap-2 px-2">
              <JsonIcon />
              Response
            </h4>
            <SnippetCopyButton
              value={formatted}
              onCopy={() => console.log(`Copied "${formatted}" to clipboard`)}
              onError={() =>
                console.error(`Failed to copy "${formatted}" to clipboard`)
              }
            />
          </div>
          <SyntaxHighlighter
            language="json"
            style={vscDarkPlus}
            wrapLongLines
            className="rounded-none! m-0! text-sm"
          >
            {formatted}
          </SyntaxHighlighter>
        </div>
      </section>
    </>
  );
}
