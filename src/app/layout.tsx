import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advicehub.vercel.app"),
  title: {
    default: "AdviceHub — Practical Advice on Tech, Web Dev & Productivity",
    template: "%s | AdviceHub",
  },
  description:
    "AdviceHub delivers practical, expert advice on technology, web development, online business, and productivity. Stay ahead with in-depth guides and tutorials.",
  keywords: [
    "technology blog",
    "web development",
    "programming tutorials",
    "productivity tips",
    "online business",
    "developer tools",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Jad Lamtaifi" }],
  creator: "Jad Lamtaifi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://advicehub.vercel.app",
    siteName: "AdviceHub",
    title: "AdviceHub — Practical Advice on Tech, Web Dev & Productivity",
    description:
      "Practical, expert advice on technology, web development, online business, and productivity.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AdviceHub Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdviceHub — Practical Advice on Tech, Web Dev & Productivity",
    description:
      "Practical, expert advice on technology, web development, online business, and productivity.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-adsense-account": "ca-pub-5598684072787687",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5598684072787687"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>

  );
}
