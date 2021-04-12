import "./Waiter.css";
import React from "react";

class Waiter extends React.Component {
  constructor(props) {
    super(props);
    let color = this.getBgColor(this.props.waiterName);

    this.state = { bgColor: color };
  }

  getBgColor(name) {
    if (name === "Federico") return "#d2691e";
    else if (name === "Valentina") return "#5b5ea6";
    else if (name === "Luca") return "#b93a32";
    else if (name === "Paolo") return "#d5ae41";
    else if (name === "Sergio") return "#672e3b";
    else if (name === "Stefano") return "#79c753";
    else if (name === "Michela") return "#92b6d5";
  }

  render() {
    return (
      <p style={{ backgroundColor: this.state.bgColor }} className="waiter">
        {this.props.waiterName}
      </p>
    );
  }
}
export default Waiter;
