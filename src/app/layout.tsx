import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { description, title } from "@/constants/appInfo";

const iontserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={iontserrat.className}>{children}</body>
    </html>
  );
}
