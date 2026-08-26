import type { Metadata } from "next";
import { fontSans, fontMono, snippetFont } from "@/lib/fonts";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { AppHeader } from "@/components/app-header";
import { brand } from "@/constants/brand";

export const metadata: Metadata = {
  title: brand.appTitle,
  description: brand.appDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${snippetFont.variable} font-sans antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex-1 flex flex-col overflow-auto">
            <AppHeader />
            <main className="flex-1 p-4">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
