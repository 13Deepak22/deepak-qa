import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { BackToTop } from "@/components/layout/back-to-top";
import { SiteCursor } from "@/components/layout/site-cursor";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { profile } from "@/data";
import { personJsonLd, siteDescription, siteKeywords, siteTitle, siteTitleSuffix, siteUrl } from "@/lib/site";
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

/** Rebuild pages daily so the years of experience roll over on the career anniversary. */
export const revalidate = 86400;

export function generateMetadata(): Metadata {
  const description = siteDescription();
  return {
    metadataBase: new URL(siteUrl()),
    title: {
      default: siteTitle,
      template: `%s — ${siteTitleSuffix}`,
    },
    applicationName: profile.name,
    category: "portfolio",
    description,
    keywords: siteKeywords,
    authors: [{ name: profile.name, url: profile.linkedin }],
    creator: profile.name,
    alternates: { canonical: "/" },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      title: siteTitle,
      description,
      url: "/",
      siteName: profile.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efeae1" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1915" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = personJsonLd();
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${display.variable} ${plex.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full">
        <a href="#content" className="skip-link" data-cursor="Skip the header">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <BackToTop />
        <SiteCursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
