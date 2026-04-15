import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Clients } from "../components/Clients";
import { Industries } from "../components/Industries";
import { Process } from "../components/Process";
import { Testimonials } from "../components/Testimonials";
import { WhyChoose } from "../components/WhyChoose";
function Home() {
  return <>
      <Hero />
      <Services />
      <Clients />
      <Industries />
      <Process />
      <Testimonials />
      <WhyChoose />
    </>;
}
export {
  Home
};
