import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mubashir-ai.vercel.app"),
  title: "Mohammed Mubashir Ahmed | AI Engineer",
  description:
    "Building intelligent AI systems, automation tools, and real-world solutions using ML, GenAI & Agents.",
  openGraph: {
    title: "Mohammed Mubashir Ahmed | AI Engineer",
    description:
      "Building intelligent AI systems, automation tools, and real-world solutions using ML, GenAI & Agents.",
    url: "https://mubashir-ai.vercel.app",
    siteName: "Mubashir.AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Mubashir Ahmed | AI Engineer",
    description:
      "Building intelligent AI systems, automation tools, and real-world solutions using ML, GenAI & Agents.",
  },
  keywords: [
    "AI Engineer",
    "Mohammed Mubashir Ahmed",
    "Machine Learning",
    "Generative AI",
    "AI Portfolio",
    "Automation",
    "Agents",
  ],
  authors: [{ name: "Mohammed Mubashir Ahmed" }],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "relative min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
