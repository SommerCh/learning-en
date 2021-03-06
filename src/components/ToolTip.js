// By Sofie

import React from "react";

export default function Tooltip({ children, text, ...rest }) {
    const [show, setShow] = React.useState(false);
  
    // Tooltip component, to display the Zone badges on product articles, and display Zone name when hovered over

    return (
        <div className="badge-element">
            <span className="tooltip" style={show ? { visibility: "visible" } : {}}>
                {text}
                <span className="tooltip-arrow" />
            </span>
            <div className="badge-img"
                {...rest}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                {children}
            </div>
        </div>
    );
  }
  