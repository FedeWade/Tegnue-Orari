import "./DayNavBar.css";
import React from "react";

class DayNavBar extends React.Component {
  render() {
    return (
      <div className="navBarWrapper">
        <ul className="navBar">
          <li>
            <a href="#Lunedì">Lun {this.props.currentWeek[0].getDate()}</a>
          </li>
          <li>
            <a href="#Martedì">Mar {this.props.currentWeek[1].getDate()}</a>
          </li>
          <li>
            <a href="#Mercoledì">Mer {this.props.currentWeek[2].getDate()}</a>
          </li>
          <li>
            <a href="#Giovedì">Gio {this.props.currentWeek[3].getDate()}</a>
          </li>
          <li>
            <a href="#Venerdì">Ven {this.props.currentWeek[4].getDate()}</a>
          </li>
          <li>
            <a href="#Sabato">Sab {this.props.currentWeek[5].getDate()}</a>
          </li>
          <li>
            <a href="#Domenica">Dom {this.props.currentWeek[6].getDate()}</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default DayNavBar;
