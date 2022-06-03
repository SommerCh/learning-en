// By Sommer

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LogoImg from "../assets/logo-no-white.png";
import Red from "../assets/red.png";
import Yellow from "../assets/yellow.png";
import Blue from "../assets/blue.png";
import Green from "../assets/green.png";

export default function Logo() {
  const redRef = useRef(null);
  const yellowRef = useRef(null);
  const blueRef = useRef(null);
  const greenRef = useRef(null);

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
  }, []);
  useEffect(() => {
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
  }, []);
  useEffect(() => {
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
  }, []);
  useEffect(() => {
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
  }, []);

  return (
    <div className="brand">
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
  );
}
