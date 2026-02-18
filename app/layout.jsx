
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Muzammil Haider | MERN & Next.js Developer",
  description: "Crafting fast, scalable, and elegant web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-zinc-50 text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white dark:bg-black dark:text-zinc-100 dark:selection:bg-white dark:selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
