import Breadcrumbs from "../components/Breadcrumbs";
import { MapPin, Mail, Clock, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <>
    <div className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Contact" />
      </div>
      
      {/* Full-width gray section */}
      <div className="w-full bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#17224D]">Contact</h1>
          </div>
        </div>
      </div>

        {/* Get in Touch Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left side - Content */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-base sm:text-lg font-semibold text-green-600 uppercase tracking-wide">
                GET IN TOUCH
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17224D] leading-tight">
                Get in Touch with HouseCall MD
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Let us help you take the first step towards a healthier and
                happier life. Reach out to us today to schedule a visit, ask
                questions, or share your thoughts. We're here to listen, assist,
                and provide the personalized care you deserve.
              </p>
              <div className="w-16 h-1 bg-green-600"></div>
            </div>

            {/* Right side - Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Location Card */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-bold text-[#17224D] mb-2">
                    Location
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    1494 S. Robertson Blvd, Suite 200, Los Angeles, CA 90035
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-bold text-[#17224D] mb-2">
                    Email Us
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm">info@housecallmd.com</p>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-bold text-[#17224D] mb-2">
                    Operating Hours
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm">Open 24 Hours (Daily)</p>
                </div>
              </div>

              {/* Call Us Card */}
              <div className="bg-[#0072BC] rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Call Us</h4>
                  <p className="text-white text-xs sm:text-sm">626-765-4321</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

                           {/* Embedded Map - Full Width */}
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.672149300978!2d-118.38374379999999!3d34.0522801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b99ee62f5527%3A0x742272b459086db4!2sHouseCall%20MD!5e0!3m2!1sen!2s!4v1756119852896!5m2!1sen!2s"
            className="w-full h-64 md:h-80 lg:h-96"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HouseCall MD Location"
          />
        </div>

                          {/* Book an Appointment and Insurance Partners Section */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
             {/* Book an Appointment Section */}
             <div className="bg-white rounded-lg shadow-lg p-8">
               <h3 className="text-2xl font-bold text-[#17224D] mb-6">Book an Appointment</h3>
               <form className="space-y-4">
                 <input
                   type="text"
                   placeholder="Name"
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                 />
                 <input
                   type="email"
                   placeholder="Email"
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                 />
                 <input
                   type="tel"
                   placeholder="Phone"
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                 />
                 <div className="flex items-start space-x-3">
                   <input
                     type="checkbox"
                     id="consent"
                     className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                   />
                   <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                     By checking this box, you agree to receive text messages from HouseCall MD related to medical appointments and services at the phone number provided above. You may reply STOP to opt-out at any time. For assistance reply HELP. Message and data rates may apply. Message frequency may vary. Learn more on our Privacy Policy page.
                   </label>
                 </div>
                 <button
                   type="submit"
                   className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                 >
                   Submit
                 </button>
               </form>
             </div>

             {/* Insurance Partners Section */}
             <div className="pt-30">
               <div className="space-y-6">
                 <h3 className="text-2xl font-bold text-[#17224D] mb-4">Proudly Partnered with Leading Healthcare Providers</h3>
                 <p className="text-gray-700">
                   We accept most insurance plans. If you have specific questions regarding your coverage, please contact the office for more information.
                 </p>
                 
                                   {/* Insurance Logos Grid */}
                  <div className="space-y-6">
                    {/* First Row - 2x2 Grid */}
                    <div className="grid grid-cols-2 gap-6">
                      {/* Aetna */}
                      <div className="flex items-center justify-center">
                        <img
                          src="/assets/11/Aetna-Logo-700x394-1.png"
                          alt="Aetna"
                          className="h-12 object-contain"
                        />
                      </div>
                      
                      {/* Cigna */}
                      <div className="flex items-center justify-center">
                        <img
                          src="/assets/11/Cigna-Logo-500x281-1.png"
                          alt="Cigna"
                          className="h-12 object-contain"
                        />
                      </div>
                      
                      {/* Humana */}
                      <div className="flex items-center justify-center">
                        <img
                          src="/assets/11/Humana-logo-768x432-1.png"
                          alt="Humana"
                          className="h-12 object-contain"
                        />
                      </div>
                      
                      {/* United Healthcare */}
                      <div className="flex items-center justify-center">
                        <img
                          src="/assets/11/United-Healthcare-Logo-640x343-1.png"
                          alt="United Healthcare"
                          className="h-12 object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Second Row - Medicare Full Width */}
                    <div className="flex items-center justify-center">
                      <img
                        src="/assets/11/medicare-card.jpg"
                        alt="Medicare Health Insurance"
                        className="h-12 object-contain w-full"
                      />
                    </div>
                  </div>
               </div>
             </div>
           </div>
         </div>

        {/* Serving Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Headings */}
          <div className="text-center mb-12">
            <h2 className="text-lg font-semibold text-green-600 uppercase tracking-wide mb-2">
              SERVING
            </h2>
            <h3 className="text-4xl font-bold text-[#17224D] leading-tight">
              We are now serving
            </h3>
          </div>

          {/* Map and Service Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                         {/* Left side - Map */}
      <div>
               <img
                 src="/assets/11/Now-Serving.png"
                 alt="Service Areas Map"
                 className="w-full h-auto"
               />
             </div>

            {/* Right side - Service Areas List */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-[#17224D] mb-6">Service Areas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-3">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Santa Monica Mountains</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">San Fernando Valley</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">The West-side</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Central LA</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">South LA</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">The Verdugos</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">The San Gabriel Valley</span>
                    </li>
                  </ul>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Southeast LA</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Northeast LA</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">The East-side</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">South Bay</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">The Harbor</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">The Pomona Valley</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Rancho Cucamonga</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
                 </div>
         </div>

         {/* Social Media Section with Memphis Background */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="relative text-center py-16">
             {/* Memphis Background Image */}
             <div className="absolute inset-0 z-0 mx-auto max-w-4xl h-full">
               <img
                 src="/assets/11/Memphis_bg.png"
                 alt="Memphis background pattern"
                 className="w-full h-full object-contain"
               />
             </div>
             
             {/* Content */}
             <div className="relative z-10">
               <h3 className="text-sm font-semibold text-green-500 uppercase tracking-widest mb-2">
                 GET IN CONNECT
               </h3>
               <h2 className="text-3xl md:text-4xl font-bold text-[#17224D] mb-8">
                 Follow our Social Media
               </h2>
               
               {/* Social Media Icons */}
               <div className="flex justify-center space-x-6">
                 {/* Facebook */}
                 <a 
                   href="#" 
                   className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                   aria-label="Follow us on Facebook"
                 >
                   <Facebook className="w-6 h-6 text-white" />
                 </a>
                 
                 {/* Instagram */}
                 <a 
                   href="#" 
                   className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                   aria-label="Follow us on Instagram"
                 >
                   <Instagram className="w-6 h-6 text-white" />
                 </a>
                 
                 {/* LinkedIn */}
                 <a 
                   href="#" 
                   className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                   aria-label="Follow us on LinkedIn"
                 >
                   <Linkedin className="w-6 h-6 text-white" />
                 </a>
               </div>
             </div>
      </div>
    </div>
      </>
  );
}
