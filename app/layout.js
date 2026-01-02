import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.tangocabssrilanka.com"),

  title: "Tango Cabs Sri Lanka | Tangalle Taxi & Sri Lanka Tour Agency",

  description:
    "Tango Cabs Sri Lanka is a trusted taxi and tour agency in Tangalle offering airport transfers, private drivers, sightseeing tours, and islandwide travel services across Sri Lanka.",

  keywords: [
    "Tango Cabs Sri Lanka",
    "Tango Cabs",
    "Tangalle taxi service",
    "Tangalle tour agency",
    "Sri Lanka taxi service",
    "Sri Lanka tour agency",
    "Sri Lanka airport transfer",
    "Colombo airport taxi",
    "Colombo airport transfer Sri Lanka",
    "Bandaranaike airport taxi",
    "Bandaranaike airport transfer",
    "CMB airport transfer Sri Lanka",
    "Airport pickup Sri Lanka",
    "Airport drop Sri Lanka",
    "Sri Lanka airport pickup service",
    "Sri Lanka airport drop service",
    "Private airport transfer Sri Lanka",
    "Taxi from Colombo airport",
    "Colombo airport to Tangalle taxi",
    "Tangalle to Colombo airport taxi",
    "Colombo airport to Tangalle transfer",
    "Airport taxi Tangalle",
    "Tangalle airport transfer",
    "Sri Lanka airport cab service",
    "Private driver Sri Lanka",
    "Cab service Sri Lanka",
    "Taxi service in Tangalle",
    "Chauffeur service Sri Lanka",
    "Tourist taxi Sri Lanka",
    "Affordable taxi Sri Lanka",
    "Best taxi service in Tangalle",
    "Reliable taxi Sri Lanka",
    "Sri Lanka travel agency",
    "Sri Lanka tours",
    "Sri Lanka round tour",
    "Sri Lanka sightseeing tours",
    "Sri Lanka private tours",
    "Travel Sri Lanka",
    "Visit Sri Lanka",
    "Southern Province Sri Lanka",
    "Tangalle beach tours",
    "Tangalle to Colombo taxi",
    "Tangalle to Galle taxi",
  ],
  authors: [{ name: "Tango Cabs Sri Lanka" }],
  creator: "Tango Cabs Sri Lanka",
  publisher: "Tango Cabs Sri Lanka",

  robots: "index, follow",

  alternates: {
    canonical: "https://www.tangocabssrilanka.com",
  },

  openGraph: {
    title: "Tango Cabs Sri Lanka | Taxi & Tours in Tangalle",
    description:
      "Reliable taxi and tour services in Tangalle. Airport transfers, private drivers, and Sri Lanka tours at affordable prices.",
    url: "https://www.tangocabssrilanka.com",
    siteName: "Tango Cabs Sri Lanka",
    images: [
      {
        url: "https://www.tangocabssrilanka.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Tango Cabs Sri Lanka – Tangalle Taxi & Tours",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tango Cabs Sri Lanka | Tangalle Taxi & Tours",
    description:
      "Book trusted taxi services, airport transfers, and private tours from Tangalle across Sri Lanka.",
    images: ["https://www.tangocabssrilanka.com/logo.jpeg"],
  },

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          className="rounded-full"
          href="https://www.tangocabssrilanka.com/logo.jpeg"
        />

        {/* Theme Color */}
        <meta name="theme-color" content="#0f766e" />

        {/* Mobile Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Tango Cabs Sri Lanka",
              image: "https://www.tangocabssrilanka.com/logo.jpeg",
              url: "https://www.tangocabssrilanka.com",
              telephone: "+94777266518",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tangalle",
                addressRegion: "Southern Province",
                addressCountry: "LK",
              },
              description:
                "Tango Cabs Sri Lanka is a professional taxi and travel agency in Tangalle providing airport transfers, private drivers, and Sri Lanka tours.",
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
              ],
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
