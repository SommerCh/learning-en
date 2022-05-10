import React, { forwardRef } from "react";

const Grid = forwardRef(
  ({ imageData, current, view, setCurrent, setView }, ref) => {
    return (
      <div className="grid-wrapper">
        {imageData.map((image, i) => {
          return (
            <img
              onClick={() => {
                setCurrent(i);
                setTimeout(() => setView("slides"), 0);
              }}
              img-id={image.id}
              ref={current === i ? ref : null}
              className={`${
                current === i ? "grid-image current" : "grid-image"
              } ${view === "slides" ? "slide" : ""}`}
              src={image.url}
              alt={image.id}
              key={image.id}
            />
          );
        })}
      </div>
    );
  }
);

export default Grid;
