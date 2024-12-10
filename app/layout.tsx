import type { Metadata } from "next";
import Head from "next/head";
import { JetBrains_Mono, Josefin_Sans } from "next/font/google";
import "./globals.css";
import StickyDotCursor from "./components/StickyDotCursor";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Anosha's Corner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={`${josefinSans.className} ${jetBrainsMono.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('darkMode') === 'true') {
                  document.body.classList.add('dark-mode');
                }
              } catch (e) {}
            `,
          }}
        />
        {children}
        <StickyDotCursor />
      </body>
    </html>
  );
}
