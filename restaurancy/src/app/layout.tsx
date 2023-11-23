import type {Metadata} from "next";

import "./globals.css";
import {Header} from "./components/ui";

export const metadata: Metadata = {
  title: "Restaurancy",
  description: "Curso introductorio de Next.js 14",
  keywords: ["nextjs14", "nextjs", "typescript", "tailwindcss"],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <Header />
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Restaurancy
        </footer>
      </body>
    </html>
  );
}
