import "./HeaderBar.css";
import React from "react";
import mainLogo from "../logotegnue.png";
import Logo from "../logotegnuebgg.png";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="headerWrapper">
        <img className="logo" src={Logo} alt="logo" />
        <p className="headerTitle">
          Le Tegnùe
          <br />
          Orari
        </p>
      </div>
    );
  }
}

export default HeaderBar;
