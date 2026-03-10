'use client';

import { listAllGamesApiData as data } from './list-all-games-api';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  Snippet,
  SnippetHeader,
  SnippetTabsList,
  SnippetTabsTrigger,
  SnippetTabsContent,
  SnippetCopyButton,
} from "@/components/kibo-ui/snippet";
import {siCurl, siJavascript, siJson} from 'simple-icons'
import { useState } from "react";

export default function ListAllGamesPage() {
  const CurlIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill='currentColor'>
      <path d={siCurl.path} />
    </svg>
  );

  const JavaScriptIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill='currentColor'>
      <path d={siJavascript.path} />
    </svg>
  );
  const JsonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill='currentColor'>
    <path d={siJson.path} />
  </svg>
);

  const commands = [
    {
      label: "curl",
      icon: CurlIcon,
      code: data.curl,
    },
    {
      label: "javascript",
      icon: JavaScriptIcon,
      code: data.js,
    },
  ];

  const [value, setValue] = useState(commands[0].label);
  const activeCommand = commands.find((command) => command.label === value);

  return (
    <ScrollArea className="p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-muted-foreground max-w-3xl">{data.description}</p>

      <Separator className="my-6" />

      {/* Contact Model */}
      <section>
        <h2 className="text-xl font-semibold mb-4">The Game Model</h2>
        <p className="text-muted-foreground mb-4 max-w-3xl">
          The game model defines each game’s core attributes: ID, name, genre, release date, and the developer behind it.
        </p>

        <div className="space-y-4">
          {data.model.map((item) => (
            <div key={item.name}>
              <div className="flex items-center gap-2 font-mono font-medium">
                <Badge variant="outline" className="rounded-sm">{item.name}</Badge>
                <code className="text-xs text-muted-foreground">{item.type}</code>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-6" />

      {/* Endpoint */}
      <section>
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 font-mono">GET</Badge>
          <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{data.endpoint}</code>
        </div>
        <h3 className="text-lg font-semibold">List all games</h3>
        <p className="text-muted-foreground mb-4">{data.description}</p>

        {/* Optional Attributes */}
        <div className="mb-6">
          <h4 className="font-medium text-base mb-2">Optional Attributes</h4>
          <ul className="list-disc list-inside space-y-1">
            {data.optionalAttributes.map((attr) => (
              <li key={attr.name}>
                <span className="font-medium">{attr.name}</span>{' '}
                <code className="text-sm text-muted-foreground">({attr.type})</code>: {attr.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Code Tabs */}
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
                    `Failed to copy "${activeCommand.code}" to clipboard`
                  )
                }
                value={activeCommand.code}
              />
            )}
          </SnippetHeader>
          {commands.map((command) => (
            <SnippetTabsContent key={command.label} value={command.label}>
              <SyntaxHighlighter language={command.label === 'curl' ? 'bash' : 'javascript'} style={vscDarkPlus} wrapLongLines className="rounded-md text-sm">
                {command.code}
              </SyntaxHighlighter>
            </SnippetTabsContent>
          ))}
        </Snippet>
      </section>

      <Separator className="my-6" />

      {/* Sample Response */}
      <section>
        <div className="group w-full gap-0 overflow-hidden rounded-md border">
          <div className="flex flex-row items-center justify-between border-b bg-secondary p-1">
            <h4 className="text-base font-medium flex items-center gap-2 px-2">
              <JsonIcon />
              Response
            </h4>
            <SnippetCopyButton
              value={JSON.stringify(data.response, null, 2)}
              onCopy={() => console.log('Copied response to clipboard')}
              onError={() => console.error('Failed to copy response to clipboard')}
            />
          </div>
          <SyntaxHighlighter language="json" style={vscDarkPlus} wrapLongLines className="!rounded-none !m-0 text-sm">
            {JSON.stringify(data.response, null, 2)}
          </SyntaxHighlighter>
        </div>
      </section>
    </ScrollArea>
  );
}
