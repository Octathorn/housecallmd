import Hero from './components/Hero';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import PatientReviews from './components/PatientReviews';
import FAQ from './components/FAQ';
import HaveQuestion from './components/HaveQuestion';
import PartnersAndSocial from './components/PartnersAndSocial';
import Script from 'next/script';

// Page metadata
export const metadata = {
  title: "HouseCall MD - Mobile Primary Care & Geriatric Services | Los Angeles",
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
  openGraph: {
    title: "HouseCall MD - Mobile Primary Care & Geriatric Services | Los Angeles",
    description: "HouseCall MD provides mobile primary care and consulting services for geriatrics and disabled individuals in Greater Los Angeles, CA. 24/7 home healthcare with same-day appointments available.",
    url: "https://housecallmd.com",
  },
};

export default function Home() {
  // Reviews Schema based on live website testimonials
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "HouseCall MD",
    "url": "https://housecallmd.com",
    "logo": "https://housecallmd.com/assets/11/hosuecall-md-logo.png",
    "description": "Mobile primary care and consulting services for geriatrics and disabled individuals in Greater Los Angeles, CA",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1494 S. Robertson Blvd, Suite 200",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90035",
      "addressCountry": "US"
    },
    "telephone": "626-765-4321",
    "email": "info@housecallmd.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "8",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Talia Li'el"
        },
        "reviewBody": "I have been using HouseCall MD for 1.5 years now for one of my clients. HouseCall MD is a fantastic way to receive primary care at home. Dr. Jarchi is a wonderful and patient physician.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Celia Reynoso"
        },
        "reviewBody": "We have are up and downs but over all this office is great! I hear a lot of terrible stories about doctor's office especially, mobile physicians. This office I highly recommend to anyone!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Kevin W"
        },
        "reviewBody": "Housecall MD helped my beloved grandmother at a time when she needed care the most.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Drea B."
        },
        "reviewBody": "This group of clinicians are FANTASTIC. Quick responses when something is needed for patients, everything done in a timely matter. I recommend them to anyone seeking quality care.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Katherine Simms"
        },
        "reviewBody": "Dr. Jarchi and Housecall MD has been providing mobile services for more than a decade! He has great bedside manners and a geriatric physician who really cares about his seniors. Samantha who's the office manager is easy to talk to and helps facilitate with what I need. I highly recommend Dr. Jarchi and Housecall MD!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ivette M."
        },
        "reviewBody": "During this difficult time, I received a great services from all professionals an staff. Excellence was demonstrated. Dr Jarchi was an excellent Doctor for my husband, Thank you very much.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Emilia L."
        },
        "reviewBody": "Doctor Jarchi was attentive to everything that was being communicated to him regarding my 90 year old mother's needs. I mother appreciated his gentle and kind demeanor. Thank you",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "geoRadius": "50000"
    },
    "areaServed": [
      "Santa Monica Mountains",
      "San Fernando Valley", 
      "The West-side",
      "Central LA",
      "South LA",
      "The Verdugos",
      "The San Gabriel Valley",
      "Southeast LA",
      "Northeast LA",
      "The East-side",
      "South Bay",
      "The Harbor",
      "The Pomona Valley",
      "Rancho Cucamonga"
    ]
  };

  return (
    <>
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsSchema)
        }}
      />
      
      <Hero />
      <Services />
      <CallToAction />
      <PatientReviews />
      <FAQ />
      <HaveQuestion />
      <PartnersAndSocial />
    </>
  );
}
