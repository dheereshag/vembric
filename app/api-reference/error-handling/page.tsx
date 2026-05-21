import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { statusCodes } from "@/constants/api-reference";
import { brand } from "@/constants/brand";
import { errorResponseExample } from "@/constants/code-snippets";
import { JsonIcon } from "@/components/api-doc/icons";

const errorExample = errorResponseExample;

export default function ErrorHandlingPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// api-reference / error-handling"
        title="Error Handling"
        description={`Understand ${brand.name} error responses and how to handle them gracefully.`}
      />

      <DocSection title="error format">
        <Snippet defaultValue="json">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="json">
                <JsonIcon />
                <span>response</span>
              </SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={errorExample} />
          </SnippetHeader>
          <SnippetTabsContent value="json">{errorExample}</SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="status codes">
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest">
            <span className="col-span-2">code</span>
            <span className="col-span-10">meaning</span>
          </div>
          {statusCodes.map(([code, meaning]) => (
            <div key={code} className="grid grid-cols-12 px-4 py-3 items-start">
              <code className="col-span-2 text-xs">{code}</code>
              <span className="col-span-10 text-muted-foreground text-xs">
                {meaning}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="retry strategy" className="mb-0">
        <ArrowList
          items={[
            "Always retry on 429 — respect the Retry-After header",
            "Retry 500 / 503 with exponential backoff (3 attempts max)",
            "Never retry 400, 401, 403, 404, or 422 — fix the request first",
          ]}
        />
        <InfoBox className="mt-4">
          // log the error.code field for easier debugging and support tickets
        </InfoBox>
      </DocSection>
    </div>
  );
}
