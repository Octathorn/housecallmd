import Hero from './components/Hero';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import PatientReviews from './components/PatientReviews';
import FAQ from './components/FAQ';
import HaveQuestion from './components/HaveQuestion';
import PartnersAndSocial from './components/PartnersAndSocial';

export default function Home() {
  return (
    <>
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
