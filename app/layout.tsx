import type { Metadata } from "next";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Tufail Khan | Portfolio",
  description: "Personal portfolio of Tufail Khan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <PageLoader />
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}