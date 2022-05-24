import "./HeaderBar.css";
import React from "react";
import Logo from "../android-chrome-192x192.png";
import Meme from "../memeluca.png";

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1, memeClass: "noshow" };
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  componentDidUpdate() {
    if (this.state.memeClass === "show") {
      setTimeout(() => this.setState({ memeClass: "noshow" }), 4000);
    }
  }

  buttonClicked(event) {
    if (this.state.value === 16) return;
    this.setState({ value: this.state.value + 1 });
    if (this.state.value === 15 && this.state.memeClass === "noshow") {
      this.setState({ memeClass: "show" });
    }
  }

  render() {
    //let memeClass = this.state.value > 20 ? "show" : "noshow";
    return (
      <div className="headerWrapper">
        <img
          className="logo"
          src={Logo}
          alt="logo"
          onClick={() => this.buttonClicked()}
        />
        <img className={this.state.memeClass} src={Meme} alt="meme" />

        <p className="headerTitle1">Le Tegnùe</p>
        <p className="headerTitle2">Orari</p>
      </div>
    );
  }
}

export default HeaderBar;
