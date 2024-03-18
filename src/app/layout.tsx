import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import NavigationMenu from "@/components/Layout/NavigationMenu";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "에브리",
  description: "모두의 지식 나눔 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={cn(
              "min-h-screen bg-background font-sans",
              fontSans.variable
          )}
      >
          <NavigationMenu />
          {children}
      </body>
    </html>
  );
}
