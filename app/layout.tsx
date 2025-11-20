import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Jesse Schmidt - Personal Website",
  description: "Welcome to Jesse Schmidt's personal website",
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
        <ClientOnly>
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
