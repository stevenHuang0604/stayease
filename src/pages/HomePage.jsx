import Features from '../homepages/FeaturesSection/Features';
import Footer from '../homepages/FooterSection/Footer';
import Hero from '../homepages/HeroSection/Hero';
import Navigation from '../homepages/NavigationSection/Navigation';
import Testimonials from '../homepages/TestimonialsSection/Testimonials';

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}

export default HomePage;
