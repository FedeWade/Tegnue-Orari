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
    else if (name === "Valentina") return "#9932CC";
    else if (name === "Federico") return "#79c753";
    else if (name === "Laura") return "#75b7f0";
    else if (name === "Alice") return "#f07ab5";
    else if (name === "Lorenzo") return "#20B2AA";
    else if (name === "Nicoletta") return "#f2c40d";
    else if (name === "Alan") return "#009900";
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
