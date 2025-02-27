"use client";
import {
  DM_Sans,
  Geist,
  Geist_Mono,
  Instrument_Sans,
  Inter,
} from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Ear } from "lucide-react";
import { useAtom, useAtomValue } from "jotai";
import { themeAtom } from "@/store/theme.store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const font = Instrument_Sans({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [theme, setTheme] = useAtom(themeAtom);

  console.log(theme);
  return (
    <html lang="en">
      <body className={`${font.className} ${theme} h-dvh antialiased`}>
        {/* <Button onClick={() => setTheme("light")}>theme</Button> */}
        <title>HMS</title>
        {children}
      </body>
    </html>
  );
}
