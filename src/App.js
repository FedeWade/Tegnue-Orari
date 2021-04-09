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

    return (
      <div className="app">
        <section className="display-item">
          <div className="wrapper">
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

            <h2>Lunedi</h2>
            <ul>
              {this.state.lunediSprints.map((sprint) => {
                return (
                  <li>
                    <h3>
                      waiters:
                      {sprint.waiters.map((waiter) => waiter)}
                    </h3>
                    <p>hour: {sprint.hour}</p>
                  </li>
                );
              })}

              {this.state.martediSprints.map((sprint) => {
                return (
                  <li>
                    <h3>waiters:{sprint.waiters[0]}</h3>
                    <p>hour: {sprint.hour}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
