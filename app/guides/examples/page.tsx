import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { JavaScriptIcon } from "@/components/api-doc/icons";
import { CodeBlock } from "@/components/code-block";
import {
  examplesListGames,
  examplesCreateOrder,
  examplesWebhookHandler,
} from "@/constants/code-snippets";
import { examplesContent } from "@/constants/page-content";

export default function ExamplesPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// guides / examples"
        title="Examples"
        description={examplesContent.header.description}
      />

      <DocSection title="list games">
        <Snippet defaultValue="node">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="node">
                <JavaScriptIcon />
                <span>node.js</span>
              </SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={examplesListGames} />
          </SnippetHeader>
          <SnippetTabsContent value="node">
            <CodeBlock language="javascript" code={examplesListGames} />
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="create an order">
        <Snippet defaultValue="node">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="node">
                <JavaScriptIcon />
                <span>node.js</span>
              </SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={examplesCreateOrder} />
          </SnippetHeader>
          <SnippetTabsContent value="node">
            <CodeBlock language="javascript" code={examplesCreateOrder} />
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="webhook handler" className="mb-0">
        <Snippet defaultValue="node">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="node">
                <JavaScriptIcon />
                <span>node.js (express)</span>
              </SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={examplesWebhookHandler} />
          </SnippetHeader>
          <SnippetTabsContent value="node">
            <CodeBlock language="javascript" code={examplesWebhookHandler} />
          </SnippetTabsContent>
        </Snippet>
      </DocSection>
    </div>
  );
}
