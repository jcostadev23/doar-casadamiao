import Nav from "@/components/NavBar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doar Casa Damião",
  description: "Site para doações para a Casa Damião",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full h-3 bg-blue-900"></div>
        <Nav />
        <div className="w-full max-w-[1400px] mx-auto justify-self-center p-10 items-center md:px-20">
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
