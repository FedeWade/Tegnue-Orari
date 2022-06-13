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
    //#004080"girl color
    if (name === "Michele") return "#FF7F50";
    else if (name === "Modu") return "#4242f0";
    else if (name === "Luca") return "#c72e23";
    else if (name === "Valentina") return "#223a5e";
    else if (name === "Federico") return "#79c753";
    else if (name === "Lucio") return "#75b7f0";
    else if (name === "Claudia") return "#f07ab5";
    else if (name === "Hamza") return "#20B2AA";
    else if (name === "Fallou") return "#b98a52";
    else if (name === "Maikel") return "#e59900";
    else if (name === "Michelle") return "#cb42f5";
    else if (name === "Nadir") return "#85144b";
    else if (name === "Ridha") return "#00A170";
    else if (name === "Gabriele") return "#6B5876";
    else if (name === "Giulia") return "#FF69B4";
  }

  render() {
    if (this.props.waiterName === "") return " ";

    this.setColor();

    return (
      <p
        style={{
          backgroundColor: this.state.bgColor,
        }}
        className="waiter"
        onClick={this.props.onClick}
      >
        {this.props.waiterName}
      </p>
    );
  }
}
export default Waiter;
