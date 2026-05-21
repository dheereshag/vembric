import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { brand } from "@/constants/brand";
import { installCommands } from "@/constants/code-snippets";

export default function InstallationPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// getting-started / installation"
        title="Installation"
        description={`Install the official ${brand.name} SDK for your language of choice.`}
      />

      <DocSection title="node.js">
        <Snippet defaultValue="npm">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="npm">npm</SnippetTabsTrigger>
              <SnippetTabsTrigger value="yarn">yarn</SnippetTabsTrigger>
              <SnippetTabsTrigger value="pnpm">pnpm</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={installCommands.npm} />
          </SnippetHeader>
          <SnippetTabsContent value="npm">
            {installCommands.npm}
          </SnippetTabsContent>
          <SnippetTabsContent value="yarn">
            {installCommands.yarn}
          </SnippetTabsContent>
          <SnippetTabsContent value="pnpm">
            {installCommands.pnpm}
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="python">
        <Snippet defaultValue="pip">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="pip">pip</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={installCommands.pip} />
          </SnippetHeader>
          <SnippetTabsContent value="pip">
            {installCommands.pip}
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="ruby">
        <Snippet defaultValue="gem">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="gem">gem</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={installCommands.gem} />
          </SnippetHeader>
          <SnippetTabsContent value="gem">
            {installCommands.gem}
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="go">
        <Snippet defaultValue="go">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="go">go</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={installCommands.go} />
          </SnippetHeader>
          <SnippetTabsContent value="go">
            {installCommands.go}
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="requirements" className="mb-0">
        <ArrowList
          items={["Node.js v18+", "Python 3.8+", "Ruby 3.0+", "Go 1.21+"]}
        />
      </DocSection>
    </div>
  );
}
