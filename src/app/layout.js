import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "HouseCall MD - Mobile Primary Care & Geriatric Services | Los Angeles",
    template: "%s | HouseCall MD"
  },
  description: "HouseCall MD provides mobile primary care and consulting services for geriatrics and disabled individuals in Greater Los Angeles, CA. 24/7 home healthcare with same-day appointments available.",
  keywords: [
    "mobile primary care", 
    "geriatric care", 
    "home healthcare", 
    "house call doctor", 
    "Los Angeles", 
    "disabled care", 
    "elderly care", 
    "home medical services",
    "post discharge management",
    "internal medicine",
    "hospital at home",
    "palliative care",
    "hospice care",
    "home diagnostics",
    "capacity assessment",
    "consulting physicians",
    "Medicare Part B",
    "mobile physician",
    "home visit doctor",
    "geriatric physician"
  ],
  authors: [{ name: "HouseCall MD" }],
  creator: "HouseCall MD",
  publisher: "HouseCall MD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://housecallmd.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://housecallmd.com',
    siteName: 'HouseCall MD',
    title: 'HouseCall MD - Mobile Primary Care & Geriatric Services | Los Angeles',
    description: 'HouseCall MD provides mobile primary care and consulting services for geriatrics and disabled individuals in Greater Los Angeles, CA. 24/7 home healthcare with same-day appointments available.',
    images: [
      {
        url: '/assets/11/hosuecall-md-logo.png',
        width: 1200,
        height: 630,
        alt: 'HouseCall MD - Mobile Healthcare Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HouseCall MD - Mobile Primary Care & Geriatric Services | Los Angeles',
    description: 'HouseCall MD provides mobile primary care and consulting services for geriatrics and disabled individuals in Greater Los Angeles, CA. 24/7 home healthcare with same-day appointments available.',
    images: ['/assets/11/hosuecall-md-logo.png'],
    creator: '@housecallmd',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/11/hosuecall-md-logo.png" />
        <meta name="theme-color" content="#10B981" />
        <meta name="msapplication-TileColor" content="#10B981" />
        <meta name="contact" content="626-765-4321" />
        <meta name="address" content="1494 S. Robertson Blvd, Suite 200, Los Angeles, CA 90035" />
        <meta name="email" content="info@housecallmd.com" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles" />
        <meta name="geo.position" content="34.0522;-118.2437" />
        <meta name="ICBM" content="34.0522, -118.2437" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
