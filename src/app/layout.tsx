import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "USA Underwriter",
  description: "Get affordable, same-day coverage in no time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`${inter.className}`}>
          <Navbar />
          <div className="pt-[68px] sm:pt-[84px]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
