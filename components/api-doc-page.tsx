import { ScrollArea } from "@/components/ui/scroll-area";
import type { ApiActionDoc } from "@/constants/api-docs";
import { ModelSection } from "./api-doc/model-section";
import { CodeSnippetSection } from "./api-doc/code-snippet-section";
import { ResponseSection } from "./api-doc/response-section";

type ApiDocPageProps = {
  data: ApiActionDoc;
};

export function ApiDocPage({ data }: ApiDocPageProps) {
  return (
    <ScrollArea className="p-6">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
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
