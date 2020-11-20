import React from "react";
import "./Intro.css";
import Portrait from "../../assets/Portrait.png";
import {Fade} from 'react-reveal';

export default function Intro() {
  return (
    <div id="intro">
      <div className="containerIntro">
        <h2>
          Are you witcher ? You tired of getting kicked out ? Tired of pretending
          to be the wicked witch ? Come and try our potions which are useful to
          the population !!
        </h2>
        <article>
          <Fade left duration={1000}>
          <img src={Portrait} alt="Photography of Agnes" />
          </Fade>
          <Fade  right duration={1000}>
            <div className='textContainer'>
              <p>Hello noble visitor,</p>
              <p>
                I am Agnes Sampsom, witches from mothers to daughters for four
                generations. The witch situation being difficult in these times,
                so we decided to create the associations of mistreated witches, in
                collaboration with other witches. The goal of this association is
                to help witches to integrate into society. We share with you here
                our best potions which will delight young and old, and will help
                you in your daily life! I would particularly like to thank Théo,
                Florent, Lola and Florian for helping us to carry out our project.
              </p>
              <p>Agnes Sampsom – Founder of the associations of mistreated witches</p>
            </div>
          </Fade>
        </article>
      </div>
    </div>
  );
}
