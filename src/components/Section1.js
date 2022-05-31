import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img from "../assets/imgs/stole.jpg";
import LogoImg from "../assets/imgs/logo-no-white.png";
import Red from "../assets/imgs/red.png";
import Yellow from "../assets/imgs/yellow.png";
import Blue from "../assets/imgs/blue.png";
import Green from "../assets/imgs/green.png";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Section1() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl = gsap.timeline();

    tl = gsap.timeline({
      defaults: {
        duration: 1.0,
        ease: "expo.inOut",
      },
    });

    tl.to(".slide", { width: 0 }).to("#introduction", { height: 0 });
  }, []);

  const lineRef = useRef(null);

  useEffect(() => {
    gsap.to(".line-progres", {
      scale: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".s1",
        start: "top 10%",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  const logoRef = useRef(null);
  const redRef = useRef(null);
  const yellowRef = useRef(null);
  const blueRef = useRef(null);
  const greenRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".yellow",
      {
        opacity: 0,
        x: 100,
      },
      {
        delay: 1,
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".red",
      {
        opacity: 0,
        x: 100,
      },
      {
        delay: 1.5,
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".blue",
      {
        opacity: 0,
        x: 100,
      },
      {
        delay: 1.7,
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".green",
      {
        opacity: 0,
        x: 100,
      },
      {
        delay: 2,
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );

    //  decktop
    ScrollTrigger.matchMedia({
      "(min-width: 800px)": function () {
        // logo
        const action = gsap.set(".frontpage-logo", {
          position: "fixed",
          left: "0",
          top: "0",
          scale: "0.5",
          paused: true,
          zIndex: "200",
        });

        gsap.to(".frontpage-logo", {
          scrollTrigger: {
            start: "top top",
            onEnter: () => action.play(),
            onLeave: () => action.reverse(),
            onLeaveBack: () => action.reverse(),
            onEnterBack: () => action.reverse(),
          },
        });

        // contact
        const action2 = gsap.set(".contact", {
          position: "fixed",
          right: "20%",
          top: "2%",
          paused: true,
          zIndex: "500",
          scale: "0.8",
        });

        gsap.to(".contact", {
          scrollTrigger: {
            start: "top top",
            onEnter: () => action2.play(),
            onLeave: () => action2.reverse(),
            onLeaveBack: () => action2.reverse(),
            onEnterBack: () => action2.reverse(),
          },
        });

        // h1
        gsap.fromTo(
          ".content h1",
          {
            y: 0,
          },
          {
            yPercent: 170,
            ease: "none",
            scrollTrigger: {
              trigger: ".s1",
              start: "top 10%",
              end: "bottom center",
              scrub: 1,
            },
          }
        );
      },
    });

    // mobil
    ScrollTrigger.matchMedia({
      "(max-width: 800px)": function () {
        // logo
        const action = gsap.set(".frontpage-logo", {
          position: "fixed",
          left: "10%",
          bottom: "2%",
          scale: "1.5",
          zIndex: "500",
        });

        gsap.to(".frontpage-logo", {
          scrollTrigger: {
            start: "top top",
            onEnter: () => action.play(),
            onLeave: () => action.reverse(),
            onLeaveBack: () => action.reverse(),
            onEnterBack: () => action.reverse(),
          },
        });

        // contact
        const action2 = gsap.set(".contact", {
          position: "fixed",
          right: "10%",
          bottom: "-1%",
          paused: true,
          zIndex: "500",
          scale: "0.8",
        });

        gsap.to(".contact", {
          scrollTrigger: {
            start: "top top",
            onEnter: () => action2.play(),
            onLeave: () => action2.reverse(),
            onLeaveBack: () => action2.reverse(),
            onEnterBack: () => action2.reverse(),
          },
        });

        // h1

        gsap.fromTo(
          ".content h1",
          {
            y: 0,
          },
          {
            yPercent: 10,
            ease: "none",
          }
        );
      },
    });
  }, []);

  return (
    <div className="section s1">
      <div id="introduction">
        <div className="slide"></div>
        <div className="image-container">
          <img className="banner-img" src={Img} alt="banner" />
        </div>
      </div>

      <div className="content">
        <h1 ref={h1Ref}>
          Fremtidens møbler <br />
          <span> til nutidens børn</span>
        </h1>
      </div>
      <span ref={lineRef} className="line-progres" />

      <div className="inner-content flex-row">
        <div ref={logoRef} className="frontpage-logo">
          <div className="logowrapper">
            <div className="logo">
              <img src={LogoImg} alt="logo" />
            </div>
            <div className="logoduts">
              <img ref={redRef} className="dut red" src={Red} alt="logo" />
              <img ref={yellowRef} className="dut yellow" src={Yellow} alt="logo" />
              <img ref={blueRef} className="dut blue" src={Blue} alt="logo" />
              <img ref={greenRef} className="dut green" src={Green} alt="logo" />
            </div>
          </div>
        </div>

        <div className="contact">
          <p>+45 2939 8272</p>
          <p>lars@envfl.com</p>
          <div className="icons">
            <FiFacebook />
            <FiInstagram />
            <FiLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
