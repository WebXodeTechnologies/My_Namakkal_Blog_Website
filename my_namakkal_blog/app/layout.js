// app/layout.js
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight:["400","500","600","700"],
  variable: "--font-outfit",
  display: "swap", // better for performance and UX
});

export const metadata = {
  metadataBase: new URL("https://mynamakkal.in"), // change to your domain
  title: {
    default: "My Namakkal - Local News, Crime, Market & Commercial Updates",
    template: "%s | My Namakkal",
  },
  description:
    "Stay updated with the latest news and events in Namakkal, Rasipuram, and Karur. Covering crime, local market updates, and commercial news.",
  keywords: [
    "Namakkal news",
    "Rasipuram updates",
    "Karur local news",
    "Crime news Namakkal",
    "Market news Namakkal",
    "Tamil Nadu blogs",
    "Namakkal events",
    "Local blogs Tamil Nadu",
    "Namakkal commercial news",
  ],
  authors: [{ name: "Webxode Technologies", url: "https://webxode.in" }],
  creator: "Webxode Technologies",
  openGraph: {
    title: "My Namakkal",
    description:
      "Local News Blog for Namakkal, Rasipuram, and Karur - Stay updated with events and insights.",
    url: "https://mynamakkal.in",
    siteName: "My Namakkal",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Namakkal",
    description:
      "Local News, Crime Reports, and Market Insights from Namakkal and nearby towns.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
