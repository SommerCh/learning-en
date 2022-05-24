import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Kl1950 from "../assets/kl1950.jpg";
import Kl1970 from "../assets/kl1970.jpg";
import Kl2020 from "../assets/kl2020.jpg";


export default function Section2() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const boxes = gsap.utils.toArray(".box");

    // autoAlpha er ligesom opacity nå nær at når den rammer 0 bliver den visabillity sat til hidden
    boxes.forEach((box, i) => {
      const move = gsap.fromTo(
        box,
        { autoAlpha: 0, y: 0 },
        { duration: 1, autoAlpha: 1, y: -100, delay: 1 }
      );
      ScrollTrigger.create({
        trigger: box,
        animation: move,
        toggleActions: "play none none none",
      });
    });

    const headlines = gsap.utils.toArray(".keywords");
    headlines.forEach((headline, i) => {
      const move = gsap.fromTo(
        headline,
        { autoAlpha: 0, y: 0 },
        { duration: 1, autoAlpha: 1, y: -100 }
      );
      ScrollTrigger.create({
        trigger: headline,
        animation: move,
        toggleActions: "play none none none",
      });
    });

    const annos = gsap.utils.toArray(".anno");

    annos.forEach((anno, i) => {
      const move = gsap.fromTo(
        anno,
        { autoAlpha: 0, y: 0, scale: 0.2 },
        { duration: 1, autoAlpha: 1, y: -100, scale: 1 }
      );
      ScrollTrigger.create({
        trigger: anno,
        animation: move,
        toggleActions: "play none none none",
      });
    });
  }, []);

  return (
    <div className="section s2">
      <div className="info">
        <h3 className="keywords">disciplin & udenadslære</h3>
        <h2 className="anno">1950 </h2>

        <div className="box">
          <div className="flex-row">
            <div className="left">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur,
                mollitia repellat in reprehenderit nobis. Consectetur voluptatibus porro molestias
                illo repellat quisquam rerum modi, at perferendis tempore distinctio praesentium
                esse?
              </p>
            </div>
            <div className="right">
              <img src={Kl1950} alt="klasse-1950" />
            </div>
          </div>
        </div>
      </div>

      <div className="info">
        <h3 className="keywords">gruppearbejde og medbestemmelse</h3>
        <h2 className="anno">1970 </h2>

        <div className="box">
          <div className="flex-row">
            <div className="left">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur,
                mollitia repellat in reprehenderit nobis. Consectetur voluptatibus porro molestias
                illo repellat quisquam rerum modi, at perferendis tempore distinctio praesentium
                esse?
              </p>
            </div>
            <div className="right">
              <img src={Kl1970} alt="klasse-1970" />
            </div>
          </div>
        </div>
      </div>

      <div className="info">
        <h3 className="keywords">undervisningsdifferentiering og inklusion</h3>
        <h2 className="anno">2020 </h2>

        <div className="box">
          <div className="flex-row">
            <div className="left">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur,
                mollitia repellat in reprehenderit nobis. Consectetur voluptatibus porro molestias
                illo repellat quisquam rerum modi, at perferendis tempore distinctio praesentium
                esse?
              </p>
            </div>
            <div className="right">
              <img src={Kl2020} alt="klasse-2020" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
