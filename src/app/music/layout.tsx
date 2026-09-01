import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Natan Oihman | Music",
  description: "Natan Oihman - bass guitar player",
};

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-black text-white">{children}</div>;
}
