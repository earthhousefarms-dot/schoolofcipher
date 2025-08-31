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
  title: "School of Cipher - Learn Cryptography Online | Cipher Tutorials & Tools",
  description: "Master cryptography with School of Cipher. Learn 24+ ciphers including Caesar, Vigenère, and modern encryption. Interactive tools, tutorials, and competitions for all skill levels.",
  keywords: "cryptography, cipher, encryption, decryption, caesar cipher, vigenere cipher, cryptography tutorial, learn cryptography, cipher tools, encryption tools",
  authors: [{ name: "School of Cipher" }],
  openGraph: {
    title: "School of Cipher - Master the Art of Cryptography",
    description: "Learn 24+ ciphers with interactive tools and tutorials. From Caesar to modern encryption.",
    url: "https://schoolofcipher.com",
    siteName: "School of Cipher",
    type: "website",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "School of Cipher - Master Cryptography",
    description: "Learn 24+ ciphers with interactive tools. Unlock the secrets of encryption.",
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
