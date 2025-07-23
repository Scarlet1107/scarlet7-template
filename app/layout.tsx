import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const defaultUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  applicationName: "Scarlet Next.js and Supabase Starter Kit",
  title: "Scarlet Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
  openGraph: {
    title: "Scarlet Next.js and Supabase Starter Kit",
    description: "The fastest way to build apps with Next.js and Supabase",
    url: defaultUrl,
    siteName: "Scarlet Next.js and Supabase Starter Kit",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${defaultUrl}/icons/og-icon.png`,
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scarlet Next.js and Supabase Starter Kit",
    description: "The fastest way to build apps with Next.js and Supabase",
    images: ["/icons/og-icon.png"],
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.className} flex min-h-screen w-full flex-col items-center antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
