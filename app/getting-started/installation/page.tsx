import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { brand } from "@/constants/brand";
import { installCommands } from "@/constants/code-snippets";
import {
  NpmIcon,
  YarnIcon,
  PnpmIcon,
  PythonIcon,
  RubygemsIcon,
  GoIcon,
} from "@/components/api-doc/icons";

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
              <SnippetTabsTrigger value="npm">
                <NpmIcon />
                <span>npm</span>
              </SnippetTabsTrigger>
              <SnippetTabsTrigger value="yarn">
                <YarnIcon />
                <span>yarn</span>
              </SnippetTabsTrigger>
              <SnippetTabsTrigger value="pnpm">
                <PnpmIcon />
                <span>pnpm</span>
              </SnippetTabsTrigger>
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
              <SnippetTabsTrigger value="pip">
                <PythonIcon />
                <span>pip</span>
              </SnippetTabsTrigger>
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
              <SnippetTabsTrigger value="gem">
                <RubygemsIcon />
                <span>gem</span>
              </SnippetTabsTrigger>
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
              <SnippetTabsTrigger value="go">
                <GoIcon />
                <span>go</span>
              </SnippetTabsTrigger>
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
