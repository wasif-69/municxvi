import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUNICXVI",
  description: "For eighteen years, MUNIC has empowered students to become leaders in public discourse. As a premier Model United Nations conference at The City School Capital Campus Islamabad, MUNIC 2026 continues to serve as an elite platform for innovation, debate, and collaboration. From July 31st to August 2nd, 2026, the country's brightest minds will gather in H-8 to engage in high-level diplomacy, master negotiation, and formulate sophisticated solutions to complex global challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">{children}
         <ToastContainer />
         <Analytics/>
         </body>

    </html>
  );
}
