import type { Metadata } from "next";
import { JetBrains_Mono, Josefin_Sans } from "next/font/google";
import "./globals.css";
import StickyDotCursor from "./components/StickyDotCursor";
import ClientOnly from "./components/ClientOnly";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Anosha Rahim",
  description: "Machine Learning Researcher at Springtail",
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefinSans.className} ${jetBrainsMono.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setTheme(theme) {
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.backgroundColor = 'black';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.backgroundColor = 'rgb(245, 245, 237)';
                  }
                  window.localStorage.setItem('theme', theme);
                }
                var storedTheme = window.localStorage.getItem('theme');
                var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                var theme = storedTheme || systemTheme;
                setTheme(theme);
              })();
            `,
          }}
        />
        <ClientOnly>
          {children}
          <StickyDotCursor />
        </ClientOnly>
      </body>
    </html>
  );
}
