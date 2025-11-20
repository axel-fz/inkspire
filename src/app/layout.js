import AuthProvider from "@/components/AuthProvider";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider"

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "welcome to inkspire",
  description: "Unleash your creativity with inkspire",

  icons: {
    icon: "/image/favicon.ico", // or '/icon.png'
    shortcut: "/image/favicon.ico",
    apple: "/image/favicon.ico",
  },

  openGraph: {
    title: "Welcome to Inkspire",
    description: "Unleash Your Creativity with Inkspire and create your next blog article",
    url: "https://www.inkspire.com", // your real domain here
    siteName: "Inkspire",
    images: [
      {
        url: "/image/og-image.jpg", // your preview image in /public
        width: 1200,
        height: 630,
        alt: "Inkspire — Unleash Your Creativity",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Welcome to Inkspire",
    description: "Unleash Your Creativity with Inkspire and create your next blog article",
    images: ["/image/og-image.jpg"],
    creator: "@InkspireOfficial", // optional
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        
        <AuthProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
       
        </AuthProvider>
      </body>
    </html>
  );
}
