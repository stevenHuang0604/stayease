import Features from "../homepages/FeaturesSection/Features";
import Footer from "../homepages/FooterSection/Footer";
import Hero from "../homepages/HeroSection/Hero";
import Navigation from "../homepages/NavigationSection/Navigation";
import Testimonials from "../homepages/TestimonialsSection/Testimonials";

function HomePage() {
  return (
    <div className="flex h-screen flex-col items-stretch">
      <Navigation />
      <div className="flex-grow overflow-auto">
        <Hero />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
