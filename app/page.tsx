import { Hero } from "./components/ui/Hero";
import { Services } from "./components/ui/Services";
import { Portfolio } from "./components/ui/Portfolio";
import { About } from "./components/ui/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <About />
    </div>
  );
}
