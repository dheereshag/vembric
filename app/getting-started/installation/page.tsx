import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";

const npmCmd  = `npm install @vembric/sdk`;
const yarnCmd = `yarn add @vembric/sdk`;
const pnpmCmd = `pnpm add @vembric/sdk`;
const pipCmd  = `pip install vembric`;
const gemCmd  = `gem install vembric`;
const goCmd   = `go get github.com/vembric/vembric-go`;

export default function InstallationPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// getting-started / installation"
        title="Installation"
        description="Install the official Vembric SDK for your language of choice."
      />

      <DocSection title="node.js">
        <Snippet defaultValue="npm">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="npm">npm</SnippetTabsTrigger>
              <SnippetTabsTrigger value="yarn">yarn</SnippetTabsTrigger>
              <SnippetTabsTrigger value="pnpm">pnpm</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={npmCmd} />
          </SnippetHeader>
          <SnippetTabsContent value="npm">{npmCmd}</SnippetTabsContent>
          <SnippetTabsContent value="yarn">{yarnCmd}</SnippetTabsContent>
          <SnippetTabsContent value="pnpm">{pnpmCmd}</SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="python">
        <Snippet defaultValue="pip">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="pip">pip</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={pipCmd} />
          </SnippetHeader>
          <SnippetTabsContent value="pip">{pipCmd}</SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="ruby">
        <Snippet defaultValue="gem">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="gem">gem</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={gemCmd} />
          </SnippetHeader>
          <SnippetTabsContent value="gem">{gemCmd}</SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="go">
        <Snippet defaultValue="go">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="go">go</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={goCmd} />
          </SnippetHeader>
          <SnippetTabsContent value="go">{goCmd}</SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="requirements" className="mb-0">
        <ArrowList items={["Node.js v18+", "Python 3.8+", "Ruby 3.0+", "Go 1.21+"]} />
      </DocSection>
    </div>
  );
}
