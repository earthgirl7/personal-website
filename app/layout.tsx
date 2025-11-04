import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import StickyDotCursor from "./components/StickyDotCursor";
import ClientOnly from "./components/ClientOnly";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-noto-sans",
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
    <html lang="en">
      <body className={notoSans.className} style={{ backgroundColor: 'white' }}>
        {/* Dark mode script - commented out for now */}
        {/* <script
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
        /> */}
        <ClientOnly>
          {children}
          <StickyDotCursor />
        </ClientOnly>
      </body>
    </html>
  );
}
