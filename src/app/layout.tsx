import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PERSONAL_INFO } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ravindran-dev.github.io"),
  title: `${PERSONAL_INFO.name} | Software Development Engineer`,
  description: PERSONAL_INFO.summary,
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "Ravindran S",
    "Software Development Engineer",
    "Edge AI",
    "Computer Vision",
    "TensorRT",
    "Rust",
    "eBPF",
    "AOSP",
    "Distributed Systems",
    "LeetCode Knight",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.github }],
  openGraph: {
    title: `${PERSONAL_INFO.name} | Software Development Engineer`,
    description: PERSONAL_INFO.summary,
    url: "https://ravindran-dev.github.io",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: "/photo.png",
        width: 800,
        height: 800,
        alt: PERSONAL_INFO.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Software Development Engineer`,
    description: PERSONAL_INFO.summary,
    images: ["/photo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-primary selection:text-white bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
