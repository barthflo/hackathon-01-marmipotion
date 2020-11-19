import React from "react";
import "./Header.css";
import classnames from 'classnames';
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
      <header className={display ? "headerOn" : "headerOff"}>
        <h1>
          <span>M</span>armi<span>P</span>otion
        </h1>

        <div className="content-link">
          <a onClick={() => toggleActive("Love")} className={classnames({active : activePotions === "Love"})}>LOVE</a>
          <a onClick={() => toggleActive("Healness")} className={classnames({active : activePotions === "Healness"})}>HEALNESS</a>
          <a onClick={() => toggleActive("Essential")} className={classnames({active : activePotions === "Essential"})}>ESSENTIAL</a>
          <a onClick={() => toggleActive("Cheating")} className={classnames({active : activePotions === "Cheating"})}>CHEATING</a>
        </div>
        
        <div className="containerIconsNavbar">
          <GiMineralHeart className="IconsNavbar" onClick={() => toggleActive("Love")} />
          <GiGothicCross className="IconsNavbar" onClick={()=>toggleActive("Strength")}/>
          <GiVikingHelmet className="IconsNavbar" onClick={() => toggleActive("Essential")}/>
          <GiPerspectiveDiceSixFacesSix className="IconsNavbar" onClick={() => toggleActive("Cheating")}/>
        </div>
      </header>
  );
}
