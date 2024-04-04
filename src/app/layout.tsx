import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";

const roboto_serif = Roboto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galaxy Watches",
  description: "Next Js & Typescript app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_serif.className}>{children}</body>
    </html>
  );
}
