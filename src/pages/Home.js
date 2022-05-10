import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImagesGrid from "../components/ImagesGrid";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="home">
      <h1>Home</h1>
<ImagesGrid/>
      <div className="box2"></div>
      <div className="box3"></div>
    </div>
  );
}
