import {
  BookOpen,
  Bot,
  Gamepad2,
  Package,
  Settings2,
  SquareTerminal,
} from "lucide-react";
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
          url: "#",
        },
        {
          title: "Quick Start",
          url: "#",
        },
        {
          title: "Installation",
          url: "#",
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
          url: "#",
        },
        {
          title: "Endpoints",
          url: "#",
        },
        {
          title: "Rate Limiting",
          url: "#",
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
          url: "#",
        },
        {
          title: "Error Handling",
          url: "#",
        },
        {
          title: "SDKs",
          url: "/sdks",
        },
        {
          title: "Examples",
          url: "#",
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
          url: "#",
        },
        {
          title: "Contact",
          url: "#",
        },
        {
          title: "Status",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
  ],
  resources: resourceDocs.map((resource) => ({
    title: resource.title,
    url: "#",
    icon: resourceIcons[resource.key as keyof typeof resourceIcons],
    isActive: resource.key === "games",
    items: resource.actions.map((action) => ({
      title: action.title,
      url: `/${resource.key}/${action.slug}`,
      requestType: action.method,
    })),
  })),
};
