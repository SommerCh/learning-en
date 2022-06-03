// By Sommer

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img50 from '../assets/imgs/bord50-min.jpg'
import Img70 from '../assets/imgs/bord70-min.jpg'
import Img20 from '../assets/imgs/bord20-min.jpg'


export default function Section3() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".cimg1",
      {
        y: -100,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".s3",
          start: "top 20%",
          end: "bottom center",
        },
      }
    );
    gsap.fromTo(
      ".cimg2",
      {
        y: -150,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".s3",
          start: "top 20%",
          end: "bottom center",
        },
      }
    );
    gsap.fromTo(
      ".cimg3",
      {
        y: -200,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".s3",
          start: "top 20%",
          end: "bottom center",
        },
      }
    );

  }, []);

  return (
    <div className="section s3">
      <div className="flex-row">
        <div className="imgdiv">
          <h2>1950</h2>
          <img className="compare cimg1" src={Img50} alt="img" />
        </div>

        <div className="imgdiv">
          <h2>1970</h2>
          <img className="compare cimg2" src={Img70} alt="img" />
        </div>

        <div className="imgdiv">
          <h2>2020</h2>
          <img className="compare cimg3" src={Img20} alt="img" />
        </div>
      </div>
    </div>
  );
}
