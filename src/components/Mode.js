import { useState } from "react";

export default function Mode() {
  const [mode, setMode] = useState("false");

  const toggleLight = () => {
    setMode(!mode);
  };

  return (
    <div>
    <span className="dark">Dark |</span>
    <span onClick={toggleLight} className="light"> Light</span>
  </div>
  );
}
