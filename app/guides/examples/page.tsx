import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { JavaScriptIcon } from "@/components/api-doc/icons";
import {
  examplesListGames,
  examplesCreateOrder,
  examplesWebhookHandler,
} from "@/constants/code-snippets";
import { brand } from "@/constants/brand";

const listGames = examplesListGames;
const createOrder = examplesCreateOrder;
const webhookHandler = examplesWebhookHandler;

export default function ExamplesPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// guides / examples"
        title="Examples"
        description={`Real-world code snippets for common ${brand.name} integration scenarios.`}
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
            <SnippetCopyButton value={listGames} />
          </SnippetHeader>
          <SnippetTabsContent value="node">{listGames}</SnippetTabsContent>
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
            <SnippetCopyButton value={createOrder} />
          </SnippetHeader>
          <SnippetTabsContent value="node">{createOrder}</SnippetTabsContent>
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
            <SnippetCopyButton value={webhookHandler} />
          </SnippetHeader>
          <SnippetTabsContent value="node">{webhookHandler}</SnippetTabsContent>
        </Snippet>
      </DocSection>
    </div>
  );
}
