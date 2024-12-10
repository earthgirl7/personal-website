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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const isDark = localStorage.getItem('darkMode') === 'true';
                  if (isDark) {
                    document.documentElement.classList.add('dark-mode');
                  }
                  document.documentElement.style.setProperty('--initial-theme-icon', isDark ? "'🌞'" : "'🌙'");
                } catch (e) {}
              })();
            `,
          }}
        />
      </Head>
      <body className={`${josefinSans.className} ${jetBrainsMono.variable}`}>
        {children}
        <StickyDotCursor />
      </body>
    </html>
  );
}
