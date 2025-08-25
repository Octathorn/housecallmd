'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import Script from 'next/script';

const Breadcrumbs = ({ currentPage }) => {
  // Create breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://housecallmd.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": currentPage,
        "item": `https://housecallmd.com/${currentPage.toLowerCase().replace(' ', '-')}`
      }
    ]
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <Link 
          href="/" 
          className="flex items-center hover:text-green-500 transition-colors duration-200"
        >
          <Home className="w-4 h-4 mr-1" />
          Home
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-[#17224D] font-medium">{currentPage}</span>
      </nav>
    </>
  );
};

export default Breadcrumbs;
