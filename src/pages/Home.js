import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Info from "./Info";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="home">
      <div className="page">
        <h1>Fremtidens møbler til nutidens børn</h1>
      </div>
      <Info />
    </div>
  );
}
