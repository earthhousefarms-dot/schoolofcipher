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
  title: "CipherEDU - K-12 Cryptography Education Platform | Trusted by 2,500+ Schools",
  description: "Standards-aligned cryptography curriculum for K-12 classrooms. Engage students with interactive lessons, teacher resources, and progress tracking. COPPA & FERPA compliant.",
  keywords: "K-12 education, cryptography curriculum, educational technology, STEM education, math curriculum, computer science curriculum, teacher resources, classroom technology, educational software, school district license",
  authors: [{ name: "CipherEDU" }],
  openGraph: {
    title: "CipherEDU - Transform Your K-12 Classroom with Cryptography",
    description: "Standards-aligned curriculum trusted by 2,500+ schools. Interactive lessons for all grade levels.",
    url: "https://schoolofcipher.com",
    siteName: "CipherEDU",
    type: "website",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CipherEDU - K-12 Cryptography Education",
    description: "Engage students with hands-on cryptography lessons. Trusted by educators nationwide.",
  },
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
        {children}
      </body>
    </html>
  );
}
