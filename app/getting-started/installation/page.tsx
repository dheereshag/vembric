import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";

const npmCmd = `npm install @vembric/sdk`;
const yarnCmd = `yarn add @vembric/sdk`;
const pnpmCmd = `pnpm add @vembric/sdk`;
const pipCmd = `pip install vembric`;
const gemCmd = `gem install vembric`;
const goCmd = `go get github.com/vembric/vembric-go`;

export default function InstallationPage() {
  return (
    <div className="mx-auto py-10">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // getting-started / installation
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="text-muted-foreground mt-2">
          Install the official Vembric SDK for your language of choice.
        </p>
      </div>

      <div className="border-b mb-10" />

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          node.js
        </h2>
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
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          python
        </h2>
        <Snippet defaultValue="pip">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="pip">pip</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={pipCmd} />
          </SnippetHeader>
          <SnippetTabsContent value="pip">{pipCmd}</SnippetTabsContent>
        </Snippet>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          ruby
        </h2>
        <Snippet defaultValue="gem">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="gem">gem</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={gemCmd} />
          </SnippetHeader>
          <SnippetTabsContent value="gem">{gemCmd}</SnippetTabsContent>
        </Snippet>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          go
        </h2>
        <Snippet defaultValue="go">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="go">go</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={goCmd} />
          </SnippetHeader>
          <SnippetTabsContent value="go">{goCmd}</SnippetTabsContent>
        </Snippet>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          requirements
        </h2>
        <ul className="space-y-2 text-sm font-mono">
          <li>
            <span className="text-muted-foreground">→</span> Node.js v18+
          </li>
          <li>
            <span className="text-muted-foreground">→</span> Python 3.8+
          </li>
          <li>
            <span className="text-muted-foreground">→</span> Ruby 3.0+
          </li>
          <li>
            <span className="text-muted-foreground">→</span> Go 1.21+
          </li>
        </ul>
      </section>
    </div>
  );
}
