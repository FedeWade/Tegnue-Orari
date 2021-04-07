import "./App.css";
import Employee from "./Components/Employee";
import SingleDayTable from "./Components/SingleDayTable";

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
    };
  }

  fetchDaySprintsFromDB(day) {
    const lunediRef = firebase.database().ref(day);
    lunediRef.on("value", (snapshot) => {
      let sprints = snapshot.val();
      let newState = [];
      for (let sprint in sprints) {
        newState.push({
          day: sprint,
          waiter: sprints[sprint].waiter,
          hour: sprints[sprint].hour,
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

    return (
      <div className="app">
        <section className="display-item">
          <div className="wrapper">
            <h2>Lunedi</h2>
            <ul>
              {this.state.lunediSprints.map((sprint) => {
                return (
                  <li key={sprint.id}>
                    <h3>{sprint.waiter}</h3>
                    <p>hour: {sprint.hour}</p>
                  </li>
                );
              })}

              {this.state.martediSprints.map((sprint) => {
                return (
                  <li key={sprint.id}>
                    <h3>{sprint.waiter}</h3>
                    <p>hour: {sprint.hour}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <SingleDayTable
          day={lunedi.getDate()}
          sprints={this.state.lunediSprints}
        ></SingleDayTable>
      </div>
    );
  }
}

export default App;
