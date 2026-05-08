import type { Metadata } from "next";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Tufail Khan | Full-Stack MERN Developer & Cloud Intern",
  description:
    "Portfolio of Tufail Khan, a Full-Stack MERN Developer and AWS Cloud & DevOps Intern building scalable web applications, cloud-ready systems, and modern frontend experiences.",
  keywords: [
    "Tufail Khan",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "AWS Cloud Intern",
    "DevOps Intern",
    "Software Engineer Portfolio",
    "Pune Developer",
  ],
  authors: [{ name: "Tufail Khan" }],
  creator: "Tufail Khan",
  openGraph: {
    title: "Tufail Khan | Full-Stack MERN Developer & Cloud Intern",
    description:
      "Explore projects, experience, certifications, and publications by Tufail Khan.",
    type: "website",
    locale: "en_IN",
    siteName: "Tufail Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tufail Khan | Full-Stack MERN Developer & Cloud Intern",
    description:
      "Full-stack MERN developer focused on scalable web apps, cloud infrastructure, and modern frontend experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
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