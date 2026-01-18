import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Front-End Developer Portfolio",
  description: "Portfolio of a Front-End Developer specializing in React, Next.js, and Modern UI/UX.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} antialiased bg-gray-50 dark:bg-zinc-950 text-slate-900 dark:text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
