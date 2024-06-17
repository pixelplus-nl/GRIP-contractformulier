import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { GoogleTagManager } from "@next/third-parties/google";

const assistant = Assistant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bezoekers-inschrijfsysteem - GRIP Boulderhal",
  description: "",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="G-2P1EH90QC3" />
      <body className={`${assistant.className} min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
