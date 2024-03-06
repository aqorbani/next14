import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "Next js 14",
  description: "Next js 14 refrence",
};

const vazirfont = localFont({
  src: '../public/fonts/Vazirmatn-Regular.woff2'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vazirfont.className}>{children}</body>
    </html>
  );
}
