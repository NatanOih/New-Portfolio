import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CSPostHogProvider from "./_analytics/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natan Oihman",
  description: "Natan Oihman's personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CSPostHogProvider>
      <html suppressHydrationWarning lang="en" className="scroll-smooth">
        <body className={inter.className}>{children}</body>
      </html>
    </CSPostHogProvider>
  );
}
