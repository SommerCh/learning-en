import React, { forwardRef } from "react";

const Slides = forwardRef(({ imageData, current, view }, ref) => {
  return (
    <div className="slides-wrapper">
      {imageData.map((image, i) => {
        return (
          <img
            data-flip-id={image.id}
            ref={current === i ? ref : null}
            className={`${current === i ? "slide current" : "slide"} ${
              view === "grid" ? "grid" : ""
            }`}
            src={image.url}
            alt={image.id}
            key={image.id}
          />
        );
      })}
    </div>
  );
});

export default Slides;
