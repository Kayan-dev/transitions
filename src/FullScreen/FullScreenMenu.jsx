import React, { useState } from "react";
import "./FullScreenMenu.css";

export default function FullScreenMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <div className="FullscreenMenu">hello</div>}
      <ul>
        {["Home", "About us", "Portfolio", "Contact"].map((text, i) => {
          return (
            <li key={i}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                }}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <button
        className="FullscreenMenuToggler"
        style={{ color: open ? "white" : "black" }}
        onClick={() => setOpen(!open)}
      >
        <svg width="2rem" height="2rem" viewBox="0 0 24 24">
          <g stroke="currentColor" strokeWidth={2}>
            <line x1="0" y1="4" x2="24" y2="4" />
            <line x1="0" y1="12" x2="24" y2="12" />
            <line x1="0" y1="20" x2="24" y2="20" />
          </g>
        </svg>
      </button>
    </>
  );
}
