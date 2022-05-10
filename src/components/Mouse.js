import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Mouse() {
  // mouse effect
  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
      });
    });
  });
  return (
    <div className="mouse">
      <div className="cursor"></div>
      <div className="shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="content">
        <h1>Her er en test af muse effekter</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quam animi dolores non
          explicabo voluptate dolore, rerum fugit obcaecati dignissimos tenetur facilis beatae
          numquam, veniam nam reprehenderit officiis molestias optio.
        </p>
      </div>
    </div>
  );
}
