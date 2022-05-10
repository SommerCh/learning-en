import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import images from "./data/imageData";
import Slides from "./slides";
import Grid from "./grid";

gsap.registerPlugin(Flip);

export default function ImagesOutput() {
  const [imageData, setImageData] = useState(images);
  const [view, setView] = useState("slides");
  const [current, setCurrent] = useState(0);
  const gsapSlideRef = useRef(null);
  const gsapGridRef = useRef(null);
  let state =
    view === "grid" ? Flip.getState(gsapSlideRef.current) : Flip.getState(gsapGridRef.current);

  useLayoutEffect(() => {
    if (view === "grid") {
      Flip.from(state, {
        targets: gsapGridRef.current,
        duration: 0.6,
        ease: "power4.inOut",
        scale: true,
      });
    } else {
      Flip.from(state, {
        targets: gsapSlideRef.current,
        duration: 0.6,
        ease: "power4.inOut",
        scale: true,
      });
    }
  }, [view, state]);
  
  return (
    <div className="imagesoutput">



      <img
        alt="background"
        className="background"
        src={current === 0 ? imageData[imageData.length - 1].url : imageData[current - 1].url}
      />

      <button onClick={() => setCurrent(current === 0 ? imageData.length - 1 : current - 1)}>
        PREV
      </button>
      <button onClick={() => setCurrent(current === imageData.length - 1 ? 0 : current + 1)}>
        NEXT
      </button>
      <button onClick={() => setView((view) => (view === "slides" ? "grid" : "slides"))}>
        {view === "grid" ? "SLIDES" : "GRID"}
      </button>
      <span> current: {current}</span>
      {view === "grid" ? (
        <Grid
          setCurrent={setCurrent}
          setImageData={setImageData}
          setView={setView}
          imageData={imageData}
          current={current}
          ref={gsapGridRef}
          view={view}
        />
      ) : (
        <Slides imageData={imageData} current={current} ref={gsapSlideRef} view={view} />
      )}
    </div>
  );
}
