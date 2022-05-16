import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Klasse1 from "../assets/klasse.jpg";
import Klasse2 from "../assets/klasse2.jpg";
import Klasse3 from "../assets/klasse3.jpg";


export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="home">
      <h1>Fremtidens møbler til nutidens børn</h1>

      <div className="flex">

     
        <div className="classroom">
        <h2>1950</h2>
          <img src={Klasse3} alt="classroom" />
        </div>

        <div className="classroom">
        <h2>1970</h2>
          <img src={Klasse1} alt="classroom" />
        </div>

        <div className="classroom">
          <h2>2020</h2>
          <img src={Klasse2} alt="classroom" />
        </div>

      </div>
    </div>
  );
}
