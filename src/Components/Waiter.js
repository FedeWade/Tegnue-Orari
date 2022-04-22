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
    else if (name === "Modu") return "#4242f0";
    else if (name === "Francesco") return "#85144b";
    else if (name === "Luca") return "#c72e23";
    else if (name === "Valentina") return "#333333";
    else if (name === "Federico") return "#79c753";
    else if (name === "Lucio") return "#75b7f0";
    else if (name === "Claudia") return "#f07ab5";
    else if (name === "Hamza") return "#20B2AA";
    else if (name === "Fallou") return "#b98a52";
    else if (name === "Danilo") return "#e59900";
    else if (name === "Michelle") return "#cb42f5";
    else if (name === "Bibbò") return "#004080";
    else if (name === "Nadir") return "#3D9970";
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
