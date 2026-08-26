import { BookOpen, Bot, Gamepad2, Package, Settings2, SquareTerminal } from "lucide-react";
import { resourceDocs } from "./api-docs";

const resourceIcons = {
  games: Gamepad2,
  orders: Package,
} as const;

export const sidebarData = {
  user: {
    name: "john",
    email: "john@example.com",
    avatar: "/avatars/john.jpg",
  },
  guides: [
    {
      title: "Getting Started",
      url: "#",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Introduction",
          url: "/getting-started/introduction",
        },
        {
          title: "Quick Start",
          url: "/getting-started/quick-start",
        },
        {
          title: "Installation",
          url: "/getting-started/installation",
        },
      ],
    },
    {
      title: "API Reference",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Authentication",
          url: "/api-reference/authentication",
        },
        {
          title: "Endpoints",
          url: "/api-reference/endpoints",
        },
        {
          title: "Pagination",
          url: "/api-reference/pagination",
        },
        {
          title: "Webhooks",
          url: "/api-reference/webhooks",
        },
        {
          title: "Rate Limiting",
          url: "/api-reference/rate-limiting",
        },
        {
          title: "Error Handling",
          url: "/api-reference/error-handling",
        },
      ],
    },
    {
      title: "Guides",
      url: "#",
      icon: SquareTerminal,
      items: [
        {
          title: "Best Practices",
          url: "/guides/best-practices",
        },
        {
          title: "SDKs",
          url: "/sdks",
        },
        {
          title: "Examples",
          url: "/guides/examples",
        },
      ],
    },
    {
      title: "Support",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "FAQ",
          url: "/support/faq",
        },
        {
          title: "Contact",
          url: "/support/contact",
        },
        {
          title: "Status",
          url: "/support/status",
        },
        {
          title: "Changelog",
          url: "/support/changelog",
        },
      ],
    },
  ],
  resources: resourceDocs.map((resource) => ({
    title: resource.title,
    url: "#",
    icon: resourceIcons[resource.key as keyof typeof resourceIcons],
    items: resource.actions.map((action) => ({
      title: action.title,
      url: `/${resource.key}/${action.slug}`,
      requestType: action.method,
    })),
  })),
};
