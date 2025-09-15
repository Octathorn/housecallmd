'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const HaveQuestion = () => {
  return (
    <section className="relative w-full pt-10 lg:pt-10">
      {/* Background Image with Grayed/Tinted Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/assets/11/Header-main-image-01.png')`,
          }}
        >
          {/* Additional overlay for better text readability */}
          <div className="w-full h-full bg-gradient-to-r from-blue-900/30 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Content Box Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-5">
          {/* Main Content - Centered */}
          <div className="text-white space-y-6 max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
                Have a Question or Need Help?
              </h1>
              <p className="text-base sm:text-lg text-white max-w-3xl leading-relaxed">
              Feel free to get in touch with us at any time, and we'll be delighted to assist you. Whether you have inquiries about our services, need to schedule an appointment, or require support, HouseCall MD is here to meet your healthcare needs.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pb-4">
              <Button
                href="#"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />}
              >
                Call or Text: 626-765-4321
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveQuestion;
