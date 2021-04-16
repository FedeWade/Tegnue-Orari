import "./DayNavBar.css";
import React from "react";

class DayNavBar extends React.Component {
  state = {
    //not good but needed because navbar loaded before tables
    lunediVisibility: "normal",
  };

  getElementPosition(elementID) {
    let elem = document.querySelector(elementID);
    if (elem === null) return 0;
    let rect = elem.getBoundingClientRect();
    return rect;
  }

  isNowOnScreen(elementID) {
    let position = this.getElementPosition(elementID);
    if (position.top <= 250 && position.bottom > 250) return true;
    return false;
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let lunediVisibility = "normal";
      let martediVisibility = "normal";
      let mercolediVisibility = "normal";
      let giovediVisibility = "normal";
      let venerdiVisibility = "normal";
      let sabatoVisibility = "normal";
      let domenicaVisibility = "normal";

      if (this.isNowOnScreen("#Lunedì")) lunediVisibility = "nowActive";
      if (this.isNowOnScreen("#Martedì")) martediVisibility = "nowActive";
      if (this.isNowOnScreen("#Mercoledì")) mercolediVisibility = "nowActive";
      if (this.isNowOnScreen("#Giovedì")) giovediVisibility = "nowActive";
      if (this.isNowOnScreen("#Venerdì")) venerdiVisibility = "nowActive";
      if (this.isNowOnScreen("#Sabato")) sabatoVisibility = "nowActive";
      if (this.isNowOnScreen("#Domenica")) domenicaVisibility = "nowActive";

      this.setState({
        lunediVisibility,
        martediVisibility,
        mercolediVisibility,
        giovediVisibility,
        venerdiVisibility,
        sabatoVisibility,
        domenicaVisibility,
      });
    });
  }

  render() {
    return (
      <div className="navBarWrapper">
        <ul className="navBar">
          <li>
            <a className={this.state.lunediVisibility} href="#Lunedì">
              Lun {this.props.currentWeek[0].getDate()}
            </a>
          </li>
          <li>
            <a className={this.state.martediVisibility} href="#Martedì">
              Mar {this.props.currentWeek[1].getDate()}
            </a>
          </li>
          <li>
            <a className={this.state.mercolediVisibility} href="#Mercoledì">
              Mer {this.props.currentWeek[2].getDate()}
            </a>
          </li>
          <li>
            <a className={this.state.giovediVisibility} href="#Giovedì">
              Gio {this.props.currentWeek[3].getDate()}
            </a>
          </li>
          <li>
            <a className={this.state.venerdiVisibility} href="#Venerdì">
              Ven {this.props.currentWeek[4].getDate()}
            </a>
          </li>
          <li>
            <a className={this.state.sabatoVisibility} href="#Sabato">
              Sab {this.props.currentWeek[5].getDate()}
            </a>
          </li>
          <li>
            <a className={this.state.domenicaVisibility} href="#Domenica">
              Dom {this.props.currentWeek[6].getDate()}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default DayNavBar;
