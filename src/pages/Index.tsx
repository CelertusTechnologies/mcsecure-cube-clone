import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Certifications } from "@/components/Certifications";
import { ProcessConsulting } from "@/components/ProcessConsulting";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Certifications />
        <ProcessConsulting />
      </main>
      <Footer />
    </div>
  );
};

export default Index;