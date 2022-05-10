import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Line() {
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.to(".line", {
      scale: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "bottom 0%",
        scrub: true,
        markers: true,
      },
    });
  }, []);
  return (
    <div>
      <p>
        <span ref={lineRef} className="line" />
      </p>
    </div>
  );
}
