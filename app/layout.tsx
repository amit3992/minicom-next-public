import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Intercom } from "@/components/Intercom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minicom Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {process.env.NEXT_PUBLIC_INTERCOM_APP_ID && (
            <Intercom appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID} />
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}