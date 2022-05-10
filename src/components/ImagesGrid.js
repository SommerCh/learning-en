import { useState, useEffect } from "react";

export default function ImagesGrid() {
  const [images, setImages] = useState([]);
  const [Isstyle, setStyle] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function getData() {
      const res = await fetch("data.json");
      const data = await res.json();
      console.log(data);
      setImages(data);
      console.log();
    }
    getData();
  }, []);

  const styles = {
    position: "absolute",
      width: "100%" ,
      padding: "0% 22%" ,
      backgroundColor: "rgba(119, 119, 119, 0.377)",
      zIndex: "5",
      display: "block",
      top: "0%,",
      textAlign:"center"
  
  };

  function changeStyle() {
    setStyle(!Isstyle);
  }

  const handlePrev = () => {
    setIndex(index - 1);
  };

  const handleNext = () => {
    setIndex(index + 1);
  };

  return (
    <div className="imagepage">
      <button className="gridbutton" onClick={changeStyle}>
        Slider
      </button>

      <div className="slider" style={Isstyle ? styles : null}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        <img src={images[index]?.url} alt="pic" />
      </div>

      <div className="imagesgrid" >
        {images.map((image) => (
          <div className="grid-img">
            <h2>{image.author}</h2>
            <img src={image.url} alt={image.author} />
          </div>
        ))}
      </div>
    </div>
  );
}
