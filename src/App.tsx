import { B2B } from "./components/B2B";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Mentor } from "./components/Mentor";
import { Navbar } from "./components/Navbar";
import { Problem } from "./components/Problem";
import { Program } from "./components/Program";
import { ScrollProgress } from "./components/ScrollProgress";
import { Testimonials } from "./components/Testimonials";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

function App() {
  return (
    <div className="min-h-screen bg-(--color-ink)">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Program />
        <Mentor />
        <Testimonials />
        <B2B />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
