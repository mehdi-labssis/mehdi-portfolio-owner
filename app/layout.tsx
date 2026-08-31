import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehdi Labssis — Shopify & Front-End Developer",
  description: "Portfolio of Mehdi Labssis, a Morocco-based Shopify developer and front-end builder creating commerce, brand and community experiences.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
