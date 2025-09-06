import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Home />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
