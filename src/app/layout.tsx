import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { BackToTop } from "@/components/back-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/portfolio";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

const description =
  "Deepak Gupta is a QA engineer in Noida. Fintech testing across UPI, lending, cards, and automation with Selenium, Appium, and Playwright.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#efeae1",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email,
  telephone: profile.phone,
  url: profile.linkedin,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${display.variable} ${plex.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
