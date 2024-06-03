import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import ReduxProvider from "@/redux/features/provider";

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
      <Head>
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/robotoserif/v13/R70mjywflP6FLr3gZx7K8UyuXDs9zVwDmXCb8lxYgmuii32UGoVldX6UgfjL4-3sMM_kB_qXSEX5JCh01uHN-poF.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={roboto_serif.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
