import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../home/components/FAQ';
import Script from 'next/script';

// Page metadata
export const metadata = {
  title: "Frequently Asked Questions - HouseCall MD",
  description: "Find answers to commonly asked questions about HouseCall MD's mobile healthcare services, insurance coverage, appointment scheduling, and emergency care in Los Angeles.",
  keywords: ["FAQ", "frequently asked questions", "mobile healthcare FAQ", "house call doctor questions", "Medicare coverage", "appointment scheduling", "emergency care"],
  openGraph: {
    title: "Frequently Asked Questions - HouseCall MD",
    description: "Find answers to commonly asked questions about HouseCall MD's mobile healthcare services, insurance coverage, appointment scheduling, and emergency care in Los Angeles.",
    url: "https://housecallmd.com/faqs",
  },
};

export default function FAQs() {
  // FAQ Schema based on live website content
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are you affiliated with a hospital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are not affiliated directly with hospitals. However, we do have covering physicians at many local hospitals, who follow and update us during the hospital stay."
        }
      },
      {
        "@type": "Question",
        "name": "My mom is dehydrated and needs IV fluids, can you help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we can arrange for IV therapy in the convenience of your residence."
        }
      },
      {
        "@type": "Question",
        "name": "When Should I consider calling 911 rather than HouseCall MD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Please call 911 if you are seeking immediate treatment for serious or life threatening conditions, such as but not limited to: Chest pain, Neurological symptoms suggesting a stroke, Difficulty breathing, Loss of consciousness, Sudden bleeding, Choking or gagging, Head injury, Patients who want to hurt themselves (suicidality), Patients who want to hurt others (homicidality), Acute psychotic episode, Acute Seizures."
        }
      },
      {
        "@type": "Question",
        "name": "Am I eligible for physician home care?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For seniors and patients facing health challenges, trip to the doctor can be difficult-- but your care is too important to delay. You may qualify for personalized care delivered right to your home. Call us today to see how we can help--because your health, comfort, and well-being come first."
        }
      },
      {
        "@type": "Question",
        "name": "What insurances do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept Medicare Part B and most Private Insurances. We directly bill Medicare and all supplemental insurance plans. We only bill the patient if there's an unpaid balance which is not covered by Medicare or the supplemental insurer. We also participate with all Medicare Advantage Plans. Some fees may apply."
        }
      },
      {
        "@type": "Question",
        "name": "Do you take Private Pay patients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes we do. We accept payment by credit card, personal check, or money order."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can a provider visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on your medical needs and location, we can arrange from same day to up to one week appointment. Some fees may apply."
        }
      },
      {
        "@type": "Question",
        "name": "How Often does the provider come out to visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each patient is seen as medically necessary based on your physician's assessment and plan of care. Depending on your medical needs, visit frequency will vary. If you are sick and are experiencing issues, your provider will see you more often. Whether you need us the next day or in a month, we will be there. When needed, we can usually get to your home for urgent needs within 24-48 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What if I need an urgent appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our services prevent many urgent needs by seeing patients on an appropriate follow-up basis. When needed, we can usually get to your home for urgent, non-life-threatening situations within 24–48 hours. Certain restrictions and fees may apply."
        }
      },
      {
        "@type": "Question",
        "name": "What if I have to go to the hospital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your condition is life-threatening, please call 911 immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Will I have the same provider every visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We make every effort to send the same provider to you for each visit."
        }
      },
      {
        "@type": "Question",
        "name": "Can I still see my regular doctor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can keep your primary doctor or establish a HouseCall MD provider as your new primary physician."
        }
      },
      {
        "@type": "Question",
        "name": "What do I do if I need labs, X-rays, or diagnostic tests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HouseCall MD will arrange Labs, X-Rays, Physical Therapy, Speech Therapy, and Nurse Visits at your comfort."
        }
      },
      {
        "@type": "Question",
        "name": "Do you come out for emergency visits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we do not provide emergency medical services! If it is a life-threatening emergency, please call 911 or go to the emergency rooms."
        }
      },
      {
        "@type": "Question",
        "name": "How do I arrange to be treated in my home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply call our office (626) 765-4321 to arrange for a medical visit to be scheduled at your convenience. You do not need any referral to use our services."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      <div className="pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs currentPage="FAQs" />
        </div>
        
        {/* Full-width gray section */}
        <div className="w-full bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#17224D]">FAQs</h1>
            </div>
          </div>
        </div>
      </div>

      <FAQ />
    </>
  );
}
