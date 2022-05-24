import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiChevronDown } from "react-icons/fi";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="home">
      <Section1 />

      <div className="headlines">
        <h2>Undviklingen i folkeskolen</h2>
        <FiChevronDown />
      </div>
      <Section2 />

      <div className="headlines">
        <h2>Udviklingen gennem 70 år</h2>
        <FiChevronDown />
      </div>

      <Section3 />
      <div className="headlines">
        <h2>Hvorfor er det vigtigt?</h2>
        <FiChevronDown />
      </div>

      <Section4 />

      <div className="headlines">
        <h2>Læringsmiljø & arbejdsmiljø </h2>
        <FiChevronDown />
      </div>

      <Section5 />

      <div className="headlines">
        <h2>Udviklingen gennem 70 år</h2>
        <FiChevronDown />
      </div>

    </div>
  );
}
