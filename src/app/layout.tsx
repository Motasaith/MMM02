import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Newsreader } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { org } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mmm.org.pk"),
  title: {
    default: `${org.name} | Free healthcare and relief in Pakistan and Gaza`,
    template: `%s | ${org.name}`,
  },
  description:
    "Muslim Medical Mission is a volunteer network of doctors, paramedics and students running free medical camps, disaster relief, clean water and food distribution across Pakistan and into Gaza.",
  keywords: [
    "Muslim Medical Mission",
    "MMM Pakistan",
    "free medical camps Pakistan",
    "flood relief Pakistan",
    "Gaza relief",
    "Islamic charity healthcare",
  ],
  openGraph: {
    type: "website",
    siteName: org.name,
    title: `${org.name} | Free healthcare and relief in Pakistan and Gaza`,
    description:
      "Free medical camps, disaster response, clean water and food relief, delivered by Muslim healthcare professionals.",
    images: ["/media/disaster/disaster-11.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MMMPakOfficial",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a1730",
  width: "device-width",
  initialScale: 1,
};

const schema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: org.legalName,
  alternateName: org.short,
  url: "https://mmm.org.pk",
  logo: "https://mmm.org.pk/media/brand/logo.png",
  slogan: org.motto,
  email: org.email,
  telephone: org.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: org.address.line1,
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  sameAs: org.social.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${newsreader.variable}`}>
      <body className="overflow-x-hidden antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:font-display focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
