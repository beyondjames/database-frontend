import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Database Frontend",
  description: "Created by James Cartwright",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`h-full ${inter.className}`}>
        <div>
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
