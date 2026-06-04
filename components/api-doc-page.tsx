"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import type { ApiActionDoc } from "@/constants/api-docs";
import { ModelSection } from "./api-doc/model-section";
import { CodeSnippetSection } from "./api-doc/code-snippet-section";
import { ResponseSection } from "./api-doc/response-section";
import { useApiVersionStore } from "@/hooks/use-api-version-store";
import { getActionDocForVersion } from "@/constants/api-docs";

type ApiDocPageProps = {
  resourceKey: string;
  actionSlug: string;
  initialData: ApiActionDoc;
};

export function ApiDocPage({ resourceKey, actionSlug, initialData }: ApiDocPageProps) {
  const version = useApiVersionStore((state) => state.version);
  const data = getActionDocForVersion(resourceKey, actionSlug, version) ?? initialData;

  return (
    <ScrollArea className="p-6">
      <h1 className="font-mono text-3xl font-bold tracking-tight mb-2">
        {data.title}
      </h1>
      <p className="text-muted-foreground max-w-3xl">{data.description}</p>

      <ModelSection model={data.model} />

      <CodeSnippetSection
        method={data.method}
        endpoint={data.endpoint}
        description={data.description}
        optionalAttributes={data.optionalAttributes}
        curl={data.curl}
        js={data.js}
      />

      <ResponseSection response={data.response} />
    </ScrollArea>
  );
}
