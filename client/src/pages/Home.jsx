import Navbar from "../componets/common/Navbar";
import Hero from "../componets/home/Hero";
import Services from "../componets/home/Services";
import LeadForm from "../componets/home/LeadForm";
import Footer from "../componets/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <LeadForm/>
      <Footer />
    </>
  );
}

export default Home;