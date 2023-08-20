import { AppProvider } from "@/context/AppContext";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { ReactNode } from "react";
import "./globals.css";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Quiz - Teste seu conhecimento!",
  description: "Quiz App construído em Next.js 13",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <AppProvider>
          <main className="wrapper">{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
