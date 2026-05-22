import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import type { ReactNode } from "react";
import { brand } from "@/constants/brand";
import { installCommands } from "@/constants/code-snippets";
import {
  NpmIcon,
  YarnIcon,
  PnpmIcon,
  PythonIcon,
  PypiIcon,
  RubyIcon,
  GoIcon,
  NodejsIcon,
} from "@/components/api-doc/icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type InstallCommandKey = keyof typeof installCommands;

type InstallationTab = {
  value: InstallCommandKey;
  label: string;
  icon: ReactNode;
};

type InstallationSection = {
  title: string;
  icon: ReactNode;
  defaultValue: InstallCommandKey;
  tabs: InstallationTab[];
};

const installationSections: InstallationSection[] = [
  {
    title: "node.js",
    icon: <NodejsIcon />,
    defaultValue: "npm",
    tabs: [
      { value: "npm", label: "npm", icon: <NpmIcon /> },
      { value: "yarn", label: "yarn", icon: <YarnIcon /> },
      { value: "pnpm", label: "pnpm", icon: <PnpmIcon /> },
    ],
  },
  {
    title: "python",
    icon: <PythonIcon />,
    defaultValue: "pip",
    tabs: [{ value: "pip", label: "pip", icon: <PypiIcon /> }],
  },
  {
    title: "ruby",
    icon: <RubyIcon />,
    defaultValue: "gem",
    tabs: [{ value: "gem", label: "gem", icon: <RubyIcon /> }],
  },
  {
    title: "go",
    icon: <GoIcon />,
    defaultValue: "go",
    tabs: [{ value: "go", label: "go", icon: <GoIcon /> }],
  },
];

export default function InstallationPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// getting-started / installation"
        title="Installation"
        description={`Install the official ${brand.name} SDK for your language of choice.`}
      />

      {installationSections.map((section) => (
        <DocSection
          key={section.title}
          title={
            <span className="inline-flex items-center gap-2">
              {section.icon}
              <span>{section.title}</span>
            </span>
          }
        >
          <Snippet defaultValue={section.defaultValue}>
            <SnippetHeader>
              <SnippetTabsList>
                {section.tabs.map((tab) => (
                  <SnippetTabsTrigger key={tab.value} value={tab.value}>
                    {tab.icon}
                    <span>{tab.label}</span>
                  </SnippetTabsTrigger>
                ))}
              </SnippetTabsList>
              <SnippetCopyButton
                value={installCommands[section.defaultValue]}
              />
            </SnippetHeader>
            {section.tabs.map((tab) => (
              <SnippetTabsContent key={tab.value} value={tab.value}>
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  wrapLongLines
                  className="rounded-md text-sm"
                >
                  {installCommands[tab.value]}
                </SyntaxHighlighter>
              </SnippetTabsContent>
            ))}
          </Snippet>
        </DocSection>
      ))}

      <DocSection title="requirements" className="mb-0">
        <ArrowList
          items={["Node.js v18+", "Python 3.8+", "Ruby 3.0+", "Go 1.21+"]}
        />
      </DocSection>
    </div>
  );
}
