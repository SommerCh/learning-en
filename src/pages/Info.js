import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Kl1 from "../assets/kl1.jpg";
import Kl2 from "../assets/kl2.jpg";
import Kl3 from "../assets/kl3.jpg";
import Anno1950 from "../assets/1950.png";
import Anno1970 from "../assets/1970.png";
import Anno2000 from "../assets/2020.png";

export default function Info() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="info">

      <section className="section1">
        <div className="flex">
          <div className="classroom">
            <h2>1950</h2>
            <div className="text">
           Pædagogiske nøgleord: disciplin og udenadslære
            </div>
            <img src={Kl1} alt="classroom" />
          </div>

          <div className="classroom">
            <h2>1970</h2>
            <div className="text">
            Pædagogiske nøgleord: medbestemmelse og gruppearbejde
            </div>
            <img src={Kl2} alt="classroom" />
          </div>

          <div className="classroom">
            <h2>2020</h2>
            <div className="text">
            Pædagogiske nøgleord: undervisningsdifferentiering og inklusion
            </div>
            <img src={Kl3} alt="classroom" />
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="flex">
          <div className="classroom">
            <h2>1950</h2>
            <img src={Anno1950} alt="classroom" />
          </div>

          <div className="classroom">
            <h2>1970</h2>
            <img src={Anno1970} alt="classroom" />
          </div>

          <div className="classroom">
            <h2>2020</h2>
            <img src={Anno2000} alt="classroom" />
          </div>
        </div>
      </section>
    </div>
  );
}
