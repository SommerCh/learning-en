import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GsapElements() {
  const cirkelRef = useRef(null);
  const firkantRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".cirkel",
      {
        opacity: 0,
        scale: 0.5,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".box2",
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.to(".firkant", {
      x: 400,
      y: -20,
      rotation: 127,
      scrollTrigger: {
        trigger: ".box3",
        start: "top center",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div>
      <div ref={cirkelRef} className="cirkel"></div>
      <div ref={firkantRef} className="firkant"></div>
    </div>
  );
}
