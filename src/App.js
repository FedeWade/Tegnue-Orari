import "./App.css";
import SingleDayTable from "./Components/SingleDayTable";
import DayNavBar from "./Components/DayNavBar";
import HeaderBar from "./Components/HeaderBar";
import sorryF from "./sorry.jpg";

import firebase from "firebase";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lunediSprints: [{ hour: "", waiters: [] }],
      martediSprints: [{ hour: "", waiters: [] }],
      mercolediSprints: [{ hour: "", waiters: [] }],
      giovediSprints: [{ hour: "", waiters: [] }],
      venerdiSprints: [{ hour: "", waiters: [] }],
      sabatoSprints: [{ hour: "", waiters: [] }],
      domenicaSprints: [{ hour: "", waiters: [] }],
      currentWeek: [],
      currentWeekBoundaries: "",
      nextWeekBoundaries: "",
      showingNextWeek: false,
      stickWeekBar: "standard",
    };
    this.changeToNextWeek = this.changeToNextWeek.bind(this);
    this.changeToCurrentWeek = this.changeToCurrentWeek.bind(this);
    this.resetCurrentWeek = this.resetCurrentWeek.bind(this);
    this.checkErrorScreen = this.checkErrorScreen.bind(this);

    this.resetCurrentWeek();

    this.state.currentWeekBoundaries =
      this.state.currentWeek[0].getDate() +
      "-" +
      this.state.currentWeek[6].getDate();

    this.state.nextWeekBoundaries =
      this.addDays(this.state.currentWeek[0], 7).getDate() +
      "-" +
      this.addDays(this.state.currentWeek[6], 7).getDate();
  }

  resetCurrentWeek() {
    let currentDate = new Date();
    let currentDayOfWeek = currentDate.getDay();
    let currentDayOfMonth = currentDate.getDate();

    let domenica = new Date(
      new Date().setDate(currentDayOfMonth - currentDayOfWeek + 7)
    );
    let lunedi = new Date(
      new Date().setDate(currentDayOfMonth + (1 - currentDayOfWeek))
    );
    let martedi = new Date(
      new Date().setDate(currentDayOfMonth + (2 - currentDayOfWeek))
    );
    let mercoledi = new Date(
      new Date().setDate(currentDayOfMonth + (3 - currentDayOfWeek))
    );
    let giovedi = new Date(
      new Date().setDate(currentDayOfMonth + (4 - currentDayOfWeek))
    );
    let venerdi = new Date(
      new Date().setDate(currentDayOfMonth + (5 - currentDayOfWeek))
    );
    let sabato = new Date(
      new Date().setDate(currentDayOfMonth + (6 - currentDayOfWeek))
    );
    this.setState({ currentWeek: [] });

    this.state.currentWeek.push(lunedi);
    this.state.currentWeek.push(martedi);
    this.state.currentWeek.push(mercoledi);
    this.state.currentWeek.push(giovedi);
    this.state.currentWeek.push(venerdi);
    this.state.currentWeek.push(sabato);
    this.state.currentWeek.push(domenica);
  }

  fetchDaySprintsFromDB(date, day) {
    const lunediRef = firebase.database().ref(day + date);
    lunediRef.on("value", (snapshot) => {
      let sprints = snapshot.val();
      let newState = [];
      for (let sprint in sprints) {
        newState.push({
          hour: sprint,
          waiters: sprints[sprint],
        });
      }
      let stateName = day + "Sprints";
      this.setState({
        [stateName]: newState,
      });
    });
  }

  fetchCurrentWeekFromDB() {
    this.fetchDaySprintsFromDB(this.state.currentWeek[0].getDate(), "lunedi");
    this.fetchDaySprintsFromDB(this.state.currentWeek[1].getDate(), "martedi");
    this.fetchDaySprintsFromDB(
      this.state.currentWeek[2].getDate(),
      "mercoledi"
    );
    this.fetchDaySprintsFromDB(this.state.currentWeek[3].getDate(), "giovedi");
    this.fetchDaySprintsFromDB(this.state.currentWeek[4].getDate(), "venerdi");
    this.fetchDaySprintsFromDB(this.state.currentWeek[5].getDate(), "sabato");
    this.fetchDaySprintsFromDB(this.state.currentWeek[6].getDate(), "domenica");
  }

  componentDidMount() {
    this.fetchCurrentWeekFromDB();
    document.getElementById("currentWeek").disabled = true;

    window.addEventListener("scroll", () => {
      let elem = document.querySelector("#weekBar");
      if (elem === null) return;
      if (window.pageYOffset > 75) this.setState({ stickWeekBar: "sticky" });
      else if (window.pageYOffset <= 75)
        this.setState({ stickWeekBar: "standard" });
    });
  }

  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  decreaseDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  changeToNextWeek() {
    if (this.state.showingNextWeek === true) return;
    this.setState({ showingNextWeek: true });
    document.getElementById("nextWeek").disabled = true;
    document.getElementById("currentWeek").disabled = false;

    let newWeek = [];
    newWeek.push(this.addDays(this.state.currentWeek[0], 7));
    newWeek.push(this.addDays(this.state.currentWeek[1], 7));
    newWeek.push(this.addDays(this.state.currentWeek[2], 7));
    newWeek.push(this.addDays(this.state.currentWeek[3], 7));
    newWeek.push(this.addDays(this.state.currentWeek[4], 7));
    newWeek.push(this.addDays(this.state.currentWeek[5], 7));
    newWeek.push(this.addDays(this.state.currentWeek[6], 7));

    this.setState({ currentWeek: newWeek });

    this.fetchDaySprintsFromDB(newWeek[0].getDate(), "lunedi");
    this.fetchDaySprintsFromDB(newWeek[1].getDate(), "martedi");
    this.fetchDaySprintsFromDB(newWeek[2].getDate(), "mercoledi");
    this.fetchDaySprintsFromDB(newWeek[3].getDate(), "giovedi");
    this.fetchDaySprintsFromDB(newWeek[4].getDate(), "venerdi");
    this.fetchDaySprintsFromDB(newWeek[5].getDate(), "sabato");
    this.fetchDaySprintsFromDB(newWeek[6].getDate(), "domenica");
  }

  changeToCurrentWeek() {
    if (this.state.showingNextWeek === false) return;
    this.setState({ showingNextWeek: false });
    document.getElementById("currentWeek").disabled = true;
    document.getElementById("nextWeek").disabled = false;

    let newWeek = [];
    newWeek.push(this.decreaseDays(this.state.currentWeek[0], 7));
    newWeek.push(this.decreaseDays(this.state.currentWeek[1], 7));
    newWeek.push(this.decreaseDays(this.state.currentWeek[2], 7));
    newWeek.push(this.decreaseDays(this.state.currentWeek[3], 7));
    newWeek.push(this.decreaseDays(this.state.currentWeek[4], 7));
    newWeek.push(this.decreaseDays(this.state.currentWeek[5], 7));
    newWeek.push(this.decreaseDays(this.state.currentWeek[6], 7));

    this.setState({ currentWeek: newWeek });

    this.fetchDaySprintsFromDB(newWeek[0].getDate(), "lunedi");
    this.fetchDaySprintsFromDB(newWeek[1].getDate(), "martedi");
    this.fetchDaySprintsFromDB(newWeek[2].getDate(), "mercoledi");
    this.fetchDaySprintsFromDB(newWeek[3].getDate(), "giovedi");
    this.fetchDaySprintsFromDB(newWeek[4].getDate(), "venerdi");
    this.fetchDaySprintsFromDB(newWeek[5].getDate(), "sabato");
    this.fetchDaySprintsFromDB(newWeek[6].getDate(), "domenica");
  }

  checkErrorScreen() {
    if (
      !this.state.lunediSprints.length &&
      !this.state.martediSprints.length &&
      !this.state.mercolediSprints.length &&
      !this.state.giovediSprints.length &&
      !this.state.venerdiSprints.length &&
      !this.state.sabatoSprints.length &&
      !this.state.domenicaSprints.length
    ) {
      return (
        <div className="errorWrapper">
          <img
            src={sorryF}
            width="70"
            height="70"
            alt="sad face"
            id="sadface"
          ></img>
          <p className="errorMessage">
            Gli orari per questa settimana non sono ancora disponibili.
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="app">
        <DayNavBar currentWeek={this.state.currentWeek}></DayNavBar>

        <div id="weekBar" className={this.state.stickWeekBar}>
          <button
            className="weekButton"
            id="currentWeek"
            onClick={this.changeToCurrentWeek}
          >
            Settimana
            <br />
            <span className="weekNumbers">
              {this.state.currentWeekBoundaries}
            </span>
          </button>

          <button
            className="weekButton"
            id="nextWeek"
            onClick={this.changeToNextWeek}
          >
            Settimana
            <br />
            <span className="weekNumbers">{this.state.nextWeekBoundaries}</span>
          </button>
        </div>

        <HeaderBar></HeaderBar>

        <div className="tablesWrapper">
          <SingleDayTable
            day="Lunedì"
            date={this.state.currentWeek[0].getDate()}
            sprints={this.state.lunediSprints}
          ></SingleDayTable>

          <SingleDayTable
            day="Martedì"
            date={this.state.currentWeek[1].getDate()}
            sprints={this.state.martediSprints}
          ></SingleDayTable>

          <SingleDayTable
            day="Mercoledì"
            date={this.state.currentWeek[2].getDate()}
            sprints={this.state.mercolediSprints}
          ></SingleDayTable>

          <SingleDayTable
            day="Giovedì"
            date={this.state.currentWeek[3].getDate()}
            sprints={this.state.giovediSprints}
          ></SingleDayTable>

          <SingleDayTable
            day="Venerdì"
            date={this.state.currentWeek[4].getDate()}
            sprints={this.state.venerdiSprints}
          ></SingleDayTable>

          <SingleDayTable
            day="Sabato"
            date={this.state.currentWeek[5].getDate()}
            sprints={this.state.sabatoSprints}
          ></SingleDayTable>

          <SingleDayTable
            day="Domenica"
            date={this.state.currentWeek[6].getDate()}
            sprints={this.state.domenicaSprints}
          ></SingleDayTable>

          {this.checkErrorScreen()}
        </div>

        <div className="copyContainer">
          <p className="copy"> Copyright &copy; Federico Ballarin</p>
        </div>
      </div>
    );
  }
}

export default App;
