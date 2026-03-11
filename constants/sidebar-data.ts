import {
  BookOpen,
  Bot,
  Gamepad2,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { RequestType } from ".";

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
  resources: [
    {
      title: "Games",
      url: "#",
      icon: Gamepad2,
      isActive: true,
      items: [
        {
          title: "List All Games",
          url: "/games/list-all-games",
          requestType: RequestType.GET,
        },
        {
          title: "Create Game",
          url: "/games/create-game",
          requestType: RequestType.POST,
        },
        {
          title: "Edit Game",
          url: "/games/edit-game",
          requestType: RequestType.PATCH,
        },
        {
          title: "Update Game",
          url: "/games/update-game",
          requestType: RequestType.PUT,
        },
        {
          title: "View Details",
          url: "/games/view-details",
          requestType: RequestType.GET,
        },
        {
          title: "Delete Game",
          url: "/games/delete-game",
          requestType: RequestType.DELETE,
        },
      ],
    },
  ],
};
