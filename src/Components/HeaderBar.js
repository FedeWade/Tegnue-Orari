import "./HeaderBar.css";
import React from "react";
import Logo from "../android-chrome-192x192.png";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="headerWrapper">
        <img className="logo" src={Logo} alt="logo" />
        <p className="headerTitle1">Le Tegnùe</p>
        <p className="headerTitle2">Orari</p>
      </div>
    );
  }
}

export default HeaderBar;
