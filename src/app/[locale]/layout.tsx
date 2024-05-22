import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";

const assistant = Assistant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contractformulier - GRIP",
  description: "",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={locale}>
      <body className={assistant.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
