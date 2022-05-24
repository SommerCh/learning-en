import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Video from "../assets/video/video-farver.mp4";

export default function Section4() {
  gsap.registerPlugin(ScrollTrigger);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = document.querySelector("#video");

    ScrollTrigger.create({
      trigger: ".videoplayer",
      start: "center top",
      end: "bottom top",
      onEnter: () => video.play(),
      onEnterBack: () => video.play(),
      onLeave: () => video.pause(),
      onLeaveBack: () => video.pause(),
    });

    gsap.fromTo(
      "#video",
      {
        x: 2000,
        y: 100,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        y: 100,
        scrollTrigger: {
          trigger: ".s4",
          start: "top top",
          end: "bottom center",
          ease: "expo.inOut",
          scrub: true,
          pin: true,
        },
      }
    );
  }, []);

  return (
    <div className="section s4">
      <div className="videoplayer" >
        <video ref={videoRef} id="video" controls autoplay muted>
          <source className="videosource" src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
