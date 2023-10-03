import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyNote",
  description: "Practicing Next.js, Prisma, shadcn and next-auth",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className}`}>
        <SessionProvider session={session}>
          <>
            <Header />
            <main className="p-4 pt-8 max-w-md mx-auto">{children}</main>
          </>
        </SessionProvider>
      </body>
    </html>
  );
}
