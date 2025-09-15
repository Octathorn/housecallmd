import Breadcrumbs from '../components/Breadcrumbs';

const patientBenefits = [
  {
    image: '/assets/11/Benefits-of-a-House-call.png',
    title: 'Benefits of a HouseCall Visit',
    description: 'We thrive on developing intimate clinician-patient relationships. At HouseCaIl MD clinician will see you in your home or facility to assess for safety, proper management of illness and medications. In addition, we will evaluate your surroundings for home safety and counseling you on high risk threats. Whether you are recently discharged from the hospital or Nursing Home or considering getting healthcare at home. We strive to meet your needs and want you to be able to gain your trust to depend on us.',
  },
  {
    image: '/assets/11/Services-Covered-Under-Medicare-Part-B.png',
    title: 'Services Covered Under Medicare Part B',
    description: 'Most HMO plans are accepted but keep in mind that HMO\'s require Prior Authorizations from your Primary Care Physician for services.'
  },
  {
    image: '/assets/11/Direct-Admit-To-the-Hospital-Of-Your-Choice.png',
    title: 'Avoid Unnecessary Hospitalization',
    description: 'Our staff is available 24/7 for urgent, non-life-threatening needs. HouseCall MD can assist you in avoiding long waits in the emergency room for non-emergent medical care. We have privileges at Huntington Memorial, Arcadia Methodist, and Citrus Valley. Additionally, we have associates available at Alhambra, San Gabriel, and all surrounding hospitals.'
  },
  {
    image: '/assets/11/Mobile-Laboratory-and-Imaging-Services.png',
    title: 'Mobile Laboratory and Imaging Services',
    description: 'Laboratory and Imaging needs provided at home with trusted contracted mobile services.'
  },
  {
    image: '/assets/11/Direct-Communication.png',
    title: 'Direct Communication',
    description: 'HouseCall MD has staff available to help you with all your questions and concerns.'
  },
  {
    image: '/assets/11/Medication-Management-and-Reduction.png',
    title: 'Medication Management and Reduction',
    description: 'The physician will routinely evaluate your medication list for accuracy and reduce unnecessary medications.'
  },
  {
    image: '/assets/11/Our-Values3.png',
    title: 'Assist In Making Informed Decisions',
    description: 'HouseCaII MD can clarify complicated issues such as insurance plans, advanced directives and the diseases healing process.'
  },
  {
    image: '/assets/11/Our-Values.png',
    title: 'Keep Up-To-Date with Advance in Healthcare',
    description: 'HouseCaII MD providers and Dr. Jarchi provide informative lectures on healthcare topics important to you and the senior community such as heart disease, diabetes, shingles and many more.'
  },
  {
    image: '/assets/11/Our-Values2.png',
    title: 'Nurse and Therapy Treatments Arrangements',
    description: 'Arrange for in home physical therapy, speech therapy & nurse visits at your convenience.'
  }
];

export default function PatientBenefits() {
  return (
    <>
    <div className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Patient Benefits" />
      </div>

      {/* Full-width gray section */}
      <div className="w-full bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#17224D]">Patient Benefits</h1>
          </div>
        </div>
      </div>
    </div>

    {/* Patient Benefits Grid */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {patientBenefits.map((benefit, index) => (
           <div key={index} className="flex flex-col items-center justify-center p-4 sm:p-6 h-full">
             <img 
               src={benefit.image} 
               alt={benefit.title} 
               className="w-full h-40 sm:h-48 object-cover mb-3 sm:mb-4"
             />
             <h2 className="text-lg sm:text-xl font-bold text-[#17224D] text-center mb-2 sm:mb-3">{benefit.title}</h2>
             <p className="text-xs sm:text-sm text-[#17224D] text-justify leading-relaxed flex-grow">{benefit.description}</p>
           </div>
         ))}
      </div>
    </div>
    
    </>
  );
}
