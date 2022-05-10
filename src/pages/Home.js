import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImagesOutput from "../components/ImageGrid/ImagesOutput";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="home">
      <h1>Home</h1>
      <ImagesOutput />

      <div className="box2"></div>
      <div className="box3"></div>
    </div>
  );
}
