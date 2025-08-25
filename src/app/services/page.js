import Breadcrumbs from '../components/Breadcrumbs';
import Script from 'next/script';

// Page metadata
export const metadata = {
  title: "Services - HouseCall MD Mobile Healthcare | Los Angeles",
  description: "HouseCall MD provides comprehensive mobile healthcare services including post discharge management, geriatric care, primary care, internal medicine, hospital at home, and palliative care in Los Angeles.",
  keywords: ["mobile healthcare services", "post discharge management", "geriatric care", "primary care", "internal medicine", "hospital at home", "palliative care", "hospice care", "home diagnostics", "capacity assessment"],
  openGraph: {
    title: "Services - HouseCall MD Mobile Healthcare | Los Angeles",
    description: "HouseCall MD provides comprehensive mobile healthcare services including post discharge management, geriatric care, primary care, internal medicine, hospital at home, and palliative care in Los Angeles.",
    url: "https://housecallmd.com/services",
  },
};

const services = [
  {
    title: "POST DISCHARGE MANAGEMENT",
    description: "Ensuring a smooth transition from hospital to home with personalized care and follow-up support.",
    icon: "🏥",
    features: [
      "Personalized care plans",
      "Follow-up support",
      "Medication management",
      "Home safety assessment",
      "Family education"
    ]
  },
  {
    title: "GERIATRIC CARE",
    description: "Specialized medical services focusing on the unique needs of elderly patients for an improved quality of life.",
    icon: "👴",
    features: [
      "Age-specific care",
      "Chronic disease management",
      "Fall prevention",
      "Memory care support",
      "Family consultation"
    ]
  },
  {
    title: "PRIMARY CARE",
    description: "Comprehensive health assessments and treatments tailored to meet individual patient needs at home.",
    icon: "🏠",
    features: [
      "Health assessments",
      "Preventive care",
      "Chronic disease management",
      "Acute illness treatment",
      "Wellness exams"
    ]
  },
  {
    title: "INTERNAL MEDICINE",
    description: "Expert diagnosis and treatment of chronic and complex medical conditions for adult patients.",
    icon: "🩺",
    features: [
      "Complex condition management",
      "Diagnostic testing",
      "Treatment planning",
      "Specialist coordination",
      "Long-term care"
    ]
  },
  {
    title: "HOSPITAL AT HOME",
    description: "Delivering hospital-level care in the comfort and safety of the patient's home.",
    icon: "🏡",
    features: [
      "Hospital-level monitoring",
      "IV therapy",
      "Advanced treatments",
      "24/7 care coordination",
      "Family involvement"
    ]
  },
  {
    title: "PALLIATIVE & HOSPICE CARE",
    description: "Providing compassionate end-of-life care focused on comfort, dignity, and symptom relief.",
    icon: "❤️",
    features: [
      "Pain management",
      "Symptom relief",
      "Emotional support",
      "Family counseling",
      "Dignity-focused care"
    ]
  },
  {
    title: "HOME DIAGNOSTICS & THERAPY",
    description: "Offering in-home diagnostic testing and therapeutic services for convenience and timely care.",
    icon: "🔬",
    features: [
      "Lab testing",
      "Imaging services",
      "Physical therapy",
      "Speech therapy",
      "Occupational therapy"
    ]
  },
  {
    title: "CAPACITY ASSESSMENT",
    description: "Conducting evaluations to determine a patient's ability to make informed decisions about their care.",
    icon: "🧠",
    features: [
      "Cognitive evaluation",
      "Decision-making assessment",
      "Legal documentation",
      "Family consultation",
      "Care planning"
    ]
  },
  {
    title: "CONSULTING PHYSICIANS",
    description: "Acting as an extension of your primary care provider, we offer consulting services to ensure your safety and comfort at home.",
    icon: "👨‍⚕️",
    features: [
      "Specialist consultation",
      "Second opinions",
      "Treatment coordination",
      "Care plan review",
      "Ongoing support"
    ]
  }
];

export default function Services() {
  // Service Schema for Services page
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "HouseCall MD Mobile Healthcare Services",
    "description": "Comprehensive mobile healthcare services for geriatrics and disabled individuals in Greater Los Angeles, CA",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "MedicalOrganization",
          "name": "HouseCall MD"
        },
        "areaServed": {
          "@type": "City",
          "name": "Los Angeles"
        }
      }
    }))
  };

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema)
        }}
      />
      
      <div className="pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs currentPage="Services" />
        </div>

        {/* Full-width gray section */}
        <div className="w-full bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#17224D]">Services</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Services Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17224D] mb-4">
            Services We Provide
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide high-quality, personalized mobile healthcare services, delivering exceptional care to patients in the comfort of their homes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#17224D] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-[#17224D] mb-4">
            Ready to Experience Mobile Healthcare?
          </h3>
          <p className="text-gray-700 mb-6">
            Contact us today to learn more about our services and schedule your first appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:626-765-4321"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Call Now: 626-765-4321
            </a>
            <a
              href="/contact"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
