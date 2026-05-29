"use client";

import { CodeBlock } from "@/components/code-block";
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
            <SnippetCopyButton value={formatted} />
          </SnippetHeader>
          <SnippetTabsContent value="json">
            <CodeBlock language="json" code={formatted} />
          </SnippetTabsContent>
        </Snippet>
      </section>
    </>
  );
}

