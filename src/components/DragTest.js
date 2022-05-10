import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

export default function Box() {
  gsap.registerPlugin(Draggable);

  const drag = useRef();

  useEffect(() => {
    const draggable = new Draggable(drag.current);

    return () => draggable.kill();
  }, []);


  return (
    <div className="drag" ref={drag}>
      Drag Me
    </div>
  );
}
