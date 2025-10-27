import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RecipeCollectionSection from "./components/RecipeCollectionSection";
import RestaurantOwnerSection from "./components/RestaurantOwnerSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <RestaurantOwnerSection />
      <RecipeCollectionSection />
      <ServicesSection />
      {/* <YCombinatorSection /> */}
      {/* <BrandsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
