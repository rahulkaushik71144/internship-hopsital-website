import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Specialities from "../components/Specialities";
import Hospitals from "../components/Hospitals";
import Footer from "../components/Footer";
import HealthBlogs from "../components/HealthBlogs";
import StickyPopup from "../components/StickyPopup";

const Homepage = () => {
  useEffect(() => {
    document.title = "Home - Ujala Cygnus";
  }, []);

  return (
    <div className="overflow-hidden">
      <StickyPopup/>
      <Header />
      <Hero />
      <Specialities />
      <Hospitals />
      <HealthBlogs />
      <Footer />
    </div>
  );
};

export default Homepage;
