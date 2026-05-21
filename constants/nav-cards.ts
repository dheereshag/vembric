import { BookOpen, Terminal, Code2, type LucideIcon } from "lucide-react";

export type NavCardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  actionText: string;
  actionHref: string;
};

export const navCards: NavCardItem[] = [
  {
    title: "Quick Start",
    description: "Get up and running with Vembric in under 5 minutes.",
    icon: BookOpen,
    actionText: "Read Guide",
    actionHref: "/getting-started/quick-start",
  },
  {
    title: "API Reference",
    description:
      "Browse endpoints, query parameters, and interactive request samples.",
    icon: Terminal,
    actionText: "Explore Endpoints",
    actionHref: "/games/list-all-games",
  },
  {
    title: "Client SDKs",
    description:
      "Integrate with official SDKs for Node.js, Python, Go, and more.",
    icon: Code2,
    actionText: "Download SDKs",
    actionHref: "/sdks",
  },
];
