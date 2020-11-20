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
    if (window.innerWidth > 414){
      if (window.scrollY > window.innerHeight - 100){
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    } else{
      if ((window.scrollY > window.innerHeight - 400) && (display === false)){
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    }
  };

  return (
      <header className={display ? "headerOn" : "headerOff"}>
        <h1>
          <span>M</span>armi<span>P</span>otion
        </h1>

        <div className="content-link">
          <a href="#potions" onClick={() => toggleActive("Love")} className={classnames({active : activePotions === "Love"})}>LOVE</a>
          <a href="#potions" onClick={() => toggleActive("Healness")} className={classnames({active : activePotions === "Healness"})}>HEALNESS</a>
          <a href="#potions" onClick={() => toggleActive("Essential")} className={classnames({active : activePotions === "Essential"})}>ESSENTIAL</a>
          <a href="#potions" onClick={() => toggleActive("Cheating")} className={classnames({active : activePotions === "Cheating"})}>CHEATING</a>
        </div>
        
        <div className="containerIconsNavbar">
          <a href="#potions"><GiMineralHeart className="IconsNavbar" onClick={() => toggleActive("Love")} /></a>
          <a href="#potions"><GiGothicCross className="IconsNavbar" onClick={()=>toggleActive("Healness")}/></a>
          <a href="#potions"><GiVikingHelmet className="IconsNavbar" onClick={() => toggleActive("Essential")}/></a>
          <a href="#potions"><GiPerspectiveDiceSixFacesSix className="IconsNavbar" onClick={() => toggleActive("Cheating")}/></a>
        </div>
      </header>
  );
}
