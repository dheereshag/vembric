import { Geist_Mono, JetBrains_Mono } from "next/font/google";

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

// Legacy exports for backward compatibility
export const geistSans = fontSans;
export const geistMono = fontMono;
export const inter = fontSans;
