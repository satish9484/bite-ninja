import BecomeNinjaSection from "./components/BecomeNinjaSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RestaurantOwnerSection from "./components/RestaurantOwnerSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <RestaurantOwnerSection />
      <BecomeNinjaSection />
      <ServicesSection />
      {/* <YCombinatorSection /> */}
      {/* <BrandsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
