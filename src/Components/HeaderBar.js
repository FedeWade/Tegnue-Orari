import "./HeaderBar.css";
import React from "react";
import mainLogo from "../logotegnue.png";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="headerWrapper">
        <img src={mainLogo} alt="logo" />
        <p className="headerTitle">
          Orari<br></br>Le Tegnùe
        </p>
      </div>
    );
  }
}

export default HeaderBar;
