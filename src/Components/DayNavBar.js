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
          <li className="sDay">
            <button
              className={this.state.lunediVisibility}
              id="nav1"
              onClick={() => {
                var elmnt = document.getElementById("Lunedì");
                if (!elmnt) return;
                elmnt.scrollIntoView();
              }}
            >
              Lun
              <br />
              <span className="dayNumber">
                {this.props.currentWeek[0].getDate()}
              </span>
            </button>
          </li>
          <li className="sDay">
            <button
              className={this.state.martediVisibility}
              id="nav2"
              onClick={() => {
                var elmnt = document.getElementById("Martedì");
                if (!elmnt) return;
                elmnt.scrollIntoView();
              }}
            >
              Mar
              <br />
              <span className="dayNumber">
                {this.props.currentWeek[1].getDate()}
              </span>
            </button>
          </li>
          <li className="sDay">
            <button
              className={this.state.mercolediVisibility}
              id="nav3"
              onClick={() => {
                var elmnt = document.getElementById("Mercoledì");
                if (!elmnt) return;
                elmnt.scrollIntoView();
              }}
            >
              Mer
              <br />
              <span className="dayNumber">
                {this.props.currentWeek[2].getDate()}
              </span>
            </button>
          </li>
          <li className="sDay">
            <button
              className={this.state.giovediVisibility}
              id="nav4"
              onClick={() => {
                var elmnt = document.getElementById("Giovedì");
                if (!elmnt) return;
                elmnt.scrollIntoView();
              }}
            >
              Gio
              <br />
              <span className="dayNumber">
                {this.props.currentWeek[3].getDate()}
              </span>
            </button>
          </li>
          <li className="sDay">
            <button
              className={this.state.venerdiVisibility}
              id="nav5"
              onClick={() => {
                var elmnt = document.getElementById("Venerdì");
                if (!elmnt) return;
                elmnt.scrollIntoView();
              }}
            >
              Ven
              <br />
              <span className="dayNumber">
                {this.props.currentWeek[4].getDate()}
              </span>
            </button>
          </li>
          <li className="sDay">
            <button
              className={this.state.sabatoVisibility}
              id="nav6"
              onClick={() => {
                var elmnt = document.getElementById("Sabato");
                if (!elmnt) return;
                elmnt.scrollIntoView();
              }}
            >
              Sab
              <br />
              <span className="dayNumber">
                {this.props.currentWeek[5].getDate()}
              </span>
            </button>
          </li>
          <li className="sDay">
            <button
              className={this.state.domenicaVisibility}
              id="nav0"
              onClick={() => {
                var elmnt = document.getElementById("Domenica");
                if (!elmnt) return;
                elmnt.scrollIntoView();
              }}
            >
              Dom
              <br />
              <span className="dayNumber">
                {this.props.currentWeek[6].getDate()}
              </span>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default DayNavBar;
