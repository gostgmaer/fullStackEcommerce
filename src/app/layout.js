import { Inter } from "next/font/google";
import "./globals.css";
// import 'resuit/dist/resuit.css';
import { ProviderTheme } from "../utils/ProviderTheme";
import NextAuthProvider from "@/context/sessionContext";
import Script from "next/script";
// import { AuthContextProvider } from "@/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  generator: "Next.js",
  applicationName: "Ecommerce App",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "node", "Kishor Sarkar"],
  authors: [{ name: "Kishor Sarkar", url: "https://nextjs.org" }],
  creator: "Kishor Sarkar",
  publisher: "vercil",
  title: "Ecommerce App",
  description:
    "This website is used for demostarate my knoledge on Next and reatjs with Nodejs Backend and mongodb.",

  twitter: {
    card: "Ecommerce App",
    title: "Next.js",
    description:
      "This website is used for demostarate my knoledge on Next and reatjs with Nodejs Backend and mongodb.",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: {
      url: "https://nextjs.org/og.png",
      alt: "Next.js Logo",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://iphone_url",
        ipad: "https://ipad_url",
      },
    },
  },
  openGraph: {
    title: "Ecommerce App",
    description:
      "This website is used for demostarate my knoledge on Next and reatjs with Nodejs Backend and mongodb.",

    url: "https://full-stack-ecommerce-iota.vercel.app/",
    siteName: "Ecommerce",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    videos: [
      {
        url: "https://nextjs.org/video.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://full-stack-ecommerce-iota.vercel.app/",
    languages: {
      "en-US": "https://nextjs.org/en-US",
    },
    media: {
      "only screen and (max-width: 600px)": "https://nextjs.org/mobile",
    },
    types: {
      "application/rss+xml": "https://nextjs.org/rss",
    },
  },
  canonical: "https://full-stack-ecommerce-iota.vercel.app/",
  facebook: {
    appId: "12345678",
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <head></head>

        <body className={inter.className}>
          <ProviderTheme>{children}</ProviderTheme>
          <Script
            src="https://checkout.razorpay.com/v1/checkout.js"
            strategy="beforeInteractive" // Ensures the script loads before your component renders
          />
        </body>
      </html>
    </NextAuthProvider>
  );
}
