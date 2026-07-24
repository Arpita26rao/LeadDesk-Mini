import Navbar from "../componets/common/Navbar";
import Hero from "../componets/home/Hero";
import Services from "../componets/home/Services";
import LeadForm from "../componets/home/LeadForm";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <LeadForm/>
    </>
  );
}

export default Home;