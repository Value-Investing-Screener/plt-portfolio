import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientLayout } from "./clientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portefeuilles PLT Insider",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout >{children}</ClientLayout>
      </body>
    </html>
  );
}
