import Script from 'next/script';
import AboutClient from './AboutClient';

// Page metadata
export const metadata = {
  title: "About HouseCall MD - Our Mission & Values",
  description: "Learn about HouseCall MD's mission to provide personalized, compassionate mobile healthcare. Discover our values of empathy, innovation, and patient-centered care in Los Angeles.",
  keywords: ["about HouseCall MD", "mobile healthcare mission", "geriatric care values", "home healthcare philosophy", "Los Angeles mobile doctor"],
  openGraph: {
    title: "About HouseCall MD - Our Mission & Values",
    description: "Learn about HouseCall MD's mission to provide personalized, compassionate mobile healthcare. Discover our values of empathy, innovation, and patient-centered care in Los Angeles.",
    url: "https://housecallmd.com/about",
  },
};

export default function About() {

  // Organization schema for About page
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "HouseCall MD",
    "url": "https://housecallmd.com",
    "logo": "https://housecallmd.com/assets/11/hosuecall-md-logo.png",
    "description": "Mobile primary care and consulting services for geriatrics and disabled individuals",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1494 S. Robertson Blvd, Suite 200",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90035",
      "addressCountry": "US"
    },
    "telephone": "626-765-4321",
    "email": "info@admin.local",
    "sameAs": [
      "https://facebook.com/housecallmd",
      "https://instagram.com/housecallmd",
      "https://linkedin.com/company/housecallmd"
    ],
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
    ],
    "serviceType": [
      "Mobile Primary Care",
      "Geriatric Care",
      "Home Healthcare",
      "Medical Consultation"
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      
      <AboutClient />
    </>
  );
}
