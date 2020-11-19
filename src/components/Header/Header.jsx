import React from "react";
import "./Header.css";
import {
  GiMineralHeart,
  GiGothicCross,
  GiVikingHelmet,
  GiPerspectiveDiceSixFacesSix,
} from "react-icons/gi";

class Header extends React.Component {
  state = {
    display: false,
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > window.innerHeight - 10) {
      this.setState({ display: true });
    } else {
      this.setState({ display: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div>
        <header className={this.state.display ? "headerOn" : "headerOff"}>
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
}

export default Header;
