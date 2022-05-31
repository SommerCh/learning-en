import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiChevronDown } from "react-icons/fi";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="home">
      <Section1 />

      <div className="headlines">
        <h2>Udviklingen i folkeskolen</h2>
        <FiChevronDown />
      </div>
      <Section2 />

      <p className="fakta">Undervisningen har udviklet sig enormt </p>

      <div className="headlines">
        <h2>Skolebordets udvikling i 70 år</h2>
        <FiChevronDown />
      </div>

      <Section3 />
      <div className="headlines">
        <h2>Skolerummet skal følge med</h2>
        <FiChevronDown />
      </div>

      <Section4 />

      <div className="headlines">
        <h2>Læringsmiljø & arbejdsmiljø </h2>
        <FiChevronDown />
      </div>

      <Section5 />

      <div className="headlines">
        <h2>Kontakt</h2>
        <FiChevronDown />
      </div>
      <Section6 />
    </div>
  );
}
