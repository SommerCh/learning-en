import { useState, useEffect } from "react";

export default function ImagesGrid() {
  const [images, setImages] = useState([]);
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

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

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <div className="imagesgrid">
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
