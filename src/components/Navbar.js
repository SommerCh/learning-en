import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiStar } from "react-icons/fi";
import Logo from "../assets/logo.svg";

export default function Navbar() {
    const [isClosed, setClosed] = useState(true);

    return (
        <nav>
            <div className="brand">
                <NavLink to="/">
                    <img src={Logo} alt="logo" />
                </NavLink>
            </div>

            <div className="nav-links">
                <NavLink to="/products"> Products</NavLink>
            </div>
            
            <div className={`burger ${isClosed ? "" : "open"}`} onClick={() => setClosed(!isClosed)}>
                <div class="line line1"></div>
                <div class=" line line2"></div>
                <div class=" line line3"></div>

                <ul className={`menu ${isClosed ? "" : "open"}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                            <span className="icon">
                                Home <FiHome />
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                            <span className="icon">
                                About <FiStar />
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
