import type { Metadata } from "next";
import { Nunito, Fredoka } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProGlide Express Car Wash | Hot Springs, Arkansas",
  description:
    "Premium touchless car wash in Hot Springs, Arkansas. Join our Wash Club for unlimited monthly washes starting at $20/month. Don't leave here dirty, we want you clean!",
  keywords: [
    "car wash",
    "Hot Springs",
    "Arkansas",
    "touchless car wash",
    "wash club",
    "unlimited car wash",
    "ProGlide Express",
  ],
  openGraph: {
    title: "ProGlide Express Car Wash | Hot Springs, Arkansas",
    description:
      "Premium touchless car wash in Hot Springs, Arkansas. Join our Wash Club for unlimited monthly washes starting at $20/month.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${fredoka.variable}`}>
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
