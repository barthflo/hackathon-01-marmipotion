import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";
import {
  GiMineralHeart,
  GiGothicCross,
  GiVikingHelmet,
  GiPerspectiveDiceSixFacesSix,
} from "react-icons/gi";

export default function Header() {
  let [display, setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const listenScrollEvent = (e) => {
    if (window.scrollY > window.innerHeight) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  return (
    <div>
      <header className={display ? "headerOn" : "headerOff"}>
        <h1>
          <span>M</span>armi<span>P</span>otion
        </h1>
        <ul>
          <li>LOVE</li>
          <li>HEALNESS</li>
          <li>ESSENTIAL</li>
          <li>CHEATING</li>
        </ul>
        <div className="containerIconsNavbar">
          <GiMineralHeart className="IconsNavbar" />
          <GiGothicCross className="IconsNavbar" />
          <GiVikingHelmet className="IconsNavbar" />
          <GiPerspectiveDiceSixFacesSix className="IconsNavbar" />
        </div>
      </header>
    </div>
  );
}
