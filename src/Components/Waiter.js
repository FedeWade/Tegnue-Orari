import "./Waiter.css";
import React from "react";

class Waiter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bgColor: "" };
  }

  setColor() {
    let color = this.getBgColor(this.props.waiterName);
    if (color !== this.state.bgColor) {
      this.setState({ bgColor: color });
    }
  }

  getBgColor(name) {
    if (name === "Michele") return "#FF7F50";
    else if (name === "Elia") return "#4242f0";
    else if (name === "Kemzo") return "#672e3b";
    else if (name === "Luca") return "#c72e23";
    else if (name === "Valentina") return "#333333";
    else if (name === "Federico") return "#79c753";
    else if (name === "Lucio") return "#75b7f0";
    else if (name === "Girotti") return "#f07ab5";
    else if (name === "Modou" || name === "Modu") return "#20B2AA";
    else if (name === "Cesare") return "#f2c40d";
    else if (name === "Leonardo") return "#006e0f";
    else if (name === "Francesca") return "#cb42f5";
    else if (name === "Bibbò") return "#004080";
  }

  render() {
    this.setColor();
    return (
      <p style={{ backgroundColor: this.state.bgColor }} className="waiter">
        {this.props.waiterName}
      </p>
    );
  }
}
export default Waiter;
