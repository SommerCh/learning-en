import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiStar } from "react-icons/fi";
// import Logo from "../assets/logo.svg";

export default function Navbar() {
    const [isClosed, setClosed] = useState(true);

    // <div className="nav-links">
    //             <NavLink to="/products"> Products</NavLink>
    //         </div>

    return (
        <nav>
        <div>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <span className="first-icon">Dark |</span>
            <span className="sec-icon"> Light</span>
          </NavLink>
        </div>
  
        <div className={`burger ${isClosed ? "" : "open"}`} onClick={() => setClosed(!isClosed)}>
          <div class="lines line1"></div>
          <div class=" lines line2"></div>
          <div class=" lines line3"></div>
  
          <ul className={`menu ${isClosed ? "" : "open"}`}>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="icon">
                  Home
                  <FiHome />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="icon">
                  About
                  <FiStar />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
}
