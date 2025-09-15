import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../home/components/FAQ';

export default function FAQs() {
  return (
    <>
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
