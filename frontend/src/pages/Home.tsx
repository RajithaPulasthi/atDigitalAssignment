import NavBar from "../shared/components/molecules/NavBar";
import Footer from "../shared/components/molecules/Footer";
import HeroSection from "../shared/components/molecules/HeroSection";
import BannerSection from "../shared/components/molecules/BannerSection";
import FAQSection from "../shared/components/molecules/FAQSection";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <BannerSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
