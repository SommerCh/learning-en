import { useState, } from "react";
import { NavLink } from "react-router-dom";

export default function ChangeStyle() {
  const [style, setStyle] = useState("cont");

  const changeStyle = () => {
    setStyle("cont2");
  };

  return (
    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
      <span onClick={changeStyle} className="first-icon">
        Dark |
      </span>
      <span className="sec-icon"> Light</span>
    </NavLink>
  );
}
