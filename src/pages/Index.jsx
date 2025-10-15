import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Services from "./Services";
import Map from "./Map";
import UserReviews from "./UserReview";
import "./Index.css";

const Index = () => {
  return (
    <div className="index-page">      
      <main>
        <Home />
        <AboutUs />
        <Services />
        <Map />
        <UserReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


