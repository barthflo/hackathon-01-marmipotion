import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";
import {
  GiMineralHeart,
  GiGothicCross,
  GiVikingHelmet,
  GiPerspectiveDiceSixFacesSix,
} from "react-icons/gi";

export default function Header({activePotions, toggleActive}) {
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
          <li onClick={() => toggleActive("Love")}>LOVE</li>
          <li onClick={() => toggleActive("Strength")}>HEALNESS</li>
          <li >ESSENTIAL</li>
          <li>CHEATING</li>
        </ul>
        <div className="containerIconsNavbar">
          <GiMineralHeart className="IconsNavbar" onClick={() => toggleActive("Love")} />
          <GiGothicCross className="IconsNavbar" onClick={()=>toggleActive("Strength")}/>
          <GiVikingHelmet className="IconsNavbar" />
          <GiPerspectiveDiceSixFacesSix className="IconsNavbar" />
        </div>
      </header>
    </div>
  );
}
