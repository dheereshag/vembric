import { Geist_Mono, JetBrains_Mono } from "next/font/google";

// next/font requires fully static call arguments (no spreading) when using Turbopack.
// Both variables use the same JetBrains Mono face; Next.js deduplicates the network request.
export const fontSans = JetBrains_Mono({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  fallback: [
    "SFMono-Regular",
    "Consolas",
    "Liberation Mono",
    "Menlo",
    "Courier",
    "monospace",
  ],
});

export const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  fallback: [
    "SFMono-Regular",
    "Consolas",
    "Liberation Mono",
    "Menlo",
    "Courier",
    "monospace",
  ],
});

export const snippetFont = Geist_Mono({
  variable: "--font-snippet",
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "SFMono-Regular",
    "Consolas",
    "Liberation Mono",
    "Menlo",
    "Courier",
    "monospace",
  ],
});
