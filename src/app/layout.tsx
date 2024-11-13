import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";

import { cx } from "#/lib/cx";

import "./globals.css";

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const serif = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const mono = localFont({
  src: "../assets/fonts/BerkeleyMono-Regular.woff2",
  variable: "--font-berkeley-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "atblog.benharri.org",
  description: "a webbed sight",
  alternates: {
    canonical: "https://atblog.benharri.org",
    types: {
      "application/rss+xml": "https://atblog.benharri.org/rss",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>atblog</title>
      </head>
      <body
        className={cx(
          sans.variable,
          serif.variable,
          mono.variable,
          "antialiased font-sans",
        )}
      >
        {children}
      </body>
    </html>
  );
}
