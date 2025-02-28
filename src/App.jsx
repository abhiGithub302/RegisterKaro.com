import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import VideoIntroduction from './components/VideoIntroduction';
import OurClients from './components/OurClients';
import OurBlogs from './components/OurBlogs';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import MobileAppShowcase from './components/MobileAppShowcase';
import Hero from './components/Hero';

import { SpeedInsights } from "@vercel/speed-insights/react"
import Sponser from './components/Sponser';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <SpeedInsights/> 
      <Navbar />
      
      {/* Hero Section */}
      <Hero/>
      <Sponser/>
      <Services />
      <About/>
      <WhyChoose/>
      <VideoIntroduction/>
      <OurClients/>
      <OurBlogs/>
      <TestimonialsSection/>
      <FAQSection/>
      <MobileAppShowcase/>
      <Footer />
      
    </div>
  );
}

export default App;