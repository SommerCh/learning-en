import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const open = document.querySelector(".burger");
    const close = document.querySelector(".close");
    const ul = document.querySelector("ul");

    let tl3 = gsap.timeline({ defaults: { duration: 1, ease: "expo.inOut" } });
    open.addEventListener("click", () => {
      if (tl3.reversed()) {
        tl3.play();
      } else {
        tl3
          .to("nav", { right: 0 })
          .to("nav", { height: "100vh" }, "-=.1")
          .to("nav ul li a", { opacity: 1, pointerEvents: "all", stagger: 0.2 }, "-=.8")
          .to(".close", { opacity: 1, pointerEvents: "all" }, "-=.8")
          .to("nav h2", { opacity: 1 }, "-=1");
      }
    });

    close.addEventListener("click", () => {
      tl3.reverse();
    });

    ul.addEventListener("click", () => {
      tl3.reverse();
    });
  }, []);

  return (
    <div className="navbarcontainer">
 
      <div className="burger">
        <div className="bars"></div>
      </div>
      <nav>
        <div className="close">
          <div></div>
        </div>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
                Produkter
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
