import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

interface Props {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Akshay S Kurup | SDE",
  description: "Software Engineer, Likes to developing products from conceptual ideas..",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}