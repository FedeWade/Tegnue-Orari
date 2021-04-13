import "./App.css";
import SingleDayTable from "./Components/SingleDayTable";
import DayNavBar from "./Components/DayNavBar";

import firebase from "firebase";

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lunediSprints: [],
      martediSprints: [],
      mercolediSprints: [],
      giovediSprints: [],
      venerdiSprints: [],
      sabatoSprints: [],
      domenicaSprints: [],
      currentWeek: [],
    };
  }

  fetchDaySprintsFromDB(day) {
    const lunediRef = firebase.database().ref(day);
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

  componentDidMount() {
    this.fetchDaySprintsFromDB("lunedi");
    this.fetchDaySprintsFromDB("martedi");
    this.fetchDaySprintsFromDB("mercoledi");
    this.fetchDaySprintsFromDB("giovedi");
    this.fetchDaySprintsFromDB("venerdi");
    this.fetchDaySprintsFromDB("sabato");
    this.fetchDaySprintsFromDB("domenica");
  }

  render() {
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

    this.state.currentWeek.push(lunedi);
    this.state.currentWeek.push(martedi);
    this.state.currentWeek.push(mercoledi);
    this.state.currentWeek.push(giovedi);
    this.state.currentWeek.push(venerdi);
    this.state.currentWeek.push(sabato);
    this.state.currentWeek.push(domenica);

    return (
      <div className="app">
        <DayNavBar currentWeek={this.state.currentWeek}></DayNavBar>
        <div className="tablesWrapper">
          <SingleDayTable
            day="Lunedì"
            date={lunedi.getDate()}
            sprints={this.state.lunediSprints}
          ></SingleDayTable>

          <SingleDayTable
            day="Martedì"
            date={martedi.getDate()}
            sprints={this.state.martediSprints}
          ></SingleDayTable>

          <SingleDayTable
            day="Mercoledì"
            date={mercoledi.getDate()}
            sprints={this.state.mercolediSprints}
          ></SingleDayTable>

          <SingleDayTable
            day="Giovedì"
            date={giovedi.getDate()}
            sprints={this.state.giovediSprints}
          ></SingleDayTable>

          <SingleDayTable
            day="Venerdì"
            date={venerdi.getDate()}
            sprints={this.state.venerdiSprints}
          ></SingleDayTable>

          <SingleDayTable
            day="Sabato"
            date={sabato.getDate()}
            sprints={this.state.sabatoSprints}
          ></SingleDayTable>

          <SingleDayTable
            day="Domenica"
            date={domenica.getDate()}
            sprints={this.state.domenicaSprints}
          ></SingleDayTable>
        </div>
      </div>
    );
  }
}

export default App;
